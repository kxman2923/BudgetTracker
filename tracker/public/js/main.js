var init_page = function() {
    Handlebars.registerPartial('navbar', Handlebars.templates['navbar']);
    isLoggedIn(function(data) {
        if(data.logged) {
            getUser(function(user) {
                view_budgets(user);
            });
        } else {
            view_login({failed: false});
        }
    });
}

var view_login = function(data) {
    $(".page").html(Handlebars.templates['login'](data));
}

var view_budgets = function(user) {
    budgets = {watched: [], moderated: []};

    if(user.moderatedBudgets.length === 0) {
        if(user.watchedBudgets.length === 0) {
            $(".page").html(Handlebars.templates['budgets'](budgets));
        } else {
            for(var j=0; j<user.watchedBudgets.length; j++) {
                getBudget(user.watchedBudgets[j], function(wbudget) {
                    budgets.watched.push(wbudget);
                    if(budgets.watched.length === user.watchedBudgets.length) {
                        $(".page").html(Handlebars.templates['budgets'](budgets));
                    }
                });
            }
        }
    } else {
        for(var i=0; i<user.moderatedBudgets.length; i++) {
            getBudget(user.moderatedBudgets[i], function(mbudget) {
                budgets.moderated.push(mbudget);
                if(budgets.moderated.length === user.moderatedBudgets.length) {
                    if(user.watchedBudgets.length === 0) {
                        $(".page").html(Handlebars.templates['budgets'](budgets));
                    } else {
                        for(var j=0; j<user.watchedBudgets.length; j++) {
                            getBudget(user.watchedBudgets[j], function(wbudget) {
                                budgets.watched.push(wbudget);
                                if(budgets.watched.length === user.watchedBudgets.length) {
                                    $(".page").html(Handlebars.templates['budgets'](budgets));
                                }
                            });
                        }
                    }
                }
            });
        }
    }
}

var view_add_budget = function() {
    $(".page").html(Handlebars.templates['add_budget']());
}

var view_costs = function(budget) {
    budget.nice_costs = [];
    getUser(function(user) {
        budget.isAdmin = false;
        if(user._id == budget.admin) {
            budget.isAdmin = true;
        }
        if(budget.listOfCosts.length === 0) {
            $(".page").html(Handlebars.templates['costs'](budget));
        } else {
            for(var i=0; i<budget.listOfCosts.length; i++) {
                getCost(budget.listOfCosts[i], function(cost) {
                    budget.nice_costs.push(cost);

                    if(budget.nice_costs.length === budget.listOfCosts.length) {
                        $(".page").html(Handlebars.templates['costs'](budget));
                    }
                });
            }
        }
    });
}

//Handler that edits provides functionality for the user settings page
var view_edit_user = function(user) {
    //Load the page
    $(".page").html(Handlebars.templates['edit_user'](user));

    //If the save button is clicked, check the fields
    //If any of the fields are empty, use the old name, email, and/or password
    // as the "new" value that needs to be inputted
    // (allows the user to change only one field if needed)
    $("#save").click(function(){
        var newFn=$("#fn").val();
        var newEmail= $("#email").val();
        var newPs= $("#ps").val();
        if(newFn.length ===0){
            newFn= user.fullName;
        }
        if(newEmail.length ===0){
            newEmail= user.email;
        }
        if(newPs.length===0){
            newPs= user.password;
        }
        getUser(function(user){
            changeFullName(newFn, function(){
                changeEmail(newEmail, function(){
                    changePassword(newPs, function(){
                        if(user.err){
                            view_login({failed: false});
                        } else{
                            view_budgets(user);
                        }
                    });
                });
            });
        });
    });

    //If the delete button is clicked, that user will be logged out and that account
    // will be deleted.
    $("#delete").click(function(){
        deleteUser(function(){
            view_login({failed: false});
        });
    });
}

var view_add_cost = function(bid) {
    $(".page").html(Handlebars.templates['add_cost']({bid:bid}));
}

var view_watchers = function(budget) {
    budget.nice_watchers = [];
    getUser(function(user) {
        budget.isAdmin = false;
        if(budget.admin == user._id) {
            budget.isAdmin = true;
        }
        if(budget.watchers.length === 0) {
                    $(".page").html(Handlebars.templates['watchers'](budget));
        } else {
            for(var j=0; j<budget.watchers.length; j++) {
                getUserInfo(budget.watchers[j], function(wuser) {
                    budget.nice_watchers.push(wuser);

                    if(budget.nice_watchers.length === budget.watchers.length) {
                        $(".page").html(Handlebars.templates['watchers'](budget));
                    }
                });
            }
        }
    });
}

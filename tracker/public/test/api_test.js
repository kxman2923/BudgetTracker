var run_tests = function() {
    test_addUser();
}

var test_addUser = function() {
    addUser("test", "pass", "test@mit.edu", "Test Testington", function(user) {
        // info should be the same
        if(("test" === user.username) &&
            ("pass" === user.password) &&
            ("test@mit.edu" === user.email) &&
            ("Test Testington" === user.fullName)) {
            $('.addUser').html("<p>addUser Success</p>");
        } else {
            $('.addUser').html("<p>addUser Failure</p>")
        }
        test_getUser();
    });
}

var test_getUser = function() {
    getUser(function(user) {
        //info should be as was added
        if(("test" === user.username) &&
            ("pass" === user.password) &&
            ("test@mit.edu" === user.email) &&
            ("Test Testington" === user.fullName)) {
            $('.getUser').html("<p>getUser Success</p>");
        } else {
            $('.getUser').html("<p>getUser Failure</p>")
        }
        test_logout();
    });
}

var test_logout = function() {
    //Nobody should be logged in
    logout(function(data) {
        isLoggedIn(function(logged) {
            if(logged.logged) {
                $('.logout').html("<p>logout Failure</p>");
            } else {
                $('.logout').html("<p>logout Success</p>");
            }
            test_login();
        });
    });
}

var test_login = function() {
    //Nobody should be logged in
    login("test", "pass", function(user) {
        isLoggedIn(function(logged) {
            if(logged.logged && "test" === user.username) {
                $('.login').html("<p>login Success</p>");
            } else {
                $('login').html("<p>login Failure</p>");
            }
            test_addBudget();
        });
    });
}

var test_addBudget = function() {
    //data should be the same
    addBudget("TESTBUDGET", 1000, 1500, function(nbudget) {
        if(("TESTBUDGET" === nbudget.name) &&
            (1000 === nbudget.expectedTotal) &&
            (1500 === nbudget.actualTotal)) {
            $('.addBudget').html("<p>addBudget Success</p>");
        } else {
            $('.addBudget').html("<p>addBudget Failure</p>");
        }
        test_getBudget();
    });
}

var test_getBudget = function() {
    //data should be as was added
    getUser(function(user) {
        getBudget(user.moderatedBudgets[0], function(budget) {
            if(("TESTBUDGET" === budget.name) &&
                (1000 === budget.expectedTotal) &&
                (1500 === budget.actualTotal)) {
                $('.getBudget').html("<p>getBudget Success</p>");
            } else {
                $('.getBudget').html("<p>getBudget Failure</p>");
            }

            test_addWatcher();
        });
    });
}

var test_addWatcher = function() {
    //budget should have a watcher
    getUser(function(user) {
        addWatcher(user.moderatedBudgets[0], "test", function(budget) {
            if(1 === budget.watchers.length) {
                $('.addWatcher').html("<p>addWatcher Success</p>");
            } else {
                $('.addWatcher').html("<p>addWatcher Failure</p>");
            }
            test_removeWatcher();
        });
    });
}

var test_removeWatcher = function() {
    //budget should have no watchers
    getUser(function(user) {
        removeWatcher(user.moderatedBudgets[0], user._id, function(budget) {
            if(0 === budget.watchers.length) {
                $('.removeWatcher').html("<p>removeWatcher Success</p>");
            } else {
                $('.removeWatcher').html("<p>removeWatcher Failure</p>");
            }

            test_cost();
        });
    });
}

var test_cost = function(){
    //Var bid stores the budget id
    getUser(function(user) {
        var bid = user.moderatedBudgets[0];

        //First create a Cost object
        addCost(bid, "Food", 100.00, "10/30/14", "food", "Pizza party!", function(cost){
            //Check to see if the created object equals what is expected
            var expected = {
                name: "Food",
                value: 100.00,
                time: "10/30/14",
                tag: "food",
                description: "Pizza party!",
            };

            if(cost.name === expected.name &&
                cost.value === expected.value &&
                cost.time === expected.time &&
                cost.tag === expected.tag &&
                cost.description === expected.description){
                $('.addCost').html("<p>addCost Success</p>");
            } else{
                $('.addCost').html("<p>addCost Failure</p>");
            }

            //Check to see if the associated budget has the right info

            getBudget(bid, function(budget){
                var listcosts = budget.listOfCosts;
                getCost(listcosts[0], function(sel) {
                    if(sel.name === expected.name &&
                        sel.value === expected.value &&
                        sel.time === expected.time &&
                        sel.tag === expected.tag &&
                        sel.description === expected.description){
                        $('.getCost').html("<p>getCost Success</p>");
                    } else{
                        $('.getCost').html("<p>getCost Failure</p>");
                    }

                    //Delete that cost object
                    deleteCost(budget._id,sel._id, function() {

                        //Check to see if the associated budget does not have that cost object
                        getBudget(bid, function(bud){
                            if(bud.listOfCosts.length === 0){
                                $('.deleteCost').html("<p>deleteCost Success</p>");
                            } else{
                                $('.deleteCost').html("<p>deleteCost Failure</p>");
                            }

                            test_deleteBudget();
                        });
                    });
                });
            });
        });
    });
}

var test_deleteBudget = function() {
    //budget should have no name
    getUser(function(user) {
        deleteBudget(user.moderatedBudgets[0], function(data) {
            getBudget(user.moderatedBudgets[0], function(budget) {
                if(!budget) {
                    $('.deleteBudget').html("<p>deleteBudget Success</p>");
                } else {
                    $('.deleteBudget').html("<p>deleteBudget Failure</p>");
                }
                test_deleteUser();
            });
        });
    });
}

var test_deleteUser = function() {
    //login should return some error
    deleteUser(function(data) {
        login("root", "pass", function(user) {
            if('err' in user) {
                $('.deleteUser').html("<p>deleteUser Success</p>");
            } else {
                $('.deleteUser').html("<p>deleteUser Failure</p>");
            }
        });
    });
}

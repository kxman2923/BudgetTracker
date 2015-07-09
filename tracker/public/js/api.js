var getBudget = function(budgetId, callback) {
    $.ajax({
        url: "/budget/" + budgetId,
        type: "GET",
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var deleteBudget = function(budgetId, callback) {
    $.ajax({
        url: "/budget/" + budgetId,
        type: "DELETE",
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var addBudget = function(name, total, callback) {
    $.ajax({
        url: "/budget/addBudget",
        type: "POST",
        data: {total: total, name: name},
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var addWatcher = function(budgetId, uname, callback) {
    $.ajax({
        url: "/budget/addWatcher",
        type: "PUT",
        data: {
            bid: budgetId,
            uname: uname
        },
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var removeWatcher = function(budgetId, userId, callback) {
    $.ajax({
        url: "/budget/removeWatcher",
        type: "PUT",
        data: {
            bid: budgetId,
            uid: userId
        },
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

// Login Functions
var getUser = function(callback) {
    $.ajax({
        url: "/login",
        type: "GET",
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var getUserInfo = function(userId, callback) {
    $.ajax({
        url: "/login/"+userId,
        type: "GET",
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    })
}

var addUser = function(uname, pass, email, fullName, callback) {
    $.ajax({
        url: "/login/addUser",
        type: "POST",
        data: {
            usernameField: uname,
            passwordField: pass,
            emailField: email,
            fullNameField: fullName
        },
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var deleteUser = function (callback) {
    $.ajax ({
        url: "/settings/deleteUser",
        type: "DELETE",
        datatype: "json",
        success: function (data) {
            callback(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
}

var login = function(uname, pass, callback) {
    $.ajax({
        url: "/login/login",
        type: "POST",
        data: {loginusername: uname, loginpassword: pass},
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var logout = function(callback) {
    $.ajax({
        url: "/login/logout",
        type: "POST",
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(data) {
            console.log(data);
        }
    });
}

var isLoggedIn = function(callback) {
    $.ajax({
        url: "/login/logged",
        type: "GET",
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

//Settings Functions

var changeFullName = function(name, callback) {
    $.ajax({
        url: "/settings/changeFullName",
        type: "POST",
        data: {fullNameField: name},
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var changeUsername = function(uname, callback) {
    $.ajax({
        url: "/settings/changeUsername",
        type: "POST",
        data: {usernameField: uname},
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var changePassword = function(pass, callback) {
    $.ajax({
        url: "/settings/changePassword",
        type: "POST",
        data: {passwordField: pass},
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var changeEmail = function(email, callback) {
    $.ajax({
        url: "/settings/changeEmail",
        type: "POST",
        data: {emailField: email},
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

//Cost Functions

var getCost = function(costId, callback) {
    $.ajax({
        url: "/cost/"+costId,
        type: "GET",
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var deleteCost = function(budgetId, costId, callback) {
    $.ajax({
        url: "/cost/deleteCost",
        type: "DELETE",
        datatype: "json",
        data: {
            bid: budgetId,
            cid: costId
        },

        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

var addCost = function(budgetId, name, value, time, tag, desc, callback) {
    $.ajax({
        url: "/cost/addCost",
        type: "POST",
        data: {
            bid: budgetId,
            name: name,
            value: value,
            time: time,
            tag: tag,
            desc: desc
        },
        datatype: "json",
        success: function(data) {
            callback(data);
        },
        error: function(xhr, status, err) {
            console.log(err);
        }
    });
}

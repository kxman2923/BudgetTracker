test("Testing changeUsername") {
  getUser(function(user) {
    changeUsername("newusername", function (user) {
      equal("newusername", user.username, "username changed");
    });
    changeUsername("test", function (user) {});
  });
}

test("Testing changeEmail") {
  getUser(function(user) {
    changeUsername("newEmail@test", function (user) {
      equal("newEmail@test", user.email, "email changed");
    });
  });
}

test("Testing changeFullName") {
  getUser(function(user) {
    changeUsername("New Name", function (user) {
      equal("New Name", user.fullName, "full name changed");
    });
  });
}

test("Testing changePassword") {
  getUser(function(user) {
    changePassword("newpw", function (user) {
      equal("newpw", user.password, "password changed");
    });
  });
}
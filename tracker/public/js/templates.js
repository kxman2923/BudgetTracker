(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['add_budget'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.navbar, '', 'navbar', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<style>\n    body {\n        background-color: black;\n    }\n</style>\n<script>\n    $(document).ready(function() {\n        $(\"#add\").click(function() {\n            var name = $(\"#name\").val();\n            var total = $(\"#total\").val();\n            addBudget(name, total, function(budget) {\n                getUser(function(user) {\n                    view_budgets(user);\n                });\n            });\n        });\n        $(\"#cancel\").click(function() {\n            getUser(function(user) {\n                view_budgets(user);\n            });\n        });\n    });\n</script>\n<div class=\"jumbotron\">\n    <div class=\"row\">\n        <div class=\"col-md-4\" />\n        <div class=\"col-md-4\">\n            <h1>New Budget</h1>\n            <div form-group>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n                <input type=\"text\" class=\"form-control\" id=\"total\" placeholder=\"Total Amount\">\n                <button id=\"add\" class=\"btn btn-success\">Add Budget</button><button id=\"cancel\" class=\"btn btn-danger\">Cancel</button>\n            </div>\n        </div>\n        <div class-\"col-md-4\" />\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});
templates['add_cost'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "";
  stack1 = this.invokePartial(partials.navbar, '', 'navbar', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<style>\n    body {\n        background-color: black;\n    }\n</style>\n<script>\n    $(document).ready(function() {\n        $(\"#add\").click(function() {\n            var name = $(\"#name\").val();\n            var value = $(\"#value\").val();\n            var time = $(\"#time\").val();\n            var tag = $(\"#tag\").val();\n            var desc = $(\"#desc\").val();\n            addCost(\""
    + escapeExpression(((helper = (helper = helpers.bid || (depth0 != null ? depth0.bid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bid","hash":{},"data":data}) : helper)))
    + "\", name, value, time, tag, desc, function(cost) {\n                getBudget(\""
    + escapeExpression(((helper = (helper = helpers.bid || (depth0 != null ? depth0.bid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bid","hash":{},"data":data}) : helper)))
    + "\", function(budget) {\n                    view_costs(budget);\n                });\n            });\n        });\n        $(\"#cancel\").click(function() {\n            getBudget(\""
    + escapeExpression(((helper = (helper = helpers.bid || (depth0 != null ? depth0.bid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bid","hash":{},"data":data}) : helper)))
    + "\", function(budget) {\n                view_costs(budget);\n            });\n        });\n    });\n</script>\n<div class=\"jumbotron\">\n    <div class=\"row\">\n        <div class=\"col-md-4\" />\n        <div class=\"col-md-4\">\n            <h1>New Cost</h1>\n            <div form-group>\n                <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Name\">\n                <input type=\"text\" class=\"form-control\" id=\"value\" placeholder=\"Value\">\n                <input type=\"text\" class=\"form-control\" id=\"time\" placeholder=\"Time\">\n                <input type=\"text\" class=\"form-control\" id=\"tag\" placeholder=\"Tag\">\n                <textarea class=\"form-control\" id=\"desc\" placeholder=\"Description\" />\n                <button id=\"add\" class=\"btn btn-success\">Add Cost</button><button id=\"cancel\" class=\"btn btn-danger\">Cancel</button>\n            </div>\n        </div>\n        <div class-\"col-md-4\" />\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});
templates['budgets'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._id : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                $(\"#"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + " #view\").click(function() {\n                    getBudget(\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\", function(budget) {\n                        view_costs(budget);\n                    });\n                });\n                $(\"#"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + " #delete\").click(function() {\n                    deleteBudget(\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\", function(data) {\n                        getUser(function(user) {\n                            view_budgets(user);\n                        });\n                    });\n                });\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._id : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                $(\"#"
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + " #view\").click(function() {\n                    getBudget(\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\", function(budget) {\n                        view_costs(budget);\n                    });\n                });\n";
},"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._id : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <div class=\"row\" id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n                    <div class=\"col-md-3\"><h3>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h3></div>\n                    <div class=\"col-md-3\" />\n                    <div class=\"col-md-3\">\n                        <br>\n                        <button id=\"view\" class=\"btn btn-sm btn-warning\">View</button>\n                        <button id=\"delete\" class=\"btn btn-sm btn-danger\">&times;</button>\n                    </div>\n                </div>\n";
},"10":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._id : depth0), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"11":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                <div class=\"row\" id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n                    <div class=\"col-md-3\"><h3>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h3></div>\n                    <div class=\"col-md-3\" />\n                    <div class=\"col-md-3\">\n                        <br>\n                        <button id=\"view\" class=\"btn btn-sm btn-warning\">View</button>\n                    </div>\n                </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = this.invokePartial(partials.navbar, '', 'navbar', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "<style>\n    body {\n        background-color: black;\n    }\n</style>\n<script>\n    $(document).ready(function() {\n        $(\"#addBudget\").click(function() {\n            view_add_budget();\n        });\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.moderated : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.watched : depth0), {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "    });\n</script>\n<div class=\"jumbotron\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"row\">\n                <div class=\"col-md-3\"><h2>Moderated</h2></div>\n                <div class=\"col-md-3\"><br><button id=\"addBudget\" class=\"btn btn-sm btn-success\">&plus;</button></div>\n            </div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.moderated : depth0), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </div>\n        <div class=\"col-md-6\">\n            <h2>Watched</h2>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.watched : depth0), {"name":"each","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n    </div>\n</div>\n";
},"usePartial":true,"useData":true});
templates['costs'] = template({"1":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            $(\"#"
    + escapeExpression(lambda((depth0 != null ? depth0._id : depth0), depth0))
    + "delete\").click(function() {\n                deleteCost(\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "\", \""
    + escapeExpression(lambda((depth0 != null ? depth0._id : depth0), depth0))
    + "\", function(data) {\n                    getBudget(\""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "\", function(budget) {\n                        view_costs(budget);\n                    });\n                });\n            });\n";
},"3":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "                    <tr>\n                        <td>\n                            "
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "\n                        </td>\n                        <td>\n                            $"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\n                        </td>\n                        <td>\n                            <button class=\"btn btn-primary btn-sm\" data-toggle=\"modal\" data-target=\"#"
    + escapeExpression(lambda((depth0 != null ? depth0._id : depth0), depth0))
    + "modal\"><span class=\"glyphicon glyphicon-eye-open\"></span></button>\n\n                            <div class=\"modal fade\" id=\""
    + escapeExpression(lambda((depth0 != null ? depth0._id : depth0), depth0))
    + "modal\">\n                                <div class=\"modal-dialog\">\n                                    <div class=\"modal-content\">\n                                        <div class=\"modal-header\">\n                                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n                                            <h4 class=\"modal-title\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h4>\n                                        </div>\n                                        <div class=\"modal-body\">\n                                            <p>Tag: "
    + escapeExpression(((helper = (helper = helpers.tag || (depth0 != null ? depth0.tag : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"tag","hash":{},"data":data}) : helper)))
    + "</p>\n                                            <p>Description: "
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n                                            <p>Time: "
    + escapeExpression(((helper = (helper = helpers.time || (depth0 != null ? depth0.time : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"time","hash":{},"data":data}) : helper)))
    + "</p>\n                                        </div>\n                                        <div class=\"modal-footer\">\n                                            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n                                        </div>\n                                    </div><!-- /.modal-content -->\n                                </div><!-- /.modal-dialog -->\n                            </div><!-- /.modal -->\n";
  stack1 = helpers['if'].call(depth0, (depths[1] != null ? depths[1].isAdmin : depths[1]), {"name":"if","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                        </td>\n                        <script>\n                            $(document).ready(function() {\n                                total += Number(\""
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\");\n                                $(\"#total\").text(\"Money Spent: \\$\" + total.toString());\n                            });\n                        </script>\n                    </tr>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "                                <button class=\"btn btn-danger btn-sm\" id=\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "delete\">&times;</button>\n";
},"6":function(depth0,helpers,partials,data) {
  return "                <button id=\"add_cost\" class=\"btn btn-success\">Add Cost</button>\n                <button id=\"delete_budget\" class=\"btn btn-danger\">Delete Budget</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "";
  stack1 = this.invokePartial(partials.navbar, '', 'navbar', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "<style>\n    body {\n        background-color: black;\n    }\n    .center {\n        text-align: center;\n    }\n</style>\n<script>\n    var total = 0;\n    $(document).ready(function() {\n        $(\"#add_cost\").click(function() {\n            view_add_cost(\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\");\n        });\n        $(\"#delete_budget\").click(function() {\n            deleteBudget(\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\", function(data) {\n                getUser(function(user) {\n                    view_budgets(user);\n                });\n            });\n        });\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.nice_costs : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        $(\"#watchers\").click(function() {\n            getBudget(\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\", function(budget) {\n                view_watchers(budget);\n            });\n        });\n    });\n</script>\n<div class=\"jumbotron\">\n     <div class=\"row\">\n        <div class=\"col-md-4\" />\n        <div class=\"col-md-4\">\n            <h2 class=\"center\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</h2>\n            <h3>Total: $"
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + "</h3>\n            <h3 id=\"total\">Money Spent: $0</h3>\n            <!--watchers goes here -->\n            <table class=\"table table-striped\">\n                <tr class=\"active center\"><td>Costs</td>\n                <td>Value</td></tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.nice_costs : depth0), {"name":"each","hash":{},"fn":this.program(3, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </table>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isAdmin : depth0), {"name":"if","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n        <div class=\"col-md-4\">\n            <br><button class=\"btn btn-primary btn-sm\" id=\"watchers\"><span class=\"glyphicon glyphicon-user\"></span></button>\n        </div>\n     </div>\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});
templates['edit_user'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "";
  stack1 = this.invokePartial(partials.navbar, '', 'navbar', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "<style>\n  .center{\n    text-align: center;\n }\n    body {\n        background-color: black;\n    }\n</style>\n<div class=\"jumbotron\">\n <div class= \"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <div class=\"form-horizontal\">\n       <h3 class=\"center\"> ";
  stack1 = ((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "'s Settings </h3>\n        <div class=\"form-group\">\n          <label for=\"fn\" class=\"col-sm-4 control-label\">New Full Name</label>\n          <div class=\"col-sm-8\">\n            <input type=\"text\" id=\"fn\" class=\"form-control\" placeholder=\"";
  stack1 = ((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fullName","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"col-sm-4 control-label\">New Email</label>\n         <div class=\"col-sm-8\">\n            <input type= \"text\" id=\"email\" class=\"form-control\" placeholder=\"";
  stack1 = ((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"ps\" class=\"col-sm-4 control-label\">New Password</label>\n         <div class=\"col-sm-8\">\n            <input type=\"password\" id=\"ps\" class=\"form-control\" placeholder=\"&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;\">\n         </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"col-sm-offset-4 col-sm-8\">\n            <input type=\"button\" id=\"save\" class=\"btn btn-primary\" value=\"Save\">\n            <input type=\"button\" id=\"delete\" class=\"btn btn-danger\"value=\"Delete\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});
templates['login'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <div class=\"alert alert-danger alert-dismissible\" role=\"alert\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n          <strong>Warning!</strong> "
    + escapeExpression(((helper = (helper = helpers.msg || (depth0 != null ? depth0.msg : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"msg","hash":{},"data":data}) : helper)))
    + "\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<style>\n    #brand {\n        text-align: center;\n    }\n\n    body {\n        background-color: black;\n    }\n</style>\n<script>\n    $(document).ready(function() {\n        $(\"#login\").click(function() {\n            var uname = $(\"#username\").val();\n            var pass = $(\"#password\").val();\n            login(uname, pass, function(user) {\n                if(user.err) {\n                    view_login({failed: true, msg: user.err});\n                } else {\n                    view_budgets(user);\n                }\n            });\n        });\n        $(\"#create\").click(function() {\n            var fname = $(\"#new_fullname\").val();\n            var email = $(\"#new_email\").val();\n            var uname = $(\"#new_username\").val();\n            var pass = $(\"#new_password\").val();\n            addUser(uname, pass, email, fname, function(user) {\n                if(user.err) {\n                    view_login({failed: true, msg: user.err});\n                } else {\n                    view_budgets(user);\n                }\n            });\n        });\n    });\n</script>\n<div class=\"jumbotron\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.failed : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    <div class=\"page-header\"><h1 id=\"brand\">&lt;/tracker&gt;</h1></div>\n    <div class=\"row\">\n        <div class=\"col-md-3\" />\n        <div class=\"col-md-3\">\n            <div class=\"form-group\">\n                <input type='text' class=\"form-control\" id=\"username\" placeholder=\"Username\">\n                <input type='password' class=\"form-control\" id=\"password\" placeholder=\"Password\">\n                <button class=\"btn btn-success\" id=\"login\">Login</button>\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <div class=\"form-group\">\n                <input type='text' class=\"form-control\" id=\"new_fullname\" placeholder=\"Full Name\">\n                <input type='text' class=\"form-control\" id=\"new_email\" placeholder=\"Email\">\n                <input type='text' class=\"form-control\" id=\"new_username\" placeholder=\"Username\">\n                <input type='password' class=\"form-control\" id=\"new_password\" placeholder=\"Password\">\n                <button class=\"btn btn-warning\" id=\"create\">Create</button>\n            </div>\n        </div>\n        <div class=\"col-md-3\" />\n    </div>\n</div>\n";
},"useData":true});
templates['navbar'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<script>\n    $(document).ready(function() {\n        getUser(function(user) {\n            $(\"#nav_user\").html(user.username + \"<span class='caret'></span>\");\n            $(\".navbar-brand\").click(function() {\n                view_budgets(user);\n            });\n            $(\"#settings\").click(function() {\n                view_edit_user(user);\n            });\n            $(\"#logout\").click(function() {\n                logout(function(data) {\n                    view_login({failed:false});\n                })\n            });\n        });\n    });\n</script>\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <a class=\"navbar-brand\" href=\"#\">&lt;/tracker&gt;</a>\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n            <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" id=\"nav_user\" href=\"#\"></a>\n            <ul class=\"dropdown-menu\">\n                <li id=\"settings\"><a href=\"#\">User Settings</a></li>\n                <li id=\"logout\"><a href=\"#\">Logout</a></li>\n            </ul>\n        </li>\n    </ul>\n</nav>\n";
  },"useData":true});
templates['watchers'] = template({"1":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._id : depth0), {"name":"if","hash":{},"fn":this.program(2, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data,depths) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "            $(\"#"
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "remove\").click(function() {\n                removeWatcher(\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "\", \""
    + escapeExpression(lambda((depths[1] != null ? depths[1]._id : depths[1]), depth0))
    + "\", function(data) {\n                    getBudget(\""
    + escapeExpression(lambda((depths[2] != null ? depths[2]._id : depths[2]), depth0))
    + "\", function(budget) {\n                        view_watchers(budget);\n                    });\n                });\n            });\n";
},"4":function(depth0,helpers,partials,data,depths) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0._id : depth0), {"name":"if","hash":{},"fn":this.program(5, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"5":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "                    <tr>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fullName","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "</td>\n                        <td>"
    + escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"username","hash":{},"data":data}) : helper)))
    + "</td>\n";
  stack1 = helpers['if'].call(depth0, (depths[2] != null ? depths[2].isAdmin : depths[2]), {"name":"if","hash":{},"fn":this.program(6, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "                    </tr>\n";
},"6":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                            <td>\n                                <button class=\"btn btn-sm btn-danger\" id=\""
    + escapeExpression(lambda((depth0 != null ? depth0._id : depth0), depth0))
    + "remove\">&times;</button>\n                            </td>\n";
},"8":function(depth0,helpers,partials,data) {
  return "                <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"New Watcher\">\n                <button class=\"btn btn-success\" id=\"addWatcher\">Add Watcher</button>\n                <button class=\"btn btn-danger\" id=\"cancel\">Cancel</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data,depths) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "";
  stack1 = this.invokePartial(partials.navbar, '', 'navbar', depth0, undefined, helpers, partials, data);
  if (stack1 != null) { buffer += stack1; }
  buffer += "<style>\n    body {\n        background-color: black;\n    }\n\n    .center {\n        text-align: center;\n    }\n</style>\n<script>\n    $(document).ready(function() {\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.nice_watchers : depth0), {"name":"each","hash":{},"fn":this.program(1, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n        $(\"#addWatcher\").click(function() {\n            var username = $(\"#username\").val();\n            addWatcher(\""
    + escapeExpression(lambda((depth0 != null ? depth0._id : depth0), depth0))
    + "\", username, function(budget) {\n                if(budget.err) {\n                    $(\"#username\").val(\"No User of that name!\");\n                } else {\n                    view_watchers(budget);\n                }\n            });\n        });\n        $(\"#cancel\").click(function() {\n            getBudget(\""
    + escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"_id","hash":{},"data":data}) : helper)))
    + "\", function(budget) {\n                view_costs(budget);\n            });\n        });\n    });\n</script>\n<div class=\"jumbotron\">\n    <div class=\"row\">\n        <div class=\"col-md-4\" />\n        <div class=\"col-md-4\">\n            <h2 class=\"center\">Watchers</h2>\n            <table class=\"table table-bordered\">\n                <tr class=\"active\">\n                    <td>Full Name</td>\n                    <td>Email</td>\n                    <td>Username</td>\n                </tr>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.nice_watchers : depth0), {"name":"each","hash":{},"fn":this.program(4, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </table>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.isAdmin : depth0), {"name":"if","hash":{},"fn":this.program(8, data, depths),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </div>\n        <div class=\"col-md-4\" />\n</div>\n";
},"usePartial":true,"useData":true,"useDepths":true});
})();
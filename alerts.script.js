function confirm(message) {
var application = Application.currentApplication();
application.includeStandardAdditions = true
var t = application.displayDialog(message, {
buttons: ["Ok", "Cancel"],
defaultButton: "Ok"
});
return t;
}

function alert(message) {
var application = Application.currentApplication();
application.includeStandardAdditions = true
var t = application.displayDialog(message, {
buttons: ["Ok"],
defaultButton: "Ok",
});
return t;
}
function prompt(message, ans) {
var application = Application.currentApplication();
application.includeStandardAdditions = true
if (ans) {var t = application.displayDialog(message, {
buttons: ["Ok"],
defaultButton: "Ok",
defaultAnswer:ans
});
return t;
} else {
var application = Application.currentApplication();
application.includeStandardAdditions = true
var t = application.displayDialog(message, {
buttons: ["Ok"],
defaultButton: "Ok",
defaultAnswer:""
});
return t;
}
}

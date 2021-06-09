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
defaultButton: "Ok"
});
return t;
}

/*! Sugarizer 2018-11-02 */
sharedConfig=require("./karma-shared.conf.js"),module.exports=function(a){var b=[{pattern:"test/**/*Spec.js",included:!1}];sharedConfig(a),a.files=a.files.concat(b)};
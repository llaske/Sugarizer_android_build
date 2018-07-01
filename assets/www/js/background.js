/*! Sugarizer 2018-07-01 */
chrome.app.runtime.onLaunched.addListener(function(){chrome.app.window.create("../sandbox.html",{id:"mainwin",state:"fullscreen"},function(a){})});
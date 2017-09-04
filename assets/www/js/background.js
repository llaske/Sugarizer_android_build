/*! Sugarizer 2017-09-04 */
chrome.app.runtime.onLaunched.addListener(function(){chrome.app.window.create("../sandbox.html",{id:"mainwin",state:"fullscreen"},function(a){})});
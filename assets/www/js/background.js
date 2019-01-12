/*! Sugarizer 2019-01-12 */
chrome.app.runtime.onLaunched.addListener(function(){chrome.app.window.create("../sandbox.html",{id:"mainwin",state:"fullscreen"},function(a){})});
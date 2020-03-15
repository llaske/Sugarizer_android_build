/*! Sugarizer 2020-03-14 */
chrome.app.runtime.onLaunched.addListener(function(){chrome.app.window.create("../sandbox.html",{id:"mainwin",state:"fullscreen"},function(a){})});
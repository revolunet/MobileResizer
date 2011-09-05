// Object to hold information about the current page
var pageInfo = {
    "innerWidth":window.innerWidth,
    "innerHeight":window.innerHeight,
    "outerWidth":window.outerWidth,
    "outerHeight":window.outerHeight,
    "marginWidth":window.outerWidth-window.innerWidth,
    "marginHeight":window.outerHeight-window.innerHeight
};

// Send the information back to the extension
chrome.extension.sendRequest(pageInfo);
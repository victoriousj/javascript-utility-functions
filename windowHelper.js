// Create reference to tabs opened up from parent tab
var openedWindows = [];
window._open = window.open; // saving original function
window.open = function(url, name, params) {
  openedWindows.push(window._open(url, name, params));
  // you can store names also...
};

// Get the current tab's url without the fileextension at the end, if present
var urlWithoutExtension = (url = window.location.href) =>
  url.slice(0, url.indexOf(url.substring(url.lastIndexOf("/") + 1)));

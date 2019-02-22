// create reference to tabs opened up from parent tab
var openedWindows = [];
window._open = window.open; // saving original function
window.open = function(url, name, params) {
  openedWindows.push(window._open(url, name, params));
  // you can store names also...
};

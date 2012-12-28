var settings = new Store("settings", {
    "checkbox1": true,
    "textfield5": "none"
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.action == 'gpmeGetOptions') {
    sendResponse(settings.toObject());
  }
});
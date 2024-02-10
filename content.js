chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'detectCyberbullying') {
    var selectedText = window.getSelection().toString();
    // Call your Python script or integrate the logic here
    // You may need to use a messaging API to communicate with an external server or service for Python execution
    console.log('Selected Text:', selectedText);
  }
});

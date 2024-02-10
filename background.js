chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === 'detectCyberbullying') {
    // Send message to content script
    chrome.tabs.sendMessage(sender.tab.id, { type: 'detectCyberbullying', text: request.text });
  }
});

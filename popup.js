function detectCyberbullying() {
  var text = document.getElementById('textInput').value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { type: 'detectCyberbullying', text: text });
  });
}

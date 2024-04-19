let extensionEnabled = true;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.command == "toggleExtension") {
    // Toggle the extension status
    extensionEnabled = !extensionEnabled;
    sendResponse({ status: "Extension toggled" });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ["content.js"],
    });
  }
});

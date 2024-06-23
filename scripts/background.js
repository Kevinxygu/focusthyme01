// script to trigger background scripts and run content script
console.log("This is the background!")
const STORAGE_KEY_LIST = "list";
const STORAGE_KEY_ACTIVE = "active";
chrome.runtime.onInstalled.addListener(() => {
    console.log("Installed!");
  });
  /*
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'UPDATE_WEBSITE_LIST') {
      chrome.runtime.sendMessage({
        type: "UPDATE_WEBSITE_LIST",
        data: request.data});
      console.log(request.data)
    }
});
*/

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js'],
  });
});
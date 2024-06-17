console.log("This is the background!")
const STORAGE_KEY_LIST = "list";
const STORAGE_KEY_ACTIVE = "active";
chrome.runtime.onInstalled.addListener(() => {
    console.log("Installed!");
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js'],
    });
  });
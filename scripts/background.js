// script to trigger background scripts and run content script

// console.log("This is the background!")
const STORAGE_KEY_LIST = "list";
const STORAGE_KEY_ACTIVE = "active";

// This adds on a listener when it's installed
chrome.runtime.onInstalled.addListener(() => {
    console.log("Installed!");
  });


// Adds a listener to look at value changes for
chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});

// Connect the content.js script to start blocking websites
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js'],
  });
});
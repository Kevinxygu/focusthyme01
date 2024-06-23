// content script to check current website and block if on blocklist

console.log("This is the content!")
const STORAGE_KEY_LIST = "list";
const STORAGE_KEY_ACTIVE = "active";

const list = [];
const active = false;

// get list and active
chrome.storage.sync.get([STORAGE_KEY_ACTIVE], (result) => {
    active = result[STORAGE_KEY_ACTIVE];
});

chrome.storage.sync.get([STORAGE_KEY_LIST],(result) => {
    list = result[STORAGE_KEY_LIST];
});

// const isActive = JSON.parse(localStorage.getItem(STORAGE_KEY_ACTIVE));
// const list = JSON.parse(localStorage.getItem(STORAGE_KEY_LIST));

// temp
const toBlock = ["www.reddit.com", "www.youtube.com", "www.taobao.com"]
const currentDomain = window.location.hostname;

alert(JSON.stringify(list));

if (toBlock.some(site => currentDomain.includes(site))) {
    document.body.innerHTML = '<p> pp </p> <div id="image"></div>';

    const img = document.createElement('img');
    img.src = chrome.runtime.getURL("images/overlay.png"); // Get the correct URL for the image
    img.style.position = 'fixed';
    img.style.top = '0';
    img.style.left = '0';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.zIndex = '10000';
    img.style.pointerEvents = 'none'; // Prevent interaction with the overlay

    document.getElementById("image").appendChild(img);


    // const overlay = document.createElement('div');
    // overlay.id = 'focus-overlay';
    // overlay.style.position = 'fixed';
    // overlay.style.top = '0';
    // overlay.style.left = '0';
    // overlay.style.width = '100%';
    // overlay.style.height = '100%';
    // overlay.style.backgroundImage = 'url(chrome-extension://__MSG_@@extension_id__/images/overlay.png)';
    // overlay.style.backgroundSize = 'cover';
    // overlay.style.zIndex = '10000';
    // overlay.style.pointerEvents = 'none'; // Prevent interaction with the overlay
    // document.body.innerHTML = ''; // Clear the existing content
    // document.body.appendChild(overlay);
}
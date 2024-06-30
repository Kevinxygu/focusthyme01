// content.js is what alters the HTML CSS to block the website
const STORAGE_KEY_LIST = "list";
const STORAGE_KEY_ACTIVE = "active";

// const toBlock = ["www.reddit.com", "www.youtube.com", "www.taobao.com"];

// retrieves current domain (eg. youtube.com, reddit.com, etc.)
const currentDomain = window.location.hostname;

// load in active from chrome storage API
chrome.storage.sync.get([STORAGE_KEY_ACTIVE], (resultActive) => {

    // get the active value
    const active = resultActive[STORAGE_KEY_ACTIVE];

    // load in list of websites from chrome storage API
    chrome.storage.sync.get([STORAGE_KEY_LIST], (resultList) => {
        const list = resultList[STORAGE_KEY_LIST] || [];

        // check: if running and the current domain is part of the banned list, go and block the page by loading image
        if (list.some(site => currentDomain.includes(site)) && !active) {
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

            // appends the image
            document.getElementById("image").appendChild(img);
        }
    });
});


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
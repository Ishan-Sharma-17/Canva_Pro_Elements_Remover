//Used to listen to any updates to the tab system and update the extension if it is a canva page

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "complete" && tab.url && tab.url.includes("canva.com/design")){
        //Sends a message to the extension that a new canva design tab has opened. Function takes a tabId and an object
        chrome.tabs.sendMessage(tabId, {
            type: "NEW"
        });
        
    }
})
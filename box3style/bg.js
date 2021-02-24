function change(zc) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "zc": '#00000' });
    });
    alert("更改");
}
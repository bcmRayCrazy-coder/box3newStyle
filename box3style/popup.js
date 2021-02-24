setCookies = function(url, name, value, expireHour) {
    //var exdate = new Date();
    var param = {
        url: url,
        name: name,
        value: value,
        path: '/'
    };
    if (!!expireHour) {
        param.expirationDate = new Date().getTime() / 3600 + expireHour;
    }
    chrome.cookies.set(param, function(cookie) {});
}
getCookies = function(url, name) {
    chrome.cookies.get({
        url: url,
        name: name
    }, function(cookies) {
        return cookies;
    });
}

var zc = document.getElementById('z-c');
var zcc = getCookies('https://box3.codemao.cn/', 'zc');
if (zcc == null) {
    zcc = '#9f00ff';
}
zc.value = zcc;
zc.onchange = function() {
    setCookies('https://box3.codemao.cn/', 'zc', zc.value, 999);
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "zc": zc.value });
    });
}
var btn = document.getElementById('c');
console.log(btn);
btn.onclick = function() {
    var c = zc.value;
    change(c);
}

var us = document.getElementById('use-style');
us.onclick = function() {
    var use = us.checked;
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { "us": us });
    });
}
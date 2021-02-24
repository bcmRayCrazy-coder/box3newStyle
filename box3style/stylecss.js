var css = document.createElement('style');
css.setAttribute('rel', 'stylesheet');
css.setAttribute('type', 'text/css');
css.setAttribute('id', 'b3s');
css.append(`:root {
    --color-white: #FFF;
    --color-white-60: rgb(255, 255, 255, .6);
    --color-white-30: rgb(255, 255, 255, .3);
    --color-white-15: rgb(255, 255, 255, .15);
    --color-black: #000;
    
    --color-orange: #9f00ff;
    
    --color-orange-30: rgba(247, 179, 10, .3);
    --color-orangeRed: #F44336;
    --color-green: #80d741;
    --color-red: #ff3939;
    --color-blue: #67c3ff;
    --color-blueGreen: #00FFF2;
    --color-grey1: #121212;
    --color-grey1-90: rgba(18, 18, 18, .9);
    --color-grey1-60: rgba(18, 18, 18, .6);
    --color-grey1-30: rgba(18, 18, 18, .3);
    --color-grey2: #343434;
    --color-grey2-90: rgba(52, 52, 52, .9);
    --color-grey3: #565656;
    --color-grey3-60: rgba(86, 86, 86, .6);
    --color-grey4: #787878;
    --color-black-12: rgba(0, 0, 0, 0.12);
    --color-black-24: rgba(0, 0, 0, 0.24);
    --color-black-56: rgba(0, 0, 0, 0.56);
    --color-black-90: rgba(0, 0, 0, 0.90);
    --color-errorMsg: #F44336;
    --basePadding: 16px;
    --bigPadding: 32px;
    --smallPadding: 8px;
    --tinyPadding: 4px;
    --disableOpacity: .3;
    --baseRadius: 8px;
    --bigRadius: 16px;
    --hugeRadius: 32px;
    --text-h1: 24px;
    --text-h2: 16px;
    --text-h3: 14px;
    --text-h4: 12px;
    --font-family-title: NotoSansSC-Bold, PingFangSC-Semibold, PingFang SC, Helvetica, arial;
    --font-family: NotoSansSC-Regular, PingFangSC-Regular, Helvetica, arial;
    --color-primary: #9f00ff;
    --color-primary-hover: #FD9C39;
    --color-primary-press: #E38007;
    --color-danger: #F44336;
    --color-danger-hover: #F6695E;
    --color-danger-press: #DC4336;
    --color-font-white: rgba(255, 255, 255, 1);
    --color-font-white-minor: rgba(255, 255, 255, .6);
    --color-font-white-disabled: rgba(255, 255, 255, .3);
    --color-font-black: rgba(0, 0, 0, .88);
}`)

function addzc(zc) {
    var c = document.getElementById('b3s');
    c.append(`:root {
        --color-primary: ${zc};
    }`)
}
document.body.onload = function() {
    alert("样式加载");
    chrome.extension.onMessage.addListener(
        function(request, sender, sendResponse) {
            try {
                addzc(request['zc']);
                sendResponse("成功收到");
                alert("成功设置样式(刷新会失效)");
            } catch (err) {
                if (!request['us']) {
                    var c = document.getElementById('b3s');
                    c.innerHTML = '';
                } else {
                    css.append(`:root {
                        --color-white: #FFF;
                        --color-white-60: rgb(255, 255, 255, .6);
                        --color-white-30: rgb(255, 255, 255, .3);
                        --color-white-15: rgb(255, 255, 255, .15);
                        --color-black: #000;
                        
                        --color-orange: #9f00ff;
                        
                        --color-orange-30: rgba(247, 179, 10, .3);
                        --color-orangeRed: #F44336;
                        --color-green: #80d741;
                        --color-red: #ff3939;
                        --color-blue: #67c3ff;
                        --color-blueGreen: #00FFF2;
                        --color-grey1: #121212;
                        --color-grey1-90: rgba(18, 18, 18, .9);
                        --color-grey1-60: rgba(18, 18, 18, .6);
                        --color-grey1-30: rgba(18, 18, 18, .3);
                        --color-grey2: #343434;
                        --color-grey2-90: rgba(52, 52, 52, .9);
                        --color-grey3: #565656;
                        --color-grey3-60: rgba(86, 86, 86, .6);
                        --color-grey4: #787878;
                        --color-black-12: rgba(0, 0, 0, 0.12);
                        --color-black-24: rgba(0, 0, 0, 0.24);
                        --color-black-56: rgba(0, 0, 0, 0.56);
                        --color-black-90: rgba(0, 0, 0, 0.90);
                        --color-errorMsg: #F44336;
                        --basePadding: 16px;
                        --bigPadding: 32px;
                        --smallPadding: 8px;
                        --tinyPadding: 4px;
                        --disableOpacity: .3;
                        --baseRadius: 8px;
                        --bigRadius: 16px;
                        --hugeRadius: 32px;
                        --text-h1: 24px;
                        --text-h2: 16px;
                        --text-h3: 14px;
                        --text-h4: 12px;
                        --font-family-title: NotoSansSC-Bold, PingFangSC-Semibold, PingFang SC, Helvetica, arial;
                        --font-family: NotoSansSC-Regular, PingFangSC-Regular, Helvetica, arial;
                        --color-primary: #9f00ff;
                        --color-primary-hover: #FD9C39;
                        --color-primary-press: #E38007;
                        --color-danger: #F44336;
                        --color-danger-hover: #F6695E;
                        --color-danger-press: #DC4336;
                        --color-font-white: rgba(255, 255, 255, 1);
                        --color-font-white-minor: rgba(255, 255, 255, .6);
                        --color-font-white-disabled: rgba(255, 255, 255, .3);
                        --color-font-black: rgba(0, 0, 0, .88);
                    }`)
                }
            }
        }
    );
}
document.body.append(css);
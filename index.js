// 获得时间
let time = function(z) {
    if (z === undefined) {
        z = new Date()
    }
    let x = z.toString()
    // ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saterday']
    let zh = '天一二三四五六'
    let Year = x.slice(11, 15)
    let Month = z.getMonth() + 1
    let Day = x.slice(8, 10)
    let Hour = x.slice(16, 18)
    let Minute = x.slice(19, 21)
    let Second = x.slice(22, 24)
    let Week = zh[z.getDay()]
    if (String(Month).length === 1) {
        Month = '0' + Month
    }
    // log(Year,Month,Da)
    return `${Year}-${Month}-${Day}`
}
time()

let onBridgeReady = function() {
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId": "wx2421b1c4370ec43b", //公众号名称，由商户传入
            "timeStamp": "1395712654", //时间戳，自1970年以来的秒数
            "nonceStr": "e61463f8efa94090b1f366cccfbbb444", //随机串
            "package": "prepay_id=u802345jgfjsdfgsdg888",
            "signType": "MD5", //微信签名方式：
            "paySign": "70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
        },
        function(res) {
            if (res.err_msg == "get_brand_wcpay_request:ok") {} // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
        }
    );
    if (typeof WeixinJSBridge == "undefined") {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
        } else if (document.attachEvent) {
            document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
        }
    } else {
        onBridgeReady();
    }
}

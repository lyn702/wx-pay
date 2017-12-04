let log = console.log.bind(console)
const su = {}
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

// let d = new Date()
// let nowDate = d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()

// 时间戳生成
let date = Date.now().toString()
log(Date.now())
log(date)


// package生成
// let pkg = 'prepay_id=' + payInfo.prepay_id

// 签名生成
// let str = "appId=" + appid + "&nonceStr=" + nonce + "&package=" + pkg + "&signType=MD5&timeStamp=" + ttt + "&key=WWWilandcc20170415qazVFRwsx321PL"
// md5加密
// let sign = (md5.hexMD5(str)).toUpperCase()


let money = document.querySelector('#input-money')
// log(money)
let qian = money.value

// 获得景区ID和商户ID
// let ID = function () {
//     let scene_id =
// }

let confirmWxpay = function () {
    let request = ({
        url: "http://120.79.12.95/newapi/secondconsume/confirmWxpay",
        data: {
            "device": "H5_Web",
            "appname": "second_consume",
            "scene_id": 1,
            "channel_id": 1,
            "pay_money": 0.01,
        },
        method: 'POST',
        success: function (res) {
            log(res)

        }
    })
    $.ajax(request)
}
confirmWxpay()

// 点击按钮事件
let click = function () {
    $('#one').on('click', function() {
        // log('1')
        // let qian = money.value
        log(qian)
        qian = qian + 1
        log(qian)
    })

    $('#two').on('click', function() {
        log('2')
    })

    $('#three').on('click', function() {
        log('3')
    })

    $('#back').on('click', function() {
        log('返回')
    })

    $('#four').on('click', function() {
        log('4')
    })

    $('#five').on('click', function() {
        log('5')
    })

    $('#six').on('click', function() {
        log('6')
    })

    $('#seven').on('click', function() {
        log('7')
    })

    $('#eight').on('click', function() {
        log('8')
    })

    $('#nine').on('click', function() {
        log('9')
    })

    $('#zero').on('click', function() {
        log('0')
    })

    $('#dian').on('click', function() {
        log('.')
    })

    $('#Ok').on('click',function() {
        log('Ok')
        // let qian = money.value
        // log(qian)
    })
}
click()




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

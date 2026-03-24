function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`)
}

log(new Date(), "DEBUG", "查询订单信息")
log(new Date(), "DEBUG", "查询商品信息")
log(new Date(), "DEBUG", "查询用户信息")
log(new Date(), "DEBUG", "查询支付信息")
log(new Date(), "DEBUG", "查询物流信息")
log(new Date(), "DEBUG", "查询评价信息")
log(new Date(), "DEBUG", "查询退货信息")


// 对上面代码进行柯里化
var log = date => type => message => {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`)
}

var nowLogAndDebug = log(new Date())("DEBUG")
nowLogAndDebug("查询订单信息")
nowLogAndDebug("查询商品信息")
nowLogAndDebug("查询用户信息")
nowLogAndDebug("查询支付信息")
nowLogAndDebug("查询物流信息")
nowLogAndDebug("查询评价信息")
nowLogAndDebug("查询退货信息")

function add(x, y, z) {
    x = x * 2
    y = y * 3
    z = z * 4
    return x + y + z
}

function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}] ${message}`)
}

// 柯里化函数的实现：将一个函数转换为柯里化函数
function hyCurrying(fn) {
    return function curried(...args) {
        // 判断当前已经接收的参数的个数，和原函数需要接收的参数是否一致
        if (args.length >= fn.length) {
            // 如果一致，那么直接调用原函数
            return fn.apply(this, args) // fn.call(this, ...args)
        } else {
            // 如果不足，那么需要返回一个新的函数，继续接收参数
            function curried2(...args2) {
                // 接收到参数后，需要递归调用 curried 函数来检查函数的个数是否达到
                return curried.apply(this, args.concat(args2))
            }
            return curried2
        }
    }
}

var curryingAdd = hyCurrying(add)
console.log(curryingAdd(10, 20, 30))

var curryingLog = hyCurrying(log)
curryingLog(new Date())("DEBUG", "查询订单信息")
curryingLog(new Date())("DEBUG", "查询商品信息")
curryingLog(new Date())("DEBUG", "查询用户信息")
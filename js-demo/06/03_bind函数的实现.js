// 给所有函数添加一个hyBind方法

Function.prototype.hyBind = function(thisArg, ...args) {
    console.log('hyBind方法被执行了')
    // 1. 获取需要被执行的函数
    var fn = this
    // 2. 处理thisArg参数，防止它传入的是非对象类型
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window

    function proxyFn(...args2) {
        // 3. 将函数绑定到thisArg对象上
        thisArg.fn = fn
        // 4. 调用需要被执行的函数（将传入的参数和绑定函数的参数合并）
        var result = thisArg.fn(...([...args, ...args2] || []))
        // 5. 删除函数
        delete thisArg.fn
        // 6. 返回函数执行结果
        return result
    }
    return proxyFn
}

function foo() {
    console.log('foo函数被执行了', this)
}

function sum(num1, num2, num3, num4) {
    console.log('sum函数被执行了', num1, num2, num3, num4)
    return num1 + num2 + num3 + num4
}

var newSum = sum.hyBind('kaimo', 10, 20, 30, 40)
console.log(newSum())

var newSum2 = sum.hyBind('kaimo', 10, 20)
console.log(newSum2(30, 40))

var newSum3 = sum.hyBind('kaimo')
console.log(newSum3(10, 20, 30, 40))
// 给所有函数添加一个hyCall方法

Function.prototype.hyCall = function(thisArg, ...args) {
    console.log('hyCall方法被执行了')
    // 1. 获取需要被执行的函数
    var fn = this
    // 2. 处理thisArg参数，防止它传入的是非对象类型
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : window
    // 3. 将函数绑定到thisArg对象上
    thisArg.fn = fn
    // 4. 调用需要被执行的函数
    var result = thisArg.fn(...args)
    // 5. 删除函数
    delete thisArg.fn
    // 6. 返回函数执行结果
    return result
}

function foo() {
    console.log('foo函数被执行了', this)
}

function bar(num1, num2) {
    console.log('bar函数被执行了', num1, num2)
    return num1 + num2
}

foo.hyCall()
foo.hyCall(null)
bar.hyCall('kaimo', 18, 20)
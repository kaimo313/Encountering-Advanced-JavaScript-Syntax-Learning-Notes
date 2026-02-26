function foo(num1, num2, num3) {
    // 类数组对象中（长的像是一个数组，本质上是一个对象）
    console.log(arguments)
    // 常见的对 arguments 的操作
    // 1. 获取参数的长度
    console.log(arguments.length)
    // 2. 根据索引值获取某一个参数的值
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments[2])
    // 3. 获取 callee 属性，获取当前 arguments 对象所在的函数
    console.log(arguments.callee)
}

foo(10, 20, 30)

// 将 arguments 转换为数组
var newArray = Array.prototype.slice.call(arguments)
console.log(newArray)

// 原理
Array.prototype.hyslice = function(start, end) {
    console.log(this)
    var arr = this
    var newArr = []
    for(var i = start; i < end; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

var newArray2 = Array.prototype.hyslice.call(arguments, 1, 2)
console.log(newArray2)
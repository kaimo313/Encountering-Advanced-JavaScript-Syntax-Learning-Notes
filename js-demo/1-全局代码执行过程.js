var name = "kaimo"

console.log(num1)

var num1 = 20
var num2 = 30
var result = num1 + num2

console.log(result)

/**
 * 1、代码被解析，V8 引擎内部会帮助我们创建一个对象（GlobalObject 也称之为 GO）
 * 2、运行代码
 *      2.1 v8 为了执行代码，v8 引擎内部会有一个执行上下文栈（Execution Context Stack，ECStack）（函数调用栈）
 *      2.2 因为我们执行的是全局代码，为了全局代码能过正常执行，需要创建全局执行上下文（Global Execution Context）（全局代码需要被执行时才会创建）
 * */ 
// 伪代码
var globalObject = {
    String: '类',
    Date: '类',
    setTimeout: '函数',
    Window: globalObject,
    name: undefined,
    num1: undefined,
    num2: undefined,
    result: undefined
}
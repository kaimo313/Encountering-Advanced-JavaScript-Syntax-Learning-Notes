var msg = "kaimo"

function foo() {
    console.log(msg)
}

function bar() {
    var msg = "kaimo313"
    foo()
}

bar()

// 伪代码
var globalObject = {
    String: '类',
    Date: '类',
    setTimeout: '函数',
    Window: globalObject,
    msg: undefined,
    foo: 0xa00, // 内存地址
    bar: 0xb00 // 内存地址
}
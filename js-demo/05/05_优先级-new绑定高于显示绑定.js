// 结论：new 关键字不能和 apply、call 一起来使用

function foo() {
    console.log(this)
}

// new 绑定优先级高于 bind 绑定
var bar = foo.bind('kaimo')

var obj = new bar() // foo {}

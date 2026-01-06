function foo() {
    console.log(this)
}

// foo.call('kaimo')
// foo.call('kaimo')
// foo.call('kaimo')
// foo.call('kaimo')
// foo.call('kaimo')

// 默认绑定和显示绑定 bind 冲突：显示绑定优先级更高
var newFoo = foo.bind('kaimo')
newFoo()
newFoo()
newFoo()
newFoo()
newFoo()
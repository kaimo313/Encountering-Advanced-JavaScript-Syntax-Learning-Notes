function foo() {
    console.log(this)
}

// apply/call/bind 当传入 null、undefined 时，自动将 this 绑定成全局对象
foo.apply(null) // window
foo.call(undefined) // window

var bar = foo.bind(null)
bar() // window
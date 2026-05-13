function foo() {
    function bar() {

    }
    return bar;
}

var fn1 = foo()
var fn2 = foo()

// 每次调用构造函数都会创建新的函数空间
console.log(fn1 === fn2) // false
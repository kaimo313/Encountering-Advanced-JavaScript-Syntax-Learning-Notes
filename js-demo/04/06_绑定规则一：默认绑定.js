// 默认绑定：独立函数调用

// 案例1
function foo() {
    console.log(this)
}

foo()

// 案例2
function foo1() {
    console.log(this)
}
function foo2() {
    console.log(this)
    foo1()
}
function foo3() {
    console.log(this)
    foo2()
}

foo3()

// 案例3
var obj3 = {
    name: 'why',
    foo: function() {
        console.log(this)
    }
}
var bar3 = obj3.foo
bar3()

// 案例4
function foo4() {
    console.log(this)
}

var obj4 = {
    name: 'obj4',
    foo: foo4
}
var bar4 = obj4.foo
bar4()

// 案例5
function foo5() {
    function bar() {
        console.log(this)
    }
    return bar
}
var fn = foo5()
fn()
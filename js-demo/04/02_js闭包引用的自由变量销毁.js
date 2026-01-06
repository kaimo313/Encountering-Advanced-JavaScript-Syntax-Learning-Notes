function foo() {
    var name = 'why'
    var age = 18 // js引擎会将没有使用的变量销毁
    function bar() {
        debugger
        console.log(name)
    }
    return bar
}

var fn = foo()
fn()
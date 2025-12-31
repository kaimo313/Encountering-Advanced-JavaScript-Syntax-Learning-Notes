function foo() {
    var name = "foo"
    function bar() {
        console.log("bar", name)
    }
    return bar
}

var fn = foo()
fn()

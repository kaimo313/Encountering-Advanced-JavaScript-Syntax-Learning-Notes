// js 语法允许函数内部再定义函数
function foo() {
    function bar() {
        console.log('bar')
    }
    return bar
}

var fn = foo()
fn()

function makeAdder(count) {
    function add(num) {
        return count + num
    }
    return add
}

var add5 = makeAdder(5)
add5(6)
var add10 = makeAdder(10)
var add100 = makeAdder(100)
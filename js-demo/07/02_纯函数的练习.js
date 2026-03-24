// foo 是一个纯函数
function foo(num1, num2) {
    return num1 * 2 + num2 * num2
}

var name = "abc"
// bar 不是一个纯函数
function bar() {
    console.log("bar 其他的代码执行")
    name = "cba"
}

bar()

// baz 不是一个纯函数，修改了传入的参数
function baz(info) {
    info.age = 20
}

var obj = {
    age: 18
}
baz(obj)

// test 是一个纯函数
function test(info) {
    return {
        ...info,
        age: 100
    }
}

// React 的函数组件，通过纯函数去限制 props 不容许去修改
function HelloWorld(props) {
    props.info = {} // 不容许这样
}
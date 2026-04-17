'use strict'

function foo() {
    console.log(this) // undefined
}

var obj = {
    name: 'why',
    foo: foo
}
foo()

var bar = obj.foo
bar()

setTimeout(() => {
    console.log(this) // Window
}, 1000)

// chromium 浏览器 setTimeout 的实现
// fakeWin.setTimeout = function(fn, time) {
//     fakeWin.setTimeout.called = true
//     fakeWin.setTimeout.that = this
//     if(typeof fn === 'string') {
//         eval(fn)
//     } else {
//         fn.apply(this, Array.prototype.slice.call(arguments, 2))
//     }
// }
setTimeout(function () {
    console.log(this) // Window
}, 1000)
function foo() {
    console.log(this)
}

// foo 直接调用和 call/apply 调用的不同在于 this 绑定的不同
// foo 直接调用指向的是全局对象 window
foo()

var obj = {
    name: 'why'
}

// call/apply 是可以指定 this 的绑定对象
foo.apply(obj)
foo.call(obj)

// call/apply 在传参上有所区别
function sum(num1, num2) {
    console.log(num1 + num2, this)
}
sum.apply(obj, [10, 20])
sum.call(obj, 10, 20)

// call 和 apply 在执行函数时，是可以明确的绑定 this，这个绑定规则称之为显示绑定。
// 隐式绑定：object.fn()
// object 对象会被 js 引擎绑定到 fn 函数中的 this 里面

// 案例1
function foo() {
    console.log(this)
}
var obj = {
    name: 'why',
    foo: foo
}
obj.foo()

// 案例2
var obj2 = {
    name: 'why',
    eating: function() {
        console.log(this.name + '在吃东西')
    },
    running: function() {
        console.log(this.name + '在跑步')
    },
    studying: function() {
        console.log(this.name + '在学习')
    }
}

obj2.eating()
obj2.running()
obj2.studying()

// 案例3
var obj3 = {
    name: 'obj3',
    foo: function() {
        console.log(this)
    }
}
var obj4 = {
    name: 'obj4',
    bar: obj3.foo
}
obj4.bar()
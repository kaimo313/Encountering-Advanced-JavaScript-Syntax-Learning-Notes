// 1、测试箭头函数中的 this 指向
var name = 'kaimo'

var foo = () => {
    console.log(this)
}

foo() // window
var obj = { foo: foo }
obj.foo() // window
foo.call('kaimo313') // window

// 2、应用场景
var obj2 = {
    data: [],
    getData: function() {
        // 模拟发送网络请求，将结果放到 data 里面
        // 在箭头函数之前的解决方案
        // var _this = this
        // setTimeout(function() {
        //     var result = ['a', 'b', 'c']
        //     _this.data = result
        // }, 2000)
        setTimeout(() => {
            var result = ['a', 'b', 'c']
            this.data = result
        }, 2000)
    }
}
obj2.getData()
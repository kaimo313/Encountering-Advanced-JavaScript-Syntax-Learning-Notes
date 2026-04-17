var obj = {
    name: 'why',
    age: 18,
    _address: '广州市'
}

// 存取属性描述符
// 1、隐藏某一个私有属性，不希望直接被外界使用和赋值
// 2、如果我们希望接拦截获取某一属性，访问和设置值的过程时，也会使用存取属性描述符
Object.defineProperty(obj, 'address', {
    // 不能修改、删除、重新定义
    configurable: false, // 默认值 false
    // 不能被枚举
    enumerable: false, // 默认值 false
    get: function () {
        foo()
        return this._address
    },
    set: function (newValue) {
        bar()
        this._address = newValue
    }
})

function foo() {
    console.log('获取了一次address的值')
}

function bar() {
    console.log('设置了一次address的值')
}

obj.address = '北京市'
console.log(obj.address)
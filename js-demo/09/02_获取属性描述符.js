var obj = {
    _age: 18,
    _eating: function () {}
}

Object.defineProperties(obj, {
    name: {
        value: '张三',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        enumerable: false,
        configurable: false,
        get: function () {
            return this._age
        },
        set: function (value) {
            this._age = value
        }
    },
})

// 获取属性描述符
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
console.log(Object.getOwnPropertyDescriptor(obj, 'age'))

// 获取所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj))
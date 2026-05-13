var obj = {
    // 私有属性（js里面没有严格意义的私有属性，社区规范，以下划线开头）
    _age: 18,
    _eating: function () {},
    // 下面的写法enumerable、configurable默认是true
    // get age() {
    //     return this._age
    // },
    // set age(value) {
    //     this._age = value
    // }
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
// name 跟 age 没有使用属性描述符定义，但是它们也是具备对应的特性的
// 以 name 属性为例
// value: 'why'
// configurable: true
// enumerable: true
// writable: true
var obj = {
    name: 'why',
    age: 18
}

// 数据属性描述符
Object.defineProperty(obj, 'address', {
    value: '广州市', // 默认值 undefined
    // 不能修改、删除、重新定义
    configurable: false, // 默认值 false
    // 不能被枚举
    enumerable: false, // 默认值 false
    // 不能修改属性值
    writable: false // 默认值 false
})

// 测试 configurable 的作用
// delete obj.name
// console.log(obj.name)
// delete obj.address
// console.log(obj.address)

// // Uncaught TypeError: Cannot redefine property: address
// Object.defineProperty(obj, 'address', {
//     value: '北京市',
//     configurable: true
// })

// 测试 enumerable 的作用
// for (var key in obj) {
//     console.log(key)
// }
// console.log(Object.keys(obj))

// 测试 writable 的作用
// obj.address = '北京市'
// console.log(obj.address)
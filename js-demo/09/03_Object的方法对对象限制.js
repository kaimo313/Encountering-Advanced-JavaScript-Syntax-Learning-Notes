var obj = {
    name: '张三',
    age: 18
}

// 禁止对象添加新的属性
Object.preventExtensions(obj) 

obj.height = 180
obj.address = '北京'

console.log(obj);

// 禁止对象配置/删除里面的属性
// for(var key in obj) {
//     Object.defineProperty(obj, key, {
//         configurable: false,
//         enumerable: true,
//         writable: true,
//         value: obj[key]
//     })
// }
Object.seal(obj)

delete obj.name

console.log(obj);

// 让属性不可修改（writable：false）
Object.freeze(obj)

obj.age = 20

console.log(obj);
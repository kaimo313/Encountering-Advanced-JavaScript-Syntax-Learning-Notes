var obj = {
    name: 'why',
    age: 18
}

// 获取属性
console.log(obj.name)

// 给属性赋值
obj.name = 'kaimo'
console.log(obj.name)

// 删除属性
delete obj.name
console.log(obj)

// 对属性操作时进行一些限制
// 1. 不允许某一个属性被赋值
// 2. 不允许某个属性删除
// 3. 不允许某些属性在遍历对象时被遍历出来

Object.defineProperty(obj, 'height', {
    value: 1.8
})

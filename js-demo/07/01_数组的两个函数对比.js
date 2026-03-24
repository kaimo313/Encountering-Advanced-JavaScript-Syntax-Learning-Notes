var names = ['aaa', 'bbb', 'ccc', 'ddd']

// slice 只要给它传入一个 start/end，那么对于同一个数组来说，它会给我们返回确定的值
// slice 函数本身它不会修改原来的数据
// slice 函数本身就是一个纯函数
var newNames1 = names.slice(0, 3);
console.log(newNames1)
console.log(names)

// splice 在执行时，有修改掉调用的数组对象本身，修改的这个操作就是产生的副作用
// splice 函数不是一个纯函数
var newNames2 = names.splice(0, 3)
console.log(newNames2)
console.log(names)
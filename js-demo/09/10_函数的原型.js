function foo() {

}

// 函数也是一个对象，它也是有 [[prototype]] 隐式原型
console.log(foo.__proto__);

// 函数它因为是一个函数，所以它还会有一个显示原型属性，叫做 prototype

console.log(foo.prototype);

var f1 = new foo();
var f2 = new foo();

f1.__proto__ === foo.prototype;
f2.__proto__ === foo.prototype;

Person.prototype.name = '张三'
p1.__proto__.name = '李四'

// 模拟
// function foo() {
//     this = {}
//     // 这个对象内部的 `[[prototype]]` 属性会被赋值为该构造函数的 `prototype` 属性
//     this.__proto__ = foo.prototype;
// }
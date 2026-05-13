var obj = { name: 'why' }; // [[prototype]]
var info = { }; // [[prototype]]

// 早期的 ECMA 是没有规范如何去查看的 [[prototype]] 属性

// 给对象中提供了一个属性，可以让我们查看一下这个原型对象（浏览器提供）

console.log(obj.__proto__); // [Object: null prototype] {}

// ES5 中增加了一个新方法：Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj)); 

obj.__proto__.age = 17;
console.log(obj);
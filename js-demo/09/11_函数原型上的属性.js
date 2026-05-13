function foo() {

}

// 1、constructor 属性
console.log(foo.prototype);
console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// foo.prototype.constructor = 构造函数本身
console.log(foo.prototype.constructor === foo); // true
console.log(foo.prototype.constructor.name); // "foo"

// 2、可以添加自己的属性
foo.prototype.name = "张三";
foo.prototype.age = 18;
foo.prototype.say = function () {
    console.log("hello");
}

// 3、直接修改整个 prototype 对象
foo.prototype = {
    constructor: foo,
    name: "李四",
    age: 20
}

// 真实开发中我们可以通过 Object.defineProperty() 方法来添加 constructor 属性
Object.defineProperty(foo.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: foo
})
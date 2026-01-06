// 通过一个 new 关键字调用一个函数时（构造器），这个时候 this 是在调用这个构造器时创建出来的对象
// this = 创建出来的对象
// 这个绑定过程就是 new 绑定

function Person(name, age) {
    this.name = name
    this.age = age
    console.log(this)
}

var p1 = new Person('why', 18)
console.log('p1---->', p1)
var p2 = new Person('kaimo', 313)
console.log('p2---->', p2)

var obj1 = {
    name: 'obj1',
    foo: function() {
        console.log(this)
    }
};

var obj2 = {
    name: 'obj2'
};

// obj2.foo = obj1.foo;
// obj2.foo(); // obj2

// 间接调用：(obj2.foo = obj1.foo)() 实际上是在调用返回的函数引用，而不是作为对象的方法调用
// 属于独立函数调用
(obj2.foo = obj1.foo)(); // window

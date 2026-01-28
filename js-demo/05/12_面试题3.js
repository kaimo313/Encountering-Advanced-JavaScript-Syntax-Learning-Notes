var name = "window";

function Person(name) {
    this.name = name;
    this.foo1 = function() {
        console.log(this.name)
    }
    this.foo2 = () => console.log(this.name);
    this.foo3 = function () {
        return function () {
            console.log(this.name)
        }
    }
    this.foo4 = function () {
        return () => {
            console.log(this.name)
        }
    }
}

var person1 = new Person('person1');
var person2 = new Person('person2');

person1.foo1(); // person1 隐式绑定
person1.foo1.call(person2); // person2 显示绑定优先级大于隐式绑定

person1.foo2(); // person1 箭头函数不绑定this，上层作用域this是person1
person1.foo2.call(person2); // person1 箭头函数不绑定this，上层作用域this是person1

person1.foo3()(); // window 独立函数调用
person1.foo3.call(person2)(); // window
person1.foo3().call(person2); // person2

person1.foo4()(); // person1
person1.foo4.call(person2)(); // person2
person1.foo4().call(person2); // person1 箭头函数不受 call 影响，仍然指向词法作用域中的 person1
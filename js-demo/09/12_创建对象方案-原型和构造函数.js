function Person(name, age, height, address) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;
}

Person.prototype.eating = function () {
    console.log(this.name + '正在吃东西');
}
Person.prototype.running = function () {
    console.log(this.name + '正在跑步');
}

var p1 = new Person('张三', 18, 1.88, '北京');
var p2 = new Person('李四', 20, 1.68, '上海');

p1.eating();
p2.eating();
p1.running();
p2.running();
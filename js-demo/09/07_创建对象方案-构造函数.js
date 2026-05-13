function Person(name, age, height, address) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.address = address;

    this.eating = function () {
        console.log(this.name + '正在吃东西');
    },
    this.running = function () {
        console.log(this.name + '正在跑步');
    }
}

var p1 = new Person('张三', 18, 1.88, '北京');
var p2 = new Person('李四', 20, 1.68, '上海');

console.log(p1, p2);

console.log(p1.__proto__.constructor.name); // Person
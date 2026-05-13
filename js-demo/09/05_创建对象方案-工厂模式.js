function createPerson(name, age, height, address) {
    var obj = {};
    obj.name = name;
    obj.age = age;
    obj.height = height;
    obj.address = address;

    obj.eating = function () {
        console.log(this.name + '正在吃东西');
    },
    obj.running = function () {
        console.log(this.name + '正在跑步');
    }
    return obj;
}

var p1 = createPerson('张三', 18, 1.88, '北京');
var p2 = createPerson('李四', 20, 1.68, '上海');

// 工厂模式的缺点：获取不到对象最真实的类型
console.log(p1, p2);
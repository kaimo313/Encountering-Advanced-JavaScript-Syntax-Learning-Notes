var p1 = {
    name: '张三',
    age: 18,
    height: 1.88,
    address: '北京',
    eating: function () {
        console.log(this.name + '正在吃东西');
    },
    running: function () {
        console.log(this.name + '正在跑步');
    }
}

var p2 = {
    name: '李四',
    age: 18,
    height: 1.88,
    address: '北京',
    eating: function () {
        console.log(this.name + '正在吃东西');
    },
    running: function () {
        console.log(this.name + '正在跑步');
    }
}
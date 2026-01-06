// 从某种角度来说，开发中如果没有 this，很多问题我们也是有解决方案
// 但是没有 this，会让我们编写代码变得非常的不方便

var obj = {
    name: 'why',
    eating: function() {
        console.log(this.name + '在吃东西')
        console.log(obj.name + '在吃东西') // obj 一改动，里面用到 obj 的都要改
    },
    running: function() {
        console.log(this.name + '在跑步')
        console.log(obj.name + '在跑步')
    },
    studying: function() {
        console.log(this.name + '在学习')
        console.log(obj.name + '在学习')
    }
}
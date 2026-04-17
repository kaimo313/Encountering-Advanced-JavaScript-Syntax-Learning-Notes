// 创建一个对象，对某一个人进行抽象
var obj = new Object()
obj.name = 'why'
obj.age = 18
obj.sex = 'male'
obj.height = 1.8
obj.eat = function () {
    console.log('eat')
}

// 创建方式2：使用字面量方式
var obj2 = {
    name: 'why',
    age: 18,
    sex: 'male',
    height: 1.8,
    eat: function () {
        console.log('eat')
    }
}
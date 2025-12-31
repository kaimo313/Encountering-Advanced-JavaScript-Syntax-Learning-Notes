// 把数组里面的偶数都挑出来
var nums = [10, 5, 11, 100, 55]

var newNums = []
for (var i = 0; i < nums.length; i++) {
    var num = nums[i]
    if(num % 2 === 0) {
        newNums.push(num)
    }
}
console.log(newNums)

// 函数 function：独立的 function，我们称之为是一个函数
// 方法 method：当我们的一个函数属于某一个对象时，我们称这个函数是这个对象的方法

// 数组中的高阶函数
// 1、filter：过滤
var newNums2 = nums.filter(function(item) {
    return item % 2 === 0
})
// 2、map：映射
var newNums3 = nums.map(function(item) {
    return item * 10
})
///3、forEach：迭代
nums.map(function(item) {
    console.log(item)
})
// 4、find/findIndex：查找
var item = nums.find(function(item) {
    return item === 11
})
// 5、reduce：累加
nums.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentValue
}, 0)
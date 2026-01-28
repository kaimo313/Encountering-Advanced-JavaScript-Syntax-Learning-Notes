// 1.setTimeout
setTimeout(function() {
    console.log(this) // window
}, 2000)

// 2.监听点击
const boxDiv = document.querySelector('.box')
boxDiv.onclick = function() {
    console.log(this) // boxDiv
}
boxDiv.addEventListener('click', function() {
    console.log(this) // boxDiv
})

// 3.数组.forEach/map/filter/find
var names = ['a', 'b', 'c']
names.forEach(function(item) {
    console.log(item, this) // window
})
names.forEach(function(item) {
    console.log(item, this) // ['a', 'b', 'c']
}, names)
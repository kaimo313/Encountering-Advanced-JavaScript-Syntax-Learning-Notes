function double(num) {
    return num * 2
}

function square(num) {
    return num * num
}

var count = 10
var result = square(double(count))
console.log(result)

// 组合函数
function composeFn(m, n) {
    return function(count) {
        return n(m(count))
    }
}

var newFn = composeFn(double, square)
console.log(newFn(10))
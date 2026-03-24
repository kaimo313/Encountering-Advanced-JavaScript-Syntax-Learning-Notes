function add(x, y, z) {
    return x + y + z
}

var result = add(10, 20, 30)
console.log(result)

function sum(x) {
    return function(y) {
        return function(z) {
            return x + y + z
        }
    }
}

var sum1 = sum(10)(20)(30)
console.log(sum1)

// 把 add 函数，转变成 sum 函数的过程就是柯里化


// 简化柯里化
var sum2 = x => y => z => {
    return x + y + z
}
console.log(sum2(10)(20)(30))
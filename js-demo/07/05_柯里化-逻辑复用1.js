function sum(m) {
    return function(n) {
        return m + n
    }
}

console.log(sum(5)(10))
console.log(sum(5)(20))
console.log(sum(5)(30))
console.log(sum(5)(40))

function makeAdder(count) {
    count = count * 2 // 复用逻辑
    return function(num) {
        return count + num
    }
}

var add5 = makeAdder(5)
console.log(add5(10))
console.log(add5(20))
console.log(add5(30))
console.log(add5(40))
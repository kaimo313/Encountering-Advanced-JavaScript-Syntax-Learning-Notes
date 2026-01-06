function createFnArray() {
    // 整数占据 4 个字节
    // arr 占据内存大小：1024 * 1024 * 4 = 4M
    var arr = new Array(1024 * 1024).fill(1)
    return function() {
        console.log(arr.length)
    }
}

var arrayFns = []
for(var i = 0; i < 100; i++) {
    setTimeout(() => {
        arrayFns.push(createFnArray())
    }, i * 100)
}

setTimeout(() => {
    for(var i = 0; i < 50; i++) {
        setTimeout(() => {
            arrayFns.pop()
        }, i * 100)
    }
}, 100 * 100)
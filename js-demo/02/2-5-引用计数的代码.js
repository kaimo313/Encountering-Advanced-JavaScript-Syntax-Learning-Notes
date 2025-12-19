var p = {
    name: "kaimo"
}

var p1 = {
    name: "kaimo1",
    friend: p
}

var p2 = {
    name: "kaimo2",
    friend: p
}

// 循环引用
var obj1 = {
    friend: obj2
}

var obj2 = {
    friend: obj1
}
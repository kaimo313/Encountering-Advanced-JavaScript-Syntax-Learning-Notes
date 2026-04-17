// 意外的创建全局变量

message = "Hello World"
console.log(message)

function foo() {
    age = 20
}
foo()

// 不允许函数参数有相同的名称
function bar(age, age) {
    console.log(age, age)
}
bar(18, 20)

// 静默错误
true.foo = 'bar'
NaN = 123

// 试图删除不可删除的属性
var obj = {}
Object.defineProperty(obj, 'name', {
    configurable: false,
    value: 'why'
})
delete obj.name

// 不允许0的八进制语法
var num = 0123 // “0o123”
console.log(num)

// eval 不再为上层引用变量
var jsString = "var message = 'Hello World'; console.log(message)";

eval(jsString);

console.log(message);
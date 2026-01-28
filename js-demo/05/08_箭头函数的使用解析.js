// 编写箭头函数
// () 参数
// => 箭头
// {} 函数的执行体
var foo = (num1, num2, num3) => {

}

// 高阶函数在使用时，也可以传入箭头函数
[1, 2, 3].forEach(() => {});

// 常见的简写
// 简写1：如果参数只有一个，() 可以省略
[1, 2, 3].forEach(item => {
    console.log(item)
});

// 简写2：如果函数执行体只有一行代码，{} 可以省略，并且它会默认将这行代码的执行结果作为返回值
[1, 2, 3].forEach(item => console.log(item));
var newNums = [1, 2, 3].filter(item => item % 2 === 0)
var result = [1, 2, 3].filter(item => item % 2 === 0).map(item => item * 100).reduce((preValue, item) => preValue + item)

// 简写3：如果一个箭头函数只有一行代码，并且返回一个对象，这个时候如何编写简写
var bar = () => ({ name: 'kaimo313', age: 18 })
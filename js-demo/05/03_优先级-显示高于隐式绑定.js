var obj = {
    name: 'obj',
    foo: function() {
        console.log(this)
    },
}

obj.foo() // obj

// call、apply 的优先级高于隐式绑定
obj.foo.call('kaimo') // String {'kaimo'}
obj.foo.apply('kaimo') // String {'kaimo'}

// bind 的优先级高于隐式绑定
function foo() {
    console.log(this)
}

var obj2 = {
    name: 'obj2',
    foo: foo.bind('kaimo2')
}
obj2.foo() // String {'kaimo2'}
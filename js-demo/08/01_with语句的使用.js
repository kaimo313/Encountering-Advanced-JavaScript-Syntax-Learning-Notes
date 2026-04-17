var message = "Hello World"

var obj = {
    name: 'why',
    age: 18,
    message: 'kaimo313'
}

function foo() {
    console.log('foo---->', message)
    function bar() {
        with(obj) {
            console.log('bar---->', message)
        }
    }
    bar()
}

foo()
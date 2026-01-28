function foo(el) {
    console.log(el, this.id)
}

var obj = {
    id: 'kaimo313'
};

[1, 2, 3].forEach(foo, obj);
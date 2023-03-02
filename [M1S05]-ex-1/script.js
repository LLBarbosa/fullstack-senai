let list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José']

let newList = list.filter(function (name, i) {
    return list.indexOf(name) === i;
});


console.log(newList); 
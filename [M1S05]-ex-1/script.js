const list = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];
let newList = [];
let duplicates = [];

for (i = 0; i < list.length; i++) {
    let element = list[i];
    let isDuplicate = false;
    for (j = 0; j < newList.length; j++) {
        if (newList[j] === element) {
            duplicates.push(element);
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        newList.push(element);
    }
}

console.log(duplicates);
console.log(newList);


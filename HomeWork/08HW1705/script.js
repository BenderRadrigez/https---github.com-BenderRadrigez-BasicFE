//  1. Дайте ответ на вопрос, что такое объект в JS:
// объект - это не упорядоченный список(массив), который имеет вид ключ:значение.

// Напишите функцию, которая принимает товары (массив объектов) и возвращает строку 'Самый дорогой товар <НАЗВАНИЕ> стоит <ЦЕНА> EUR'.
function mostExpensiveItem(someArrayOfObjects){
    let highest = 0;
    let indexItem = 0;
    for (let i = 0; i < someArrayOfObjects.length; i++) {
        if (someArrayOfObjects[i].price > highest) {
            highest = someArrayOfObjects[i].price;
            indexItem = i;
        }
    }
    return `самый дорогой товар ${someArrayOfObjects[indexItem].title} стоит ${someArrayOfObjects[indexItem].price} EUR`
}

// Напишите функцию, которая принимает товары (массив объектов) и возвращает их общую сумму (скаляр).
function summaOfAllTitle(arrObjects){
    let sum = 0;
    for (let i = 0; i < arrObjects.length; i++){
        sum += arrObjects[i].price;
    }

    return sum;
}

// вызов функций
let arrayItems = [{title: 'hulahup', price: 100, quantity: 13}, {title: 'hulajnoga', price: 1100, quantity: 18}, {title: 'video player', price: 1500, quantity: 32}]

console.log(mostExpensiveItem(arrayItems));
console.log(`общая сумма всех товаров: ${summaOfAllTitle(arrayItems)} EUR`);

// дополнение для закрепления работы с объектами
// цикл выводящий все товары, их колличетсво и общую цену всех единиц товара на складе
for(let i = 0; i < arrayItems.length; i++){
    console.log(`товар: ${arrayItems[i].title}. в наличии: ${arrayItems[i].quantity}, общей стоимостью ${arrayItems[i].price * arrayItems[i].quantity} EUR`)
}

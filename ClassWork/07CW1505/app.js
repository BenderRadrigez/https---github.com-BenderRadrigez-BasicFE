function hello(){
    alert('hello');
}

function summator(num1, num2){
    return num1 + num2;
}

let names = ['Andrei', 'Ivan', 'Svetlana'];

console.log(names.length); // вывести размер массива

names.push('Sasha'); // добавить элемент в конец массиве
names.unshift('Tester'); // добавить в начало

let last_element = names.pop(); // извлечь последний элемент
let first_element = names.shift(); // извлечь первый элемент
let index = names.indexOf('Andrei'); // найти индекс элемента

function oddOrEven(number){
    if(number % 2 == 0) return 'число - четное';
    else return 'число - нечетное';
}

function isEven(number){
    return number % 2 == 0;
}

// принимает два аргумента
// 1 сумма заказа
// 2 размер скидки от 0 - 100
// возвращает сумму заказа с учетом скидки
function apply_discount(cost, discount){
    return cost * (1 - discount / 100);
}

// проверить число на отрицательное или нет
function isNegativeNumber(number){
    return number < 0;
}

// функция для пробы цикла for
function for_func(){
    for (let i = 0; i <= 10; i++){
        if (i % 2 != 0) console.log(i);
    }
}

// функция которая принимает два аргумента(числа)
// возвращает сумму чисел в диапазоне двух чисел
function summator(start, end){
    summa = 0;
    for (start; start <= end; start++){
        summa += start;
    }
    return summa;
}

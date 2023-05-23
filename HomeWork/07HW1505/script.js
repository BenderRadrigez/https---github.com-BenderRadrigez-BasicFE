// функция получает один аргумент (массив целых чисел)
// возвращает сумму положительных элементов
function summator_positive_elements(somearray){
    let sum = 0;
    for (let i = 0; i < somearray.length; i++) {
        if (somearray[i] > 0) {
            sum += somearray[i];
        }
    }
    return sum;
}

// функция которая получает один аргумент (массив целых чисел)
// возвращает наибольшее число из массива.
function max_number(somearray){
    number = 0;
    for(let i = 0; i < somearray.length; i++){
        if (somearray[i] > number) {
            number = somearray[i];
        }
    }
    return number;
}

// функция которая вычисляет площадь окружности.
function circle_area(radius){
    return Math.PI * radius ** 2;
}
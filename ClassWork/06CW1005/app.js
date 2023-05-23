// объявление переменных
// let name = "Andrei";
// // const age = 27;

// // математические операции
// // let number = 2;
// // let value = 5;
// // let result = number ** value;

// // вывод
// // alert(result);
// console.log(name);

//получение данных prompt();
// let radius = prompt('введите радиус:');
// let result = Math.PI * radius ** 2;
// alert(result);

// задачки
// let celsium = prompt('введите температуру в цельсиях:');
// let fahrenheit = celsium * 1.8 + 32;
// alert(fahrenheit);

// let value = 555;
// let days = (value - value % 24) / 24;
// let hour = value % 24;
// alert('самолет прилетит через: ' + days + ' дня, прилетает в ' + hour + ':00');

// let order_cost = 1000;
// let result = 750;
// let discount = 100 - (order_cost / 100) * (result / 100);
// alert(discount);

// let num_1 = +prompt('первое число');  //+promt() - чтоб видел числа
// let num_2 = +prompt('второе число');
// let num_3 = +prompt('третье число');
// let result = (num_1 + num_2 + num_3) / 3
// alert(result)

// конструкция if-else
// let temp = 20;
// if (temp < 20){
//     alert('холодно');
// } else if (temp > 20) {
//     alert('жарко');
// } else{
//     alert('комфортно');
// }

// задача
// let num_1 = prompt('введите первое число');
// let num_2 = prompt('введите второе число');

// if (num_1 > num_2){
//     alert('первое число больше');
// }else if(num_1 < num_2){
//     alert('второе число больше');
// }else {
//     alert('числа равны');
// }

let balance = prompt('запрос баланса');
let cost = prompt('стоимость товара');
if (cost > balance){
    alert(`недостаточно средств на счету. не хватает ${cost - balance}$`);
}else{
    alert(`вы успешно можете приобрести, на счету останется ${balance - cost}$`);
}
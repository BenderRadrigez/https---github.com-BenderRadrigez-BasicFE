// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
let number = prompt("введите число");
let tenPercent = number * 0.1;
console.log(`10% от числа ${number} равняется ${tenPercent}`);

//Написать программу, которая получает два числа и выводит наибольшее из ниx
let number1 = prompt("введите число 1");
let number2 = prompt("введите число 2");
if (number1 > number2) {
  alert("наибольшее число " + number1);
} else {
  alert("наибольшее число " + number2);
}

// Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 20’, ‘Число больше 20’ или ‘Число равно 20’
let value = prompt("введите число");
if (value < 20) {
  alert("Число меньше 20");
} else if (value > 20) {
  alert("Число больше 20");
} else {
  alert("Число равно 20");
}

// Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.
let userName = prompt("введите ваше имя");
let age = prompt("введите ваш возраст");
if (age > 20) {
  alert(`Hello,  ${userName}`);
} else {
  alert(`Hi, ${userName}`);
}

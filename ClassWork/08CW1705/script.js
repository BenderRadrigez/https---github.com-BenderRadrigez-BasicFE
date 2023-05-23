function takeOneWalueFromArray() {
  let test = [[1, 2], ["x", "y"], "Andrei"];
  console.log(test[1][1]);
}

function avg(someArray) {
  let sum = 0;
  for (let i = 0; i < someArray.length; i++) {
    sum += someArray[i];
  }
  return sum / someArray.length;
}

function discount() {
  let number = +prompt("give me a number:");
  alert(number * 0.85);
}

function equals() {
  let number = +prompt("введите число:");
  if (number < 100) {
    alert("Число меньше 100");
  } else if (number > 100) {
    alert("Число больше 100");
  } else {
    alert("Число равно 100");
  }
}

function makeString() {
  const name = "Ivan";
  const age = 32;
  const message = `Привет, меня зовут ${name} и мне ${age} лет`;
  console.log(message);
}

function getNegativeNumbers(numbers) {
  let someArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      someArray.push(numbers[i]);
    }
  }
  return someArray;
}

function objects() {
  // описать трех пользователей-игроков
  // псевдоним, урон, здоровье

  // вариант 1
  const gamer1_username = "h4cker556";
  const gamer1_damage = 556;
  const gamer1_health = 100;

  const gamer2_username = "from_usa";
  const gamer2_damage = 400;
  const gamer2_health = 90;

  const gamer3_username = "nobody";
  const gamer3_damage = 999;
  const gamer3_health = 50;

  // вариант 2
  const gamer1 = ["h4cker556", 556, 100];
  const gamer2 = ["from_usa", 400, 90];
  const gamer3 = ["nobody", 999, 50];
  console.log(gamer3[2]);

  // вариант 3
  const gamer1x = { username: "h4cker556", damage: 556, health: 100 };
  const gamer2x = { username: "from_usa", damage: 400, health: 90 };
  const gamer3x = { username: "nobody", damage: 999, health: 50 };
  console.log(gamer3x.health);
}

let product = {title: 'hulajnoga', price: 1500, quantity: 50};

function converterEurToUsd(product){
    return product.price * 1.1;
}

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

let arrayItems = [{title: 'hulahup', price: 100, quantity: 50}, {title: 'hulajnoga', price: 1100, quantity: 50}, {title: 'video player', price: 1500, quantity: 50}]
alert(mostExpensiveItem(arrayItems));
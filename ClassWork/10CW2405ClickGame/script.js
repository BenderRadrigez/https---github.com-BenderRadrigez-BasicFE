function StartGame() {
  object.classList.toggle("start");
  objSpeed = 1.5;
  objScale = 60;
  score = 0;
  counterLifes = 3;
  PrintCounter(score);
  PlaySound(startSound);
  RemakeLifes(counterLifes);
}

function EndGame() {
  PlaySound(endSound);
  object.classList.remove("start");
  alert(`your score: ${score}`);
}

function Miss(event) {
  if (event.target.id == "area") {
    counterLifes--;
    RemakeLifes();
    PrintCounter(score);
    PlaySound(missSound);
    if (counterLifes == 0) {
      EndGame();
    }
  }
}

function Hit() {
  score++;
  PrintCounter(score);

  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let randomPositionX = Math.floor(Math.random() * 340);

  object.style.left = `${randomPositionX}px`;

  PlaySound(hitSound);

  if (score % 5 == 0) {
    IncreaseSpeed();
  }
  ChangeScale();
  // ChangeColorObj();
}

function IncreaseSpeed() {
  if (objSpeed >= 0.5) {
    objSpeed -= 0.1;
    object.style.animationDuration = `${objSpeed}s`;
  }
}
function ChangeScale() {
  let randomScale = Math.random() * 100;

  if (randomScale < 30) {
    randomScale = 30;
  } else if (randomScale > 80) {
    randomScale = 80;
  }
  object.style.width = `${randomScale}px`;
}
// измеенение цвета плитки
// function ChangeColorObj() {
//   let colors = ["red", "gold", "blue", "green", 'tomato'];
//   let randomIndex = Math.floor(Math.random() * colors.length);
//   object.style.background = colors[randomIndex];
// }

function PrintCounter(score) {
  document.querySelector("#score").textContent = score;
  document.title = `score: ${score}`;
}

// проигрывает звук без задержки
function PlaySound(sound) {
  sound.currentTime = 0;
  sound.play();
}
// создает список элементов для показа колличества жизней
function MakeLifes(counter) {
  let lifeUl = document.createElement("ul");
  lifeUl.classList.add("lifes");
  header.appendChild(lifeUl);
  for (let i = 0; i < counter; i++) {
    let lifeLi = document.createElement("li");
    let lifeImg = document.createElement("img");
    lifeImg.src = "images/life.png";
    lifeUl.appendChild(lifeLi);
    lifeLi.appendChild(lifeImg);
  }
}
// обновляет список жизней
function RemakeLifes() {
  let lifeUl = document.querySelector(".lifes");
  header.removeChild(lifeUl);
  MakeLifes(counterLifes);
}

let objSpeed;
let objScale;
let score;
let counterLifes = 3;
let object = document.querySelector("#object");
let header = document.querySelector("#header");

let hitSound = new Audio("sounds/hit.wav");
let missSound = new Audio("sounds/miss.wav");
let startSound = new Audio("sounds/start.wav");
let endSound = new Audio("sounds/gameover.wav");

MakeLifes(counterLifes);

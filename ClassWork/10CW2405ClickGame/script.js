function StartGame() {
  object.classList.toggle("start");
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
}

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

let score = 0;
let counterLifes = 3;
let object = document.querySelector("#object");
let header = document.querySelector("#header");

let hitSound = new Audio("sounds/hit.wav");
let missSound = new Audio("sounds/miss.wav");
let startSound = new Audio("sounds/start.wav");
let endSound = new Audio("sounds/gameover.wav");

MakeLifes(counterLifes);

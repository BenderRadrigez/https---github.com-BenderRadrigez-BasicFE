function start_game() {
  object.classList.toggle("start");
  score = 0;
  counterLifes = 3;
  printCounter(score);
  playSound(startSound);
  removeLifes();
  makeLifes(counterLifes);
}

function end_game() {
  playSound(endSound);
  object.classList.remove("start");
  alert(`your score: ${score}`);
}

function miss(event) {
  if (event.target.id == "area") {
    removeLifes();
    counterLifes--;
    makeLifes(counterLifes);
    printCounter(score);
    playSound(missSound);
    if (counterLifes == 0) {
      end_game();
    }
  }
}

function hit() {
  score++;
  printCounter(score);

  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let randomPositionX = Math.floor(Math.random() * 340);

  object.style.left = `${randomPositionX}px`;

  playSound(hitSound);
}

function printCounter(score) {
  document.querySelector("#score").textContent = score;
  document.title = `score: ${score}`;
}

// проигрывает звук без задержки
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function makeLifes(counter) {
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
function removeLifes() {
  let lifeUl = document.querySelector(".lifes");
  header.removeChild(lifeUl);
}

let score = 0;
let counterLifes = 3;
let object = document.querySelector("#object");
let header = document.querySelector("#header");

let hitSound = new Audio("sounds/hit.wav");
let missSound = new Audio("sounds/miss.wav");
let startSound = new Audio("sounds/start.wav");
let endSound = new Audio("sounds/gameover.wav");

makeLifes(counterLifes);

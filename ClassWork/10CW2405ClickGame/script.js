function start_game() {
  object.classList.toggle("start");
  document.title = "score: 0";
  score = 0;
  playSound(startSound);
}

function end_game() {
  playSound(endSound);
  alert("you lose");
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    print_counter(score);
    playSound(missSound);
    if (score <= 0) {
      end_game();
    }
  }
}
function hit() {
  score++;
  print_counter(score);

  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let randomPositionX = Math.floor(Math.random() * 340);

  object.style.left = `${randomPositionX}px`;

  playSound(hitSound);
}
function print_counter(score) {
  document.querySelector("#score").textContent = score;
  document.title = `score: ${score}`;
}
// проигрывает звук без задержки
function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

let score = 0;
let object = document.querySelector("#object");

let hitSound = new Audio("sounds/hit.wav");
let missSound = new Audio("sounds/miss.wav");
let startSound = new Audio("sounds/start.wav");
let endSound = new Audio("sounds/gameover.wav");

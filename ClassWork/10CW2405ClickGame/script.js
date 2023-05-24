function start_game() {
  object.classList.toggle("start");
  document.title = "score: 0";
  score = 0;
}

function end_game() {
  alert("end game");
}

function miss(event) {
  if (event.target.id == "area") {
    score--;
    document.title = `score: ${score}`;
    if (score <=0) {
      end_game();
    }
  }
}
function hit() {
  score++;
  document.title = `score: ${score}`;

  object.classList.remove("start");
  void object.offsetWidth;
  object.classList.add("start");

  let randomPositionX = Math.floor(Math.random() * 340);

  object.style.left = `${randomPositionX}px`;

  hitSound.currentTime = 0;
  hitSound.play();
}

let score = 0;
let object = document.querySelector("#object");

let hitSound = new Audio('sounds/hit.wav');

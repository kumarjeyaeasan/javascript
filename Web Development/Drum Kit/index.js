//document.querySelectorAll("button").addEventListener("click", handleClick);

function handleClick() {
  playSound(this.innerHTML);
}
function playSound(key) {
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("Invalid!");
  }
}

function buttonAnimation(currKey) {
  const activeButton = document.querySelector(`.${currKey}`);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

const buttons = document.querySelectorAll(".drum");
buttons.forEach(function (currentBtn) {
  currentBtn.addEventListener("click", function () {
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });

  document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
  });
});

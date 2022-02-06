const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

gamePattern.push(randomChosenColour);

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
}

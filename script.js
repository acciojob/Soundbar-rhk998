const applauseButton = document.getElementById('applause');
const booButton = document.getElementById('boo');
const gaspButton = document.getElementById('gasp');
const tadaButton = document.getElementById('tada');
const victoryButton = document.getElementById('victory');
const wrongButton = document.getElementById('wrong');
const stopButton = document.getElementById('stop');


const applause = new Audio('sounds/applause.mp3');
const boo = new Audio('sounds/boo.mp3');
const gasp = new Audio('sounds/gasp.mp3');
const tada = new Audio('sounds/tada.mp3');
const victory = new Audio('sounds/victory.mp3');
const wrong = new Audio('sounds/wrong.mp3');

// Event listeners for button clicks to play sounds
applauseButton.addEventListener('click', () => applause.play());
booButton.addEventListener('click', () => boo.play());
gaspButton.addEventListener('click', () => gasp.play());
tadaButton.addEventListener('click', () => tada.play());
victoryButton.addEventListener('click', () => victory.play());
wrongButton.addEventListener('click', () => wrong.play());

function stopSounds() {
  console.log("Stopping all sounds...");
  applause.pause();
  boo.pause();
  gasp.pause();
  tada.pause();
  victory.pause();
  wrong.pause();
}

stopButton.addEventListener('click', stopSounds);

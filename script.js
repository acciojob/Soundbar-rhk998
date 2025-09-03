
const soundButtons = document.querySelectorAll('[data-sound]');
const stopButton = document.getElementById('stop');

// Play sound when a button is clicked
soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    const soundName = button.getAttribute('data-sound');
    const audio = document.querySelector(`audio source[src*="${soundName}"]`).parentElement;

    audio.currentTime = 0;
    audio.play();
  });
});

// Stop all sounds
stopButton.addEventListener('click', () => {
  document.querySelectorAll('audio').forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
});

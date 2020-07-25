function playSound(e) {
  const audio = document.querySelectorAll(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelectorAll(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; // stop the function
  audio[0].currentTime = 0;
  audio[0].play();
  key[0].classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if its not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

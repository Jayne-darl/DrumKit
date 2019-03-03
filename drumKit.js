function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keycode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keycode}"]`);
    if(!audio) return //stop function from running all together
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if(e.propetyName !== 'tranform') return //skip if it is not transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
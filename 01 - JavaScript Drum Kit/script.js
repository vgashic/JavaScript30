
function playSound(e) {

	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`div[data-key="${e.keyCode}"`);

	if (!audio) {
		return; // stop from running if there is no key associated
	}

	audio.currentTime = 0; // rewind
	audio.play();

	key.classList.add('playing');
	//key.classList.remove('playing');
	//key.classList.toggle('playing');
}




function removeTransition(e) {

	if (e.propertyName !== 'transform') {
		return;
	}

	this.classList.remove('playing');
};

window.addEventListener('keydown', playSound);
const allKeys = document.querySelectorAll('.key');
allKeys.forEach(key => key.addEventListener('transitionend', removeTransition));


const btn = document.querySelector('.burger__menu');

btn.addEventListener('click',() => {
	if (btn.classList.contains('change')) {
		btn.classList.remove('change')
	}
	else {
		btn.classList.add('change')
	}
});
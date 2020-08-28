document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgb(2, 2, 6, 0.633)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

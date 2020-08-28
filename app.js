// For visible navbar after hero page
document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = 'rgb(2, 2, 6, 0.633)';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// For opeaning navbar in mobile view
const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('.navlinks');
const links = document.querySelectorAll('.navlinks li');
console.log(links);

hamburger.addEventListener('click', () => {
	navlinks.classList.toggle('active');

	links.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = '';
		} else {
			link.style.animation = `navLinkfade 0.5s ease forwards ${
				index / 5 + 0.2
			}s`;
		}
	});
});

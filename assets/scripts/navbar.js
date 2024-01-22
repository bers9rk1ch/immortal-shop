const navMenuMobile = document.querySelector('.nav-menu__mobile-adaptive');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.nav-menu');
const menuLinks = [...menu.children];
const menuLinksActive = [...menu.querySelectorAll('.menu-active-link')];
const menuLinksAnchor = [...menu.querySelectorAll('.menu-anchor-link')];
const header = document.querySelector('.header');
const scrollUpContainer = document.querySelector('.scroll-up-button');
const scrollUpButton = document.querySelector('.scroll-up-button-container span');

scrollUpButton.addEventListener('click', event => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
})

window.addEventListener('scroll', event => {
	if (window.scrollY > 200) {
		header.classList.add('fixed');
	}
	else if (window.scrollY === 0) {
		header.classList.remove('fixed');
	}

	if (window.scrollY > 500) {
		scrollUpContainer.classList.add('visible');
	} else {
		scrollUpContainer.classList.remove('visible');
	}
})

menuLinksAnchor.map((item, index) => 
	item.addEventListener('click', event => {
		event.preventDefault();
		const offsetTop = document.querySelector('.footer').offsetTop;
		window.scrollTo({
			top: offsetTop,
			behavior:"smooth",
		});
	})
)

const linksRoute = {
	"": menuLinksActive[0],
	"feedback": menuLinksActive[1],
	"basket": menuLinksActive[2],
};
let currentActiveMenuLink = linksRoute[window.location.hash.replace(/^#\//, "").split('?')[0]];
currentActiveMenuLink.classList.add('active')

window.addEventListener('hashchange', event => {
	const path = window.location.hash.replace(/^#\//, "");
	const link = linksRoute[path];
	if (!link) return;
	currentActiveMenuLink.classList.remove('active');
	link.classList.add('active');
	currentActiveMenuLink = link;
})


navMenuMobile.addEventListener('click', event => event.target !== menu ? navbar.classList.toggle('active') : '');
menu.addEventListener('click', event => event.stopPropagation());

for (let i = 0; i < menu.children.length; i++) {
	menu.children[i].addEventListener('click', event => event.stopPropagation());
}

menuLinksActive.map((link) => {
	link.addEventListener('click', event => {
		e.stopPropagation();
	});
});

menuLinks.map((item) => item.addEventListener('click', event => {
	navbar.classList.remove('active')
}))

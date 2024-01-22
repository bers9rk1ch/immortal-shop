import { updateCatalog } from "./utils/updateCatalogOrBasket.js";
import { heroes } from "./db.js";

const selectInput = document.querySelector('.select-input input');
const selectList = document.querySelector('.select-list');
const selectRemove = document.querySelector('.close .m-icon');
let selectedHero = null;

const tovarFiltersContainer = document.querySelector('.remove-filters');
const tovarFilters = document.querySelector('.tovar-filters');
const tovarFilterMoney = document.querySelector('.tovar-filter-money');
window.totalPriceTovars = 0;


selectList?.addEventListener('mousedown', event => event.preventDefault());

selectRemove?.addEventListener('click', event => {
	selectedHero = null;
	selectInput.value = '';
	updateCatalog();
});

const updateSelectList = (value) => {
	selectList.innerHTML = ``;
	if (!value) return;
	heroes
		.filter((hero) => hero.toLowerCase().includes(value.toLowerCase()))
		.sort((wordA, wordB) => {
			if (wordA < wordB) return -1;
			if (wordA > wordB) return 1;
			return 0;
		})
		.map((hero) => {
			const heroElement = document.createElement('li');
			heroElement.innerText = hero;
			heroElement.addEventListener('click', event => {
				selectedHero = hero;
				selectInput.value = hero;
				selectInput.blur();
				selectList.innerHTML = ``;
				updateCatalog(hero);
			});
			selectList.appendChild(heroElement)
		})
}

selectInput?.addEventListener('input', event => {
	if (event.target.value === '') {
		return updateCatalog();
	}
	updateCatalog(event.target.value);
	updateSelectList(event.target.value);
});


tovarFilterMoney.addEventListener('click', event => {
	tovarFilterMoney.classList.toggle('active');
	updateCatalog(selectedHero || selectInput.value);
});

if (window.location.hash.replace(/^#\//, "") === '') tovarFiltersContainer.appendChild(tovarFilters);
else tovarFiltersContainer.removeChild(tovarFilters);
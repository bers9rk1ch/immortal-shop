import { tovars } from "./db.js";
import { getCatalog } from "./utils/updateCatalogOrBasket.js";

const totalItems = 18;

window.currentPage = 1;

const updateTextPaginationComponent = (page) => {
	[...document.querySelectorAll('.currentPage')].map((item) => {
		item.innerText = page;
	});
}

const showPage = (page, tovarsSort) => {

	const paginationButtonsPerPage = [...document.querySelectorAll('.pagination-container .perPage p')];
	const paginationButtonsNextPage = [...document.querySelectorAll('.pagination-container .nextPage p')];
	const totalPage = Math.ceil(tovarsSort.length / totalItems);

	page = page || 1;
	let startIndex = (page - 1) * totalItems;
	let endIndex = startIndex + totalItems - 1;
	window.currentPage = page;
	updateTextPaginationComponent(page);
	
	paginationButtonsNextPage.map((item) => {
		if (totalPage === 0 || window.currentPage === totalPage) {
			item.classList.add('disable')
		} else {
			item.classList.remove('disable')
		}
	})

	paginationButtonsPerPage.map((item) => {
		if (window.currentPage === 1) {
			item.classList.add('disable')
		} else {
			item.classList.remove('disable')
		}
		
	})
	return tovarsSort.filter((item, index) => (index >= startIndex) && (index <= endIndex))
}

const nextPage = (action) => {
	const heroName = document.querySelector('.select-input input')?.value;
	const tovarsSort = getCatalog(heroName);
	const totalPage = Math.ceil(tovarsSort.length / totalItems);
	if (totalPage === 1) return;
	const container = document.querySelector('.tovar-container');

	container.innerHTML = ``;
	if (window.currentPage != totalPage && action === '+') {
		window.currentPage++;
	} else if (window.currentPage != 1 && action === '-') {
		window.currentPage--;
	}

	updateTextPaginationComponent(window.currentPage);

	showPage(window.currentPage, tovarsSort).map((item) => container.appendChild(item))
}

const getPaginationComponent = () => {
	const paginationDiv = document.createElement('div');
	paginationDiv.classList = 'pagination';
	paginationDiv.innerHTML = `
		<div class="pagination-container">
			<div class="perPage">
				<p><</p>
			</div>
			<h1 class="currentPage">${window.currentPage}</h1>
			<div class="nextPage">
				<p>></p>
			</div>
		</div>
	`;
	[...paginationDiv.querySelectorAll('.nextPage')].map((item) =>
		item.addEventListener('click', event => !event.target.classList.contains('disable') ? nextPage('+') : '')
	);
	[...paginationDiv.querySelectorAll('.perPage')].map((item) =>
		item.addEventListener('click', event => !event.target.classList.contains('disable') ? nextPage('-') : '')
	);
	return paginationDiv;
}

export {showPage, getPaginationComponent, updateTextPaginationComponent}
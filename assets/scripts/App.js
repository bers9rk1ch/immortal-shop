import { tovars } from './db.js';
import { getOutlineStar } from './utils/getStarRating.js';
import { getPaginationComponent, showPage } from './pagination.js';
import { getReviews, reviewInit } from './reviews.js';
import { getBasket, getCatalog } from './utils/updateCatalogOrBasket.js';
import { getBasketItems } from './utils/getBasketItems.js';
import { openPaymentModal } from './paymentModal.js';

let basketLength = 0;
getBasketItems()["basket"].map(({count}) => {
	if (count > 0) return basketLength++;
})
document.querySelector('.basket-length').innerText = basketLength == 0 ? '' : basketLength;

const catalog = document.createElement('section');
catalog.classList = `catalog section`;
catalog.innerHTML = `
	<label class="label">
		<h1>Каталог</h1>
	</label>
	<div class="tovar">
		
	</div>
`;
const tovarContainer = document.createElement('div');
tovarContainer.classList = `tovar-container`;
catalog.querySelector('.tovar').append(tovarContainer);

const basket = document.createElement('section');
basket.classList = `basket section`;
basket.innerHTML = `
	<label class="label">
		<h1>Корзина</h1>
	</label>
	${basketLength !== 0 ? (
		`<div class="basket-container">
			<div class="tovar-container">
				
			</div>
			<div class="basket-totalPrice-container">
				<div class="basket-totalPrice">
					<div class="basket-totalPrice-info">
						<h1>
							Итоговая стоимость	
						</h1>
					</div>
					<div class="basket-totalPrice-buying">
						<span class="tovars-totalPrice"></span>
					</div>
				</div>
			</div>
		</div>`)
		:
		(`
		<div class="basketNull-container">
			<h1>Корзина пуста</h1>
			<a href="#/">Вернуться в магазин</a>
		</div>
		`)
	}
`;
const buttonBuyBasket = document.createElement('button');
buttonBuyBasket.innerText = 'Перейти к оплате';
buttonBuyBasket.addEventListener('click', event => {
	openPaymentModal();
});
basket.querySelector('.basket-totalPrice-buying')?.appendChild(buttonBuyBasket);

const reviewCount = JSON.parse(localStorage.getItem('reviews')).length;
const reviews = document.createElement('section');
reviews.classList = `feedback section`;
reviews.innerHTML = `
	<label class="label">
		<h1>Отзывы</h1>
	</label>
	<div class="addReview-container">
			<h1>Оставить отзыв</h1>
			<p class="error-review"></p>
			<form action="" class="addReview-form">
				<input required class="addReview-input" type="text" placeholder="Ваше имя">
				<div class="addReview-rate-container">
					<label>Ваша оценка</label>
					<div class="addReview-rate">
						${getOutlineStar().innerHTML.repeat(5)}
					</div>
				</div>
				<textarea class="addReview-textarea" cols="50" rows="5" placeholder="Напишите свои впечатления"></textarea>
			</form>
			<button class="addReview-button">Отправить</button>
		</div>
	<div class="reviews">
		<p class="totalReviews">Всего отзывов: ${reviewCount}</p>
		<div class="tovar-container"></div>
	</div>
`;

export const routes = {
	"": catalog,
	"feedback": reviews,
	"basket": basket,
	"error": basket,
};


const render = path => {
	
	const [hashPath, query] = path.replace(/^#\//, '').split('?');
	const app = document.querySelector("#app");
	catalog.querySelector('.tovar').innerHTML = '';
	catalog.querySelector('.tovar').append(tovarContainer);
	app.innerHTML = ``;
	app.appendChild(routes[hashPath] || window.location.hash.replace(/^#\//, ''));
	if (app.querySelector('.tovar')) {
		app.querySelector('.tovar').prepend(getPaginationComponent());
		app.querySelector('.tovar').append(getPaginationComponent());
	}
	
	const container = app.querySelector('.tovar-container');
	if (container) container.innerHTML = '';
	let catalogItems;
	if (hashPath === '') catalogItems = showPage(1, getCatalog());
	else if (hashPath === 'basket') catalogItems = getBasket();
	else if (hashPath === 'feedback') {
		catalogItems = getReviews();
		reviewInit();
	}
	if (catalogItems.length != 0 && container) {
		catalogItems.map((item) => {
			container.appendChild(item)
		})
	}

	const totalPrice = app.querySelector('.tovars-totalPrice');
	if (totalPrice) totalPrice.innerText = window.totalPriceTovars + '₽';
};

const tovarFiltersContainer = document.querySelector('.remove-filters');
const tovarFilters = document.querySelector('.tovar-filters');


document.addEventListener('DOMContentLoaded', event => {
	window.onhashchange = event => {
		window.scrollTo({
			top: 0,
			behavior: 'instant',
		});
		render(window.location.hash);
		try {
			if (window.location.hash.replace(/^#\//, "") === '') tovarFiltersContainer.appendChild(tovarFilters);
			else tovarFiltersContainer.removeChild(tovarFilters);
		} catch (error) {
			console.error(error)
		}
	}
	render(window.location.hash);
})
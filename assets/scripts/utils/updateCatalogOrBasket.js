import { tovars } from "./../db.js";
import { openModal } from "./openModal.js";
import { showPage } from "./../pagination.js";
import { toBasket, removeBasket } from "./updateOrRemoveBasket.js";
import { getBasketItems } from "./getBasketItems.js";

const getCatalog = (heroName) => {
	const tovarFilterMoney = document.querySelector('.tovar-filter-money')?.classList;
	const {basket} = getBasketItems();
	return tovars
		.filter(({hero}) => heroName ? hero === heroName || hero.toLowerCase().includes(heroName.toLowerCase()) : hero)
		.sort((a, b) => {
			const [letterA, letterB] = [a.hero.split(' ')[0].toLowerCase(), b.hero.split(' ')[0].toLowerCase()]
			if (letterA < letterB) return -1;
			if (letterA > letterB) return 1;
			return 0;
		})
		.sort((a, b) => 
			String(tovarFilterMoney).includes('active') ? a.price - b.price : b.price - a.price
		)
		.map(({title, price, id, img, rarity}) => {
			const tovar = document.createElement('div');
			tovar.classList = `tovar-item${rarity && rarity === 'Arcana' ? ' arcana': ''}${basket[id - 1].count != 0 ? ' onBasket': ''}`;
			tovar.style.cssText = `background: url(./assets/img/heroes/${img}) no-repeat center center / cover`;
			
			tovar.innerHTML = `
				<div class="item-img"></div>
				<div class="item-info">
					<div class="item-description">
						<h1>${title}</h1>
					</div>
					<div class="item-buy">
						<p>${price}₽</p>
						${basket[id - 1].count === 0 ? '<button class="btn-buy">В корзину</button>' : '<h1>Товар уже в корзине</h1>'}
					</div>	
				</div>
			`;
			basket[id - 1].count === 0 && (tovar.onclick = () => openModal(id));
			return tovar;
	});
}



const getBasket = () => {
	if (!localStorage.getItem('basket')) return;
	const basketStorage = JSON.parse(localStorage.getItem('basket')); //.sort((a, b) => Number(a) - Number(b))
	window.totalPriceTovars = 0;
	return basketStorage.filter(({count}) => Number(count) > 0).map(({id, count}) => {
		const {title, description, price, img} = tovars[Number(id) - 1];
		console.log(img);
		const tovar = document.createElement('div');
		tovar.classList = 'basket-item';
		tovar.innerHTML = `
			<div class="item-img"><div class="img" style="background: url(./assets/img/heroes/${img}) no-repeat center center / cover"></div></div>
			<div class="item-info">
				<div class="item-description">
					<label>Товар</label>
					<h1>${title}</h1>
					<p>${description}</p>
				</div>
				<div class="item-buy">
					<p>${price}₽</p>
					<div class="item-buy-buttons">
						<button class="add-to-basket">+</button>
						<div class="buy-input">${count}</div>
						<button class="remove-from-basket">-</button>
					</div>
				</div>	
			</div>
		`;
		tovar.querySelector('.add-to-basket').onclick = () => {
			toBasket(id, 1)
		}
		tovar.querySelector('.remove-from-basket').onclick = () => {
			removeBasket(id)
		}
		window.totalPriceTovars += price * count;
		return tovar;
	})
}

const notFound = document.createElement('div');
notFound.classList = 'catalog-notFound';
notFound.innerHTML = `
	<h1>Ничего не найдено</h1>
	<p>Попробуйте изменить фильтры</p>
`;

const updateCatalog = (heroName, page) => {
	const catalogElement = document.querySelector('.tovar-container');
	catalogElement.innerHTML = ``;
	const catalog = getCatalog(heroName);
	window.currentPage = 1;
	page = page || 1;
	
	showPage(page, catalog).map((item) => {
		catalogElement.appendChild(item)
	});
	if (catalog.length === 0) return catalogElement.append(notFound);
}

export {getBasket, getCatalog, updateCatalog}
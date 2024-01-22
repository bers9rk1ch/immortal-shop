import { tovars } from "../db.js";
import { toBasket } from "./updateOrRemoveBasket.js";

const openModal = (heroId) => {
	const modalContainer = document.querySelector('.modal-container');
	modalContainer.innerHTML = ``;
	if (!heroId) return;
	const modal = document.createElement('div');
	modal.classList = 'modal';
	modalContainer.classList.add('active');
	const {img, description, hero, price, title} = tovars[heroId-1];

	modal.innerHTML = `
		<span class="close-modal m-icon">close</span>
		<div class="item-img">
			<div class="img" style="background: url(./assets/img/heroes/${img}) no-repeat center center / cover"></div>
		</div>
		<div class="item-info-container">
			<div class="item-info">
				<label for="">Товар</label>
				<h1 class="title">${title}</h1>
				<p class="description">${description}</p>
			</div>
			<div class="item-buying">
				<p class="price">${price}₽</p>
				<button class="buy-button"></button>
			</div>
		</div>
	`;
	modalContainer.appendChild(modal);
	const button = modalContainer.querySelector('.buy-button');
	button.onclick = () => toBasket(heroId);
	modalContainer.querySelector('.close-modal').addEventListener('click', event => modalContainer.classList.remove('active'))
	modalContainer.addEventListener('click', event => modalContainer.classList.remove('active'))
	modal.addEventListener('click', event => event.stopPropagation())
}

export { openModal };
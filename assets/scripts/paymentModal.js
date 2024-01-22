import { getBasketItems } from "./utils/getBasketItems.js";

const paymentQuestions = [...document.querySelectorAll('.payment-questions li')];

const linkSteamInput = document.querySelector('.payment-buy-buttons input');
const buttonBuy = document.querySelector('.payment-buy-buttons button');
const errorBuy = document.querySelector('.payment-buy-error');

paymentQuestions.map((item) => {
	item.addEventListener('click', event => {
		item.classList.toggle('open');
	})
});

buttonBuy.addEventListener('click', event => {
	const steamLink = linkSteamInput.value;
	if (steamLink === '' || !steamLink.includes('https://steamcommunity.com/id/')) {
		linkSteamInput.focus();
		return errorBuy.innerText = 'Укажите ссылку на ваш стим профиль!*';

	}
	const modal = document.querySelector('.payment-modal');
	errorBuy.innerText = '';
	alert('нет');
	modal.classList.remove('active');
});

export const openPaymentModal = () => {
	const modalContainer = document.querySelector('.payment-modal_container');
	const modal = document.querySelector('.payment-modal');
	const closeButton = document.querySelector('.payment-modal_close-button');
	modal.classList.add('active');
	closeButton.addEventListener('click', event => modal.classList.remove('active'));
	modal.addEventListener('click', event => modal.classList.remove('active'));
	modalContainer.addEventListener('click', event => event.stopPropagation());

	const { length } = getBasketItems();

	const totalBasketPrice = document.querySelector('.totalBasketPrice');
	const totalBasketTovars = document.querySelector('.totalBasketTovars');

	totalBasketPrice.innerText = window.totalPriceTovars + '₽';
	totalBasketTovars.innerText = length;
}
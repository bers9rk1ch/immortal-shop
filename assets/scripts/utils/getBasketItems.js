import { tovars } from "./../db.js";

export const getBasketItems = () => {
	let basket = JSON.parse(localStorage.getItem('basket'));
	
	if (!JSON.parse(localStorage.getItem('basket')) || JSON.parse(localStorage.getItem('basket')).length < tovars.length) {
		const basketTovars = tovars.map(({id}) => {
			return {id: id, count: 0};
		})
		localStorage.setItem('basket', JSON.stringify(basketTovars));
		basket = basketTovars;
	}

	let totalCount = 0;
	basket.map(({count}) => {
		if (count > 0) return totalCount++;
	})

	return {length: totalCount, basket: basket};
}

getBasketItems();

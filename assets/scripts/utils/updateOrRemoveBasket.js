const toBasket = (newId, newCount) => {
	if (!newId) return;
	newCount = newCount || 1;
	const storage = JSON.parse(localStorage.getItem('basket'));
	const newStorage = [...storage];
	newStorage[newId - 1].count += newCount;
	localStorage.setItem('basket', JSON.stringify(newStorage));
	location.reload();
}
const removeBasket = (newId) => {
	if (!newId) return;
	const storage = JSON.parse(localStorage.getItem('basket'));
	const newStorage = [...storage];
	if (newStorage[newId - 1].count > 0) newStorage[newId - 1].count--;
	localStorage.setItem('basket', JSON.stringify(newStorage))
	location.reload();
}

export {toBasket, removeBasket};
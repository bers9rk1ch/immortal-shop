export const getFullCurrentDate = () => {
	const currentDate = new Date();
	const date = `${currentDate.getDay().toString().length === 1 ? '0' + currentDate.getDay().toString() : currentDate.getDay().toString()}:${currentDate.getMonth().toString().length === 1 ? '0' + currentDate.getMonth().toString() : currentDate.getMonth().toString()}:${currentDate.getFullYear()}`;
	const time = `${currentDate.getHours().toString().length === 1 ? '0' + currentDate.getHours().toString() : currentDate.getHours().toString()}:${currentDate.getMinutes().toString().length === 1 ? '0' + currentDate.getMinutes().toString() : currentDate.getMinutes().toString()}`;
	return {
		date: date,
		time: time,
		fullDate: `${date} ${time}`
	};
}
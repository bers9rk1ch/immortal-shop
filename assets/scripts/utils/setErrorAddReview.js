export const setErrorAddReview = (text) => {
	const error = document.querySelector('.error-review');
	error.innerText = text;
}
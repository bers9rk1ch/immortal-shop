import { getFullCurrentDate } from "./utils/getFullDate.js";
import { getFillStar, getOutlineStar } from "./utils/getStarRating.js";
import { setErrorAddReview } from "./utils/setErrorAddReview.js";
window.rating = 0;
if (!localStorage.getItem('reviews')) {
	localStorage.setItem('reviews', JSON.stringify([]))
}

const reviewContainer = JSON.parse(localStorage.getItem('reviews'));
if (reviewContainer.length === 0) localStorage.setItem('reviews', JSON.stringify([
	{
		id: 1,
		username: 'SEREGA PIRAT',
		text: 'быстро и четко',
		rating: 5,
		date: '20:03:2002 23:35'
	},
	{
		id: 2,
		username: 'vanyaPro2015',
		text: 'админ лох, а так пришло всё быстро',
		rating: 4,
		date: '20:03:2002 23:45'
	},
	{
		id: 3,
		username:
		'ESHKEREE',
		text: 'prishlo vsyo momentalno posle pokupki',
		rating: 5,
		date: '20:03:2002 23:55'
	}
]));

const avarageRatingSite = (reviewContainer.map((review) => review.rating).reduce((summ, curr) => summ + curr, 0) / reviewContainer.length).toFixed(1)

if (reviewContainer.length != 0) {
	const avarageReviewDiv = document.createElement('p');
	avarageReviewDiv.classList = 'ratingSite';
	avarageReviewDiv.innerHTML = `
		Нас оценивают на <span>${avarageRatingSite} ${getFillStar(30, 30).innerHTML}</span>
	`;
	document.querySelector('.footer-about').appendChild(avarageReviewDiv);
}


const getReviews = () => {
	return reviewContainer
		.sort((a, b) => 
			Number(a.id) - Number(b.id)
		)
		.map(({username, text, rating, date}) => {
			const review = document.createElement('div');
			review.classList = `review-item`;
			const starCount = [];
			for (let i = 0; i < rating; i++) {
				starCount.push(true);
			}
			if (rating != 5) {
				for (let i = 0; i < (5 - rating); i++) {
					starCount.push(false);
				}
			}
			review.innerHTML = `
				<div class="review-header">
					<time time="${date}" class="review-date">${date}</time>
					<h1>${username}</h1>
					
				</div>
				
				<div class="review-rating"></div>
				<p class="review-text">${text}</p>
			`;
			const ratingContainer = review.querySelector('.review-rating');
			starCount.map((isStar) => isStar ? ratingContainer.append(getFillStar()) : ratingContainer.append(getOutlineStar()));
			return review;
	});
}

const addReview = () => {
	const username = document.querySelector('.addReview-input').value;
	const text = document.querySelector('.addReview-textarea').value;
	const {fullDate} = getFullCurrentDate();
	
	if (username === '') return setErrorAddReview('Ваше имя не должно быть пустым!');
	if (window.rating === 0) return setErrorAddReview('Ваша оценка не можеть быть пустой!');
	if (username.length > 20) return setErrorAddReview('Имя не может быть больше 20 символов!');
	if (text.length > 700) return setErrorAddReview('Ваш отзыв не может быть длинее 700 символов!');
	const reviewsLocalStorage = [...JSON.parse(localStorage.getItem('reviews'))];
	const review = {
		id: reviewsLocalStorage[reviewsLocalStorage.length - 1].id + 1,
		username: username,
		text: text,
		rating: window.rating,
		date: fullDate
	};
	reviewsLocalStorage.push(review);
	localStorage.setItem('reviews', JSON.stringify(reviewsLocalStorage));
	location.reload();
}

const reviewInit = () => {
	const rateContainer = document.querySelectorAll('.addReview-rate');
	const rates = [...document.querySelectorAll('.addReview-rate svg')];
	rates.map((item, index) => {
		item.addEventListener('click', event => {
			const rating = [...document.querySelectorAll('.addReview-rate svg')];
			window.rating = index + 1;
			for (let i = 0; i < (index + 1); i++) {
				rating[i].innerHTML = getFillStar().children[0].innerHTML;
			}
			if ((index + 1) != 5) {
				for (let i = 3 - index; i >= 0; i--) {
					rating.reverse()[i].innerHTML = getOutlineStar().children[0].innerHTML;
					rating.reverse();
				}
			}
		});
	});

	const submitButton = document.querySelector('.addReview-button');
	submitButton.addEventListener('click', () => addReview());
}

export {getReviews, addReview, reviewInit}
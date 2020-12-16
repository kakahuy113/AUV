import { getSVGs, Loading } from "./utilities/util";
import Axios from "axios";
declare var Swiper:any;

// MAIN BANNER WEBSITE
const initMainBanner = () => {
	const namePage = document.querySelector('#js-page-verify');
	const mainBanner = document.querySelector('.main__banner');
	if (namePage.className == 'index-page') {
		mainBanner.classList.add('isIndex');
		return new Swiper('.main__banner .swiper-container', {
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			loop:true,
			speed: 1000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: '.main__banner .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
		});
	}
};

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
	initMainBanner();
});

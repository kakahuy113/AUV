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
const auv = new Swiper('.auv-section .swiper-container', {
	slidesPerView: 5,
	spaceBetween: 10,
	loop: true,
	speed: 800,
	autoplay: {
		delay: 1500,
	},
	breakpoints: {
		 320: { 
		slidesPerView: 2,
		spaceBetween: 20
	  },
	  // when window width is >= 480px
	  480: {
		slidesPerView: 3,
		spaceBetween: 30
	  },
	  // when window width is >= 640px
	  640: {
		slidesPerView: 5,
		spaceBetween: 40
	  }
	}
})
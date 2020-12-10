import { getSVGs, Loading } from "./utilities/util";
import Axios from "axios";
declare var Swiper:any;

document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
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
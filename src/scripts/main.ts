import { getSVGs, Loading } from "./utilities/util";
import Axios from "axios";
import Tab from './libraries/Tab';
declare var Swiper:any;
declare var $:any;
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

const ImagePopupabout = () => {

	$(".lib__page__img .item-gallery").on("click" , function() {
		const slides = $(this).find(".d-none")[0].innerHTML
		$(".gallery-top .swiper-wrapper").html(`${slides}`)
		$(".gallery-thumbs .swiper-wrapper").html(`${slides}`)
		$.fancybox.open({
			src: "#popup-img",
			type: "inline",
			opts : {
				afterShow : function( ) {
					var galleryThumbs = new Swiper('.gallery-thumbs', {
						spaceBetween: 10,
						slidesPerView: 3,
					
					  });
					  var galleryTop = new Swiper('.gallery-top', {
						spaceBetween: 10,
						navigation: {
						  nextEl: '.swiper-button-next',
						  prevEl: '.swiper-button-prev',
						},
						thumbs: {
						  swiper: galleryThumbs
						}
					  });
				}
			}
		})
		
	})

}
document.addEventListener("DOMContentLoaded", async () => {
	getSVGs(".svg");
	Loading();
	ImagePopupabout();
	const example = new Tab(".executive-committee .tab-container");

});


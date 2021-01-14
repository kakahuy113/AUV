import { getSVGs, Loading } from "./utilities/util";
import Tab from './libraries/Tab';
declare var Swiper:any;
declare var $:any;

//swiper slides auv
const auv = new Swiper('.auv-section .swiper-container', {
	slidesPerView: 5,
	spaceBetween: 10,
	loop: true,
	speed: 800,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
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
//popup image News&Events
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
const ImagePopugalley = () => {
	$(".main-galley .is-img").on("click" , function() {
		const slides = $(this).find(".d-none")[0].innerHTML
		$(".gallery-top .swiper-wrapper").html(`${slides}`)
		$(".gallery-thumbs .swiper-wrapper").html(`${slides}`)
		$.fancybox.open({
			src: "#popup-imgs",
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
//drop line 
const dropLine = () => {
	document.querySelectorAll(".block-vote .title p").forEach(item => {
		const text = item.outerHTML;
		const newText = text.replace("." , "</br>");
		item.outerHTML = newText
	})
	
	document.querySelectorAll(".block--button-catalog .item a").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(".");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})

	document.querySelectorAll(".item-vote figcaption h5").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(",");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})
	document.querySelectorAll(".index-earth .item-left").forEach(item => {
		const text = item.outerHTML;
		const splitText = text.split(",");
		const newText = splitText.join("</br>");
		item.outerHTML = newText
	})
	
}

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
	ImagePopupabout();
	ImagePopugalley();
	const example = new Tab(".executive-committee .tab-container");
});


$(function(){


    $('.slider__window').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
        
     });

});

//Menu

const iconMenu = document.querySelector('.header_burger');
const menuBody = document.querySelector('.header__menu');
const sliderTitle = document.querySelector('.slider__title')
const sliderDesc = document.querySelector('.slider__description') 

if (iconMenu) {
	iconMenu.addEventListener('click', function (e) {
		document.body.classList.toggle('lock');
        /* sliderTitle.style.display = 'none'
        sliderDesc.style.display = 'none' */
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	})
}
//Menu
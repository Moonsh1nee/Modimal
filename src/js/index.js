import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    690: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    // when window width is >= 640px
    780: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();


import accordion from './modules/accordion.js';
accordion();
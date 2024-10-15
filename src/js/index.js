import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});










// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
mobileNav();

const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 3,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1000: {
      slidesPerView: 4
    },
    1300: {
      slidesPerView: 5
    }
  }
});
const swiperProekt = new Swiper('.proekt__swiper', {

  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,

  pagination: {
    el: '.proekt__pagination',
    type: 'bullets',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: ".proekt__link"
  },
});

const swiperStaff = new Swiper('.staff__swiper', {

  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,
  autoHeight: true,

  pagination: {
    el: '.staff__pagination',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: ".staff__link"
  },
});

const swiperOffers = new Swiper('.offers__swiper', {

  direction: 'horizontal',
  loop: true,
  slideToClickedSlide: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: ".offers__link"
  },
});



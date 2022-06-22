const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  lazy: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});




const swiper2 = new Swiper('.swiper2', {
  direction: 'horizontal',
  loop: true,
  lazy: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


const swiper3 = new Swiper('.swiper3', {
  direction: 'horizontal',
  loop: true,
  lazy: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

const swiper4 = new Swiper('.swiper4', {
  slidesPerView: 2,
  spaceBetween: 1,
  loop: true,
  lazy: true,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper5 = new Swiper('.swiper5', {
  slidesPerView: 3,
  spaceBetween: 1,
  loop: true,
  lazy: true,
  freeMode: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
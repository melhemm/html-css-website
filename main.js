// Swiper

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  spaceBetween: 1,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }
});

new Glide('.glide', {
  type: 'carousel',
  startAt: 1,
  perView: 1,
  autoplay: 3000
}).mount();


AOS.init({
  offset: 150,
  duration: 1000
});
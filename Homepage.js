// scrolling book code
// css mode code
var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 15,
    // cssMode: true,
    grabCursor: 'true',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: 'true',
    },
    mousewheel: true,
    keyboard: true,
    });
document.addEventListener("DOMContentLoaded", function () {

    const slider1 = new Swiper('#slider1',{
        slidesPerView: 1,
          spaceBetween: 25,
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            }
          },
        //   freeMode: true,
        // //   centeredSlides: true,
        navigation: {
            nextEl: '.slider-nav-next',
            prevEl: '.slider-nav-prev',
          },
    }) 
})
    
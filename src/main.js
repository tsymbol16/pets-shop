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
    const btnOpen = document.querySelector('.menu-open');
		const containerMobile = document.querySelector('.container-mobile');
    const header = document.querySelector('.header-container');
    const body = document.querySelector('body');
    const menuRoster = document.querySelector('.menu-roster')
		const openMenu = function(e) {
			e.preventDefault();
			containerMobile.classList.toggle('active');
			btnOpen.classList.toggle('active');
      header.classList.toggle('active');
      body.classList.toggle('active');
      menuRoster.classList.toggle('active');

		}
		btnOpen.addEventListener('click', openMenu);

    containerMobile.addEventListener('click', function(e){
      console.log(e.target)
      if(e.target.classList.contains('menu-mobile')) {
        openMenu(e);
      } 
    })

    // const closeMenu = function(e) {
		// 	e.preventDefault();
		// 	menu.classList.toggle('active');
		// 	btnOpen.classList.toggle('active');
	
		// }
		// btnClose.addEventListener('click', closeMenu);
})
    
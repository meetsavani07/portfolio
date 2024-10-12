var swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove:false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: false,
        shadowOffset: 200,
        shadowScale: 1.94,
    },
    mousewheel:true
});
swiper.sliderMove = function (s, e) {
    console.log(s)
}
    function Navigate(indx) {
        for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink")
        Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink")
        swiper.slideTo(indx, 1000, true)// ----------------------- Scroll Reveal ---------------------------------
ScrollReveal({
    reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content h3, .heading, .serviceheading, .portfolioheading', { origin: 'top' });
ScrollReveal().reveal('.home-image, #service-box2, #portfolio-box2, .social-media, .btn, #cfb',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .about p, #portfolio-box1, #service-box1, #cfl', {origin: 'left'});
ScrollReveal().reveal('.home p, .about h1, #portfolio-box3, #service-box3, #cfr' , {origin: 'rigth'});

    }


// ----------------------- Typed Js ---------------------------------
const typed = new Typed('.multiple-text', {
    strings: ['Web Design','Web Development','Graphic Designer'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
});

// ----------------------- Scroll Section Active Link ---------------------------------
let swiperSlide = document.querySelectorAll('swiper-slide');
let navLinks = document.querySelectorAll('header Links ul li a')
window.onscroll = () => {
    swiperSlide.forEach(sec => {
        let top = window.scrollX;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header Links ul li a[href*=' + id + ']').classList.add('active');
            });
        }; 
    });
}

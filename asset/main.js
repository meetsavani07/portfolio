var swiper = new Swiper(".swiper", {
    effect: "flip",
    allowTouchMove:false,
    grabCursor: false,
    flipEffect: {
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
        swiper.slideTo(indx, 1000, true)
}

// ----------------------- Typed Js ---------------------------------
const typed = new Typed('.multiple-text', {
    strings: ['Web Designer','Graphic Designer','Web Developer','Tester'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
});

// ----------------------- Scroll Section Active Link ---------------------------------
let swiperSlides = document.querySelectorAll('.swiper-slide');  // Selecting all swiper slides
let navLinks = document.querySelectorAll('.header ul.Links li a');  // Selecting nav links
window.addEventListener('scroll', () => {
    swiperSlides.forEach((sec) => {
        let scrollPos = window.scrollY;
        let offsetTop = sec.offsetTop - 150;
        let sectionHeight = sec.offsetHeight;
        let sectionId = sec.getAttribute('id');

        if (scrollPos >= offsetTop && scrollPos < offsetTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.parentNode.classList.remove('activeLink');  // Remove 'activeLink' from all
                document.querySelector(`.header ul.Links li a[href*="${sectionId}"]`).parentNode.classList.add('activeLink');  // Add 'activeLink' to the current link
            });
        }
    });
});


function toggleMenu() {
    const links = document.querySelector('.Links');
    links.classList.toggle('active'); // Toggle the active class
}
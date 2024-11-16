// Toggle Menu for Mobile View
let menuIcon = document.querySelector('#toggle-button');
let navBar = document.querySelector('.Links');  // Fix the class selector

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Add or remove bx-x (close icon)
    navBar.classList.toggle('active'); // Show or hide the navbar
}


// Swiper Initialization
var swiper = new Swiper(".swiper", {
    effect: "flip",
    allowTouchMove: false,
    grabCursor: false,
    flipEffect: {
        shadow: true,
        slideShadows: false,
        shadowOffset: 200,
        shadowScale: 1.94,
    },
    mousewheel: true
});

// Navigation function to change slide on clicking the menu link
function Navigate(indx) {
    for (let i of document.querySelectorAll(".Links li")) i.classList.remove("activeLink");
    Array.from(document.querySelectorAll(".Links li"))[indx].classList.add("activeLink");
    swiper.slideTo(indx, 1000, true);
}

// ----------------------- Typed Js ---------------------------------
const typed = new Typed('.multiple-text', {
    strings: ['Web Designer', 'Graphic Designer', 'Web Developer', 'Tester'],
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
                // Fix the querySelector to correctly target the active link
                const activeLink = document.querySelector(`.header ul.Links li a[href*="${sectionId}"]`);
                if (activeLink) {
                    activeLink.parentNode.classList.add('activeLink');  // Add 'activeLink' to the current link
                }
            });
        }
    });
});

// Toggle menu visibility for mobile view


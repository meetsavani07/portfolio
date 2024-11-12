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
    strings: ['Web Designer','Web Developer','Graphic Designer','Tester'],
    typeSpeed: 150,
    backSpeed: 150,
    backDelay: 1000,
    loop: true
});

// ----------------------- Scroll Section Active Link ---------------------------------
let swiperSlide = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')
window.onscroll = () => {
    swiperSlide.forEach(sec => {
        let right = window.scrollY;
        let offset = sec.offsetLeft - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(right >= offset && right < offset + heigth) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }; 
    });
}

document.addEventListener('keydown', function(event) {
    // Check which key is pressed
    switch(event.key) {
        case 'ArrowUp':
            window.scrollBy(0, -100); // Scroll up by 100 pixels
            break;
        case 'ArrowDown':
            window.scrollBy(0, 100); // Scroll down by 100 pixels
            break;
        case 'ArrowLeft':
            window.scrollBy(-100, 0); // Scroll left by 100 pixels
            break;
        case 'ArrowRight':
            window.scrollBy(100, 0); // Scroll right by 100 pixels
            break;
    }
});

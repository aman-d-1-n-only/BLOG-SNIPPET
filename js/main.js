const toggleCollapse = document.querySelector('.toggle-collapse .toggle-icons');
const nav = document.querySelector('.nav');
const responsive = {
    0: {
        items: 1
    },
    570: {
        items: 2
    },
    960: {
        items: 3
    }

}

toggleCollapse.onclick = () => (
    nav.classList.toggle("collapse")
)

$(document).ready(function() {

    //Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    //click to scroll to top
    $('.move-up span').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    })

    //AOS Instance
    AOS.init();
});
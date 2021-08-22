window.onscroll = function () {
    let swiper = document.getElementById("swipeUp");
    if (window.scrollY > 0) {
        // swiper.style.transform = "translate(1000px, 100px)";
        swiper.style.top = `calc(50vh - ${window.scrollY * 10}px)`;
    } else {
        swiper.scrollTo(0, 0);
        swiper.style.top = "50vh";
    }
};

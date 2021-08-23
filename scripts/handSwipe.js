window.onscroll = function () {
    let swiper = document.getElementById("swipeUp");
    if (window.scrollY > 0) {
        //this amplifies the scroll speed of the hand swipe element so that it is quickly removed from the viewport when scrolling begins
        swiper.style.top = `calc(50vh - ${window.scrollY * 15}px)`;
    } else {
        swiper.scrollTo(0, 0);
        swiper.style.top = "50vh";
    }
};

window.onload = function () {
    if (window.innerWidth <= 600) {
        let swiper = document.getElementById("swipeUp");
        swiper.style.display = "inline";
    }
};

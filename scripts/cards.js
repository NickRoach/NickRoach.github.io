//when the page is resized, reload it. This is so that the scrolltrigger stuff is reset
//Do this only if the screen size is over 600. This is to avoid reloads occuring because of the address bar changing size on mobile browsers

window.onresize = function () {
    if (screen.width > 600) {
        location.reload();
    }
};

//The two following functions are necessary because if the page loads and scrolls immediately to a particular point, then display elements may not load. These functions save scroll position in session storage on page unload, and then restore it with a smooth scroll motion when the user returns to the page.

window.onunload = function () {
    sessionStorage.setItem("scrollPosition", window.scrollY);

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
    });
};

window.onload = function () {
    startSwiper();
    let scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
        setTimeout(function () {
            window.scrollTo({
                top: scrollPosition,
                left: 0,
                behavior: "smooth",
            });
        }, 50);
    }
};

//Everything below here is related to the scroll triggering of display elements using GSAP scrollTrigger
//The instantiation of the scrollTrigger object occurs in wormhole.js

let percent = 0;
let number = 7;
let inc = 100 / (number * 2);
let cardHeight;
let cardWidth;

function scrollToCard(index) {
    let totalDocHeight = document.documentElement.scrollHeight;
    let pixelAddress = (totalDocHeight / inc) * index;
    window.scrollTo({
        top: pixelAddress + 200,
        left: 0,
        behavior: "smooth",
    });
}

//48 is for the navbar and 6 was to display a border that is no longer present
cardHeight = Math.max(
    document.documentElement.clientHeight - 48 - 6,
    window.innerHeight - 48 - 6 || 0
);

cardWidth = Math.max(
    document.documentElement.clientWidth - 6,
    window.innerWidth - 6 || 0
);

let expandedCardHeight = "300%";
let expandedCardWidth = "300%";

//fade out intro
gsap.fromTo(
    ".intro",
    {
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            // markers: true,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: expandedCardWidth,
        height: expandedCardHeight,
        opacity: 0,
        x: "-50%",
        // y: "-40%",
    }
);

//fade in chemist
gsap.from(".chemist", {
    width: 0,
    height: 0,
    opacity: 0,
    x: "-50%",
    y: "-50%",
});

gsap.fromTo(
    ".chemist",
    {
        width: 0,
        height: 0,
        opacity: 0,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            // markers: true,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    }
);

gsap.fromTo(
    ".chemist",
    {
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            // markers: true,
            // scrub: true,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: expandedCardWidth,
        height: expandedCardHeight,
        opacity: 0,
        ease: "power2.in",
        x: "-50%",
        y: "-50%",
    }
);

//fade in skills
gsap.from(".skills", {
    width: 0,
    height: 0,
    opacity: 0,
    x: "-50%",
    y: "-50%",
});

gsap.fromTo(
    ".skills",
    {
        width: 0,
        height: 0,
        opacity: 0,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    }
);

gsap.fromTo(
    ".skills",
    {
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            // markers: true,
            // scrub: true,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: expandedCardWidth,
        height: expandedCardHeight,
        opacity: 0,
        x: "-50%",
        y: "-50%",
    }
);

//fade in projects
gsap.from(".project1", {
    width: 0,
    height: 0,
    opacity: 0,
    x: "-50%",
    y: "-50%",
});

gsap.fromTo(
    ".project1",
    {
        width: 0,
        height: 0,
        opacity: 0,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    }
);

gsap.fromTo(
    ".project1",
    {
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            // markers: true,
            // scrub: true,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: expandedCardWidth,
        height: expandedCardHeight,
        opacity: 0,
        // ease: "power2.in",
        x: "-50%",
        y: "-50%",
    }
);

//fade in projects
gsap.from(".project2", {
    width: 0,
    height: 0,
    opacity: 0,
    x: "-50%",
    y: "-50%",
});

gsap.fromTo(
    ".project2",
    {
        width: 0,
        height: 0,
        opacity: 0,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    }
);

gsap.fromTo(
    ".project2",
    {
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            // markers: true,
            // scrub: true,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: expandedCardWidth,
        height: expandedCardHeight,
        opacity: 0,
        // ease: "power2.in",
        x: "-50%",
        y: "-50%",
    }
);

//fade in projects
gsap.from(".project3", {
    width: 0,
    height: 0,
    opacity: 0,
    x: "-50%",
    y: "-50%",
});

gsap.fromTo(
    ".project3",
    {
        width: 0,
        height: 0,
        opacity: 0,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    }
);

gsap.fromTo(
    ".project3",
    {
        width: cardWidth,
        height: cardHeight,
        opacity: 1,
        x: "-50%",
        y: "-50%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: `${(percent += inc)}% top`,
            // markers: true,
            // scrub: true,
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: expandedCardWidth,
        height: expandedCardHeight,
        opacity: 0,
        // ease: "power2.in",
        x: "-50%",
        y: "-50%",
    }
);

//fade in contact
gsap.from(".contact", {
    width: 0,
    height: 0,
    opacity: 0,
    x: "-50%",
    y: "-50%",
});

gsap.fromTo(
    ".contact",
    {
        width: 0,
        height: 0,
        opacity: 0,
        x: "-50%",
        y: "-26%",
    },
    {
        scrollTrigger: {
            trigger: ".scrollTarget",
            start: "99% bottom",
            toggleActions: "restart reverse reverse reverse",
        },
        duration: 0.3,
        width: 600,
        height: 600,
        opacity: 1,
        x: "-50%",
        y: "-50%",
        // y: +24,
    }
);

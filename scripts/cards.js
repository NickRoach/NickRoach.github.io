let percent = 0;
let number = 7;
let inc = 100 / (number * 2);

let cardHeight = Math.max(
    document.documentElement.clientHeight - 48 - 6,
    window.innerHeight - 48 - 6 || 0
);

let cardWidth = Math.max(
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
        width: 400,
        height: 400,
        opacity: 1,
        x: "-50%",
        y: "-55%",
        // y: +24,
    }
);

function scrollToPoint(amount) {
    let pixels = amount * 100;
    window.scrollTo({
        top: pixels,
        left: 0,
        behavior: "smooth",
    });
}

function scrollToPoint(pixels) {
    window.scrollTo({
        top: pixels,
        left: 0,
        behavior: "smooth",
    });
}

// let percent = 0;
// let number = 7;
// let inc = 100 / (number * 2);

function scrollToCard(index) {
    let totalDocHeight = document.documentElement.scrollHeight;
    let pixelAddress = (totalDocHeight / inc) * index * 1.1;
    window.scrollTo({
        top: pixelAddress,
        left: 0,
        behavior: "smooth",
    });
}

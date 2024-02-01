// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,

// })

function loader() {
    let tl = gsap.timeline()
    tl.to(".firstScreen", {
        y: -1000,
        delay: 0.2,
        duration: 0.5,

    })
    tl.to(":root", {
        '--bgc': 'transparent',
    })
    tl.to("#page1 .back .page1bgc", {
        y: 0,
        duration: 0.2,
        // delay: 0.2,

    })
    gsap.to(":root", {
        '--color': 'black',
        duration: 0.1,
        delay: 1,
    })
    gsap.to("#page1 .back video", {
        display: 'none',
        delay: 0.5,
    })
}
loader();



// menubar start
var count = true;
window.addEventListener("scroll", function () {
    var scrollValue = window.scrollY;
    console.log("Scroll Value: " + scrollValue);

    if (scrollValue > 5) {
        count = false;
    } else {
        count = true;
    }

    updateStyles();
});

document.querySelector("nav .menu i").addEventListener("click", function () {
    count = !count;
    updateStyles();
});

function updateStyles() {
    if (count) {
        document.querySelector("nav .menu i").style.transform = "rotate(0deg)";
        document.querySelectorAll("#page1 nav .menu .elems .move").forEach((e) => {
            e.style.transform = "translateX(0%)"
        });
        document.querySelector("#page1 nav .menu .elems .smove1").style.transform = "translateX(0%)"
        document.querySelector("#page1 nav .menu .elems .smove2").style.transform = "translateX(0%)"
        document.querySelector("#page1 nav .menu .elems .smove3").style.transform = "translateX(0%)"
        document.querySelector("#page1 nav .menu .elems .smove4").style.transform = "translateX(0%)"
    } else {
        document.querySelector("nav .menu i").style.transform = "rotate(225deg)";
        document.querySelectorAll("#page1 nav .menu .elems .move").forEach((e) => {
            e.style.transform = "translateX(100%)"
        });
        document.querySelector("#page1 nav .menu .elems .smove1").style.transform = "translateX(130%)"
        document.querySelector("#page1 nav .menu .elems .smove2").style.transform = "translateX(230%)"
        document.querySelector("#page1 nav .menu .elems .smove3").style.transform = "translateX(330%)"
        document.querySelector("#page1 nav .menu .elems .smove4").style.transform = "translateX(250%)"
    }
}
// menubar end



function backgroundImageAnimation() {
    let bgi = document.querySelectorAll("#page2 .container2 .text-container");

    bgi.forEach(function (e) {
        e.addEventListener("mouseover", function () {
            var bgimg = e.getAttribute("data-img")
            document.querySelector("#page2").style.backgroundImage = `url(${bgimg})`
        })
    })
}
backgroundImageAnimation();

gsap.from("#page3 .back", {
    scrollTrigger: {
        trigger: "#page3 .back",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
        delay: 1,
        // markers: true,
    },
    stagger: 0.3,
    y: 50,
    opacity: 0
});


var backToTopBtn = document.querySelector("#page1 .front .hero-footer i");
backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 700; // For Safari
    document.documentElement.scrollTop = 700; // For Chrome, Firefox, IE and Opera
});

var backToTopBtn = document.querySelector(".btn");
backToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});


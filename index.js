/* Mobile Navigation */

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.hamburger');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});

gsap.registerPlugin(ScrollTrigger);

const descriptors = ['I\'m Chris Cho.']

gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
});

let heroTl = gsap.timeline()
    .from('.hey', {
        y: "-=50",
        opacity: 0,
        duration: 1,
    })
    .to('.text', {
    duration: 2,
    text: descriptors[0]
    })

let cursor = gsap.to('.cursor', {
    opacity: 0,
    duration: .7,
    ease: "power2.inOut",
    repeat: -1
});

let description = gsap.to('.hero-description', {
    alpha: 0.5,
    duration: 1,
    ease: "none",
    yoyo: true,
    repeat: -1
})

gsap.from(".hero-wrapper", {
    scrollTrigger: {
        trigger: ".hero-wrapper",
        start:"top 70%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
    },
    duration: .5, 
    y: "-=50", 
    opacity: 0
})

// let aboutTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".about-wrapper",
//         start: "top 70%",
//         end: "bottom 10%",
//         toggleActions: "play reverse play reverse",
//     }
// })
//     .from(".about-title", {
//         stagger: 0.1,
//         duration: .25,
//         y: "-=50",
//         opacity: 0
//     })
//     .from(".html", {
//         duration: .25,
//         y: "-=50",
//         opacity: 0
//     })
//     .from(".css", {
//         duration: .25,
//         y: "-=50",
//         opacity: 0
//     })
//     .from(".js", {
//         duration: .25,
//         y: "-=50",
//         opacity: 0
//     })
//     .from(".react", {
//         duration: .25,
//         y: "-=50",
//         opacity: 0
//     })
//     .from(".auto-description", {
//         duration: .2,
//         y: "-=50",
//         opacity: 0
//     })
//     .from(".selfie", {
//         duration: .2,
//         y: "-=50",
//         opacity: 0
//     })

gsap.from(".about-animation", {
    scrollTrigger: {
        trigger: ".about-wrapper",
        start:"top 60%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: "-=50",
    stagger: 0.1 
});

let projectTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".portfolio-wrapper",
        start: "top 100%",
        end: "bottom top",
        toggleActions: "play reverse play reverse"
    }
})
    .from(".portfolio-title", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })


gsap.defaults({ease: "power3"});
gsap.set(".grid-item", {y: 50});

ScrollTrigger.batch(".grid-item", {
    onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 3]}, overwrite: true}),
    onLeave: batch => gsap.set(batch, {opacity: 0, y: -100, overwrite: true}),
    onEnterBack: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: 0.15, overwrite: true}),
    onLeaveBack: batch => gsap.set(batch, {opacity: 0, y: 100, overwrite: true})
});
    
ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".grid-item", {y: 0}));

let contact = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-title",
        start: "top 70%",
        end: "bottom top",
        toggleActions: "play reverse play reverse"
    }
})
    .from(".contact-title", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })
    .from(".contact-description", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })
    .from(".contact-form", {
        duration: 1,
        rotation: 10,
        yoyo: true,
        y: "-=50",
        ease: "bounce",
        opacity: 0
    })
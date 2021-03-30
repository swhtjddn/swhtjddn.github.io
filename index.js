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

/* Animations */

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


let arrowTimeline = gsap.timeline(
    { repeat: -1, yoyo: true })
    .from('.down-animate', {duration: .5, alpha: .5, y: "-=5", ease: "power2.out"})
    .to('.down-animate', {duration: .1, rotate: 10, ease: "power2.out"})
    .to('.down-animate', {duration: .1, alpha: 1, rotate: -10, ease: "power2.out"})

gsap.from(".about-animation", {
    scrollTrigger: {
        trigger: ".about-wrapper",
        start:"top 60%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    x: "-=50",
    stagger: 0.10 
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
        x: "+=50",
        opacity: 0
    })


gsap.defaults({ease: "power3"});
gsap.set(".grid-item", {y: 100, opacity: 0});

ScrollTrigger.batch(".grid-item", {
    start: "top bottom-=100px",
    onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: .15}),
    onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 100})
});
    

let contact = gsap.timeline({
    scrollTrigger: {
        trigger: ".contact-title",
        start: "top 100%",
        end: "bottom top",
        toggleActions: "play reverse play reverse"
    }
})
    .from(".contact-title", {
        duration: .15,
        y: "-=50",
        opacity: 0
    })
    .from(".contact-description", {
        duration: .15,
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
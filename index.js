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

gsap.from(".hero-wrapper", {
    scrollTrigger: {
        trigger: ".hero-wrapper",
        start:"top 70%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse"
    },
    duration: .5, 
    y: "-=50", 
    opacity: 0
})

let aboutTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-title",
        start: "top 70%",
        end: "bottom 10%",
        toggleActions: "play reverse play reverse"
    }
})
    .from(".about-title", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })
    .from(".html", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })
    .from(".css", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })
    .from(".js", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })
    .from(".react", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })
    .from(".auto-description", {
        duration: .2,
        y: "-=50",
        opacity: 0
    })
    .from(".selfie", {
        duration: .2,
        y: "-=50",
        opacity: 0
    })

let projectTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".portfolio-grid",
        start: "top 70%",
        end: "bottom top",
        toggleActions: "play reverse play reverse"
    }
})
    .from(".portfolio-title", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })
    .from(".portfolio-grid", {
        duration: .25,
        y: "-=50",
        opacity: 0
    })

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
        rotation: 20,
        yoyo: true,
        y: "-=50",
        ease: "bounce",
        opacity: 0
    })
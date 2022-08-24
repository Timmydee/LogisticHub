const navId = document.getElementById("nav-links")
const toggleMenu = document.getElementById("toggle-btn")
const closeMenu = document.getElementById("close-btn")

toggleMenu.addEventListener('click',() => {
    navId.style.right = "0"
})

closeMenu.addEventListener('click',() => {
    navId.style.right = "-100%"
})

// Animate on scroll
AOS.init();

// GSAP ANIMATION
gsap.from(".logo", {
    opacity: 0,
    y: -10,
    delay: 1,
    duration: 0.5,
    stagger: 0.3,
});

// TOGGLE BTN
gsap.from(".toggle-btn",{
    opacity: 0,
    y: -10,
    delay: 2.4,
    duration: 1,
});

// TEAM IMAGE
gsap.from(".why-us-img",{
    opacity: 0,
    y: 20,
    delay: 3,
    duration: 10,
});


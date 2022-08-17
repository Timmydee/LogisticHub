const navId = document.getElementById("nav-links")
const toggleMenu = document.getElementById("toggle-btn")
const closeMenu = document.getElementById("close-btn")

toggleMenu.addEventListener('click',() => {
    navId.style.right = "0"
})

closeMenu.addEventListener('click',() => {
    navId.style.right = "-100%"
})
const navId = document.getElementById("nav-links")
const toggleMenu = document.getElementById("toggle-btn")
const closeMenu = document.getElementById("close-btn")
const enterBtn = document.getElementById('enter')
const paymentBar = document.getElementById('payment-col2')
const line = document.getElementById('op-line')

toggleMenu.addEventListener('click',() => {
    navId.style.right = "0"
})

closeMenu.addEventListener('click',() => {
    navId.style.right = "-100%"
})

enterBtn.addEventListener('click', function(){
    paymentBar.style.display = "flex"
    line.style.display = "block"
})

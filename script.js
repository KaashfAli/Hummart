const navbar_toggle = document.querySelector('.click-menubtn');

const toggle_btn = document.querySelector('.navbar-toggle');
toggle_btn.addEventListener("click",()=>{
    navbar_toggle.classList.toggle('active');
})

const side_bar = document.querySelector('.side');
// For opening side bar
const cart_icon = document.querySelector('.cart');
cart_icon.addEventListener("click",()=>{
    // side_bar.display.style='block';
    side_bar.classList.toggle('sideclick');
})
const menucart_icon = document.querySelector('.menucart');
menucart_icon.addEventListener("click",()=>{
    // side_bar.display.style='block';
    side_bar.classList.toggle('sideclick');
})
// For closing side bar
const cross_icon = document.querySelector('.cross');
cross_icon.addEventListener("click",()=>{
    // side_bar.display.style='block';
    side_bar.classList.toggle('sideclick');
})
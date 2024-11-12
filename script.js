const navbar_toggle = document.querySelector('.click-menubtn');

 const toggle_btn = document.querySelector('.navbar-toggle');
 toggle_btn.addEventListener("click",()=>{
    navbar_toggle.classList.toggle('active');
})
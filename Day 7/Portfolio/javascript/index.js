navUl = document.querySelector(".right-side-nav");
burger = document.querySelector(".ham-burger");
burger.addEventListener("click", function() {
    navUl.classList.toggle('active');
    burger.classList.toggle('ham-open')
});
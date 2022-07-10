navUl = document.querySelector(".right-side-nav");
burger = document.querySelector(".ham-burger");
burger.addEventListener("click", function () {
    navUl.classList.toggle('active');
    burger.classList.toggle('ham-open')
});

// Contact page button

document.getElementById("contact-btn").addEventListener("click", function () {
    location.href = "https://sunny-64.github.io/100-Days-Of-Web-Development/Day%207/Portfolio/html/contact.html";
}); 
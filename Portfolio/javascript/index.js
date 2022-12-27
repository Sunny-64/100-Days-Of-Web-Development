navUl = document.querySelector(".right-side-nav");
burger = document.querySelector(".ham-burger");
burger.addEventListener("click", function () {
    navUl.classList.toggle('active');
    burger.classList.toggle('ham-open')
});

// Contact page button

// document.getElementById("contact-btn").addEventListener("click", function () {
//     location.href = "https://sunny-64.github.io/100-Days-Of-Web-Development/Day%207/Portfolio/html/contact.html";
// }); 

let cards = document.querySelectorAll(".card");
let viewProjects = document.querySelectorAll(".view-project"); 

// cards.addEventListener("mouseover",()=>{
//     document.querySelector(".view-project").style.opacity = "1"; 
//     document.querySelector(".view-project").style.transform = "scale(1)"; 
// })

cards.forEach((card, index) =>{
    card.addEventListener("mouseover", ()=>{      
        viewProjects[index].style.opacity = "1"; 
        viewProjects[index].style.transform = "scale(1)";
    })
})
cards.forEach((card, index) =>{
    card.addEventListener("mouseout", ()=>{      
        viewProjects[index].style.opacity = "0"; 
        viewProjects[index].style.transform = "scale(0.5)";
    })
})


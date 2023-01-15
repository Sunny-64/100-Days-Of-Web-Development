navUl = document.querySelector(".right-side-nav");
burger = document.querySelector(".ham-burger");
burger.addEventListener("click", function () {
    navUl.classList.toggle('active');
    burger.classList.toggle('ham-open')
});


let cards = document.querySelectorAll(".card");
let viewProjects = document.querySelectorAll(".view-project"); 

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


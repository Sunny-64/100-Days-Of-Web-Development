// Highlights the Active Link
const currentLocation = location.href; 
const menuItem = document.querySelectorAll(".nav-items"); 
const menuLength = menuItem.length; 
for(let i = 0; i<menuLength; i++){
    if(menuItem[i] == currentLocation){
        menuItem[i].classList.add("active"); 
    }
}









// page is reloading so it's not working. So this only works for front End.

// let navButtons = document.querySelectorAll(".nav-items"); 
// navButtons.forEach(button => {
//     button.addEventListener("click", () =>{
//         navButtons.forEach(btn =>{btn.classList.remove("active")}); 
//         this.classList.add("active"); 
//     });
// });



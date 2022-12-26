setTimeout(()=>{
    let loader = document.querySelector(".pre-loader");
    loader.style.display = "none";
},1000)


setInterval(() => {

    let date = new Date(); 
    let htime = date.getHours(); 
    let mtime = date.getMinutes(); 
    let stime = date.getSeconds(); 

    let hrotations = 30*htime + mtime/2; 
    let mrotations = 6 * mtime; 
    let srotations = 6 * stime; 

    
    hours.style.transform = `rotate(${hrotations}deg)`; 
    minutes.style.transform = `rotate(${mrotations}deg)`; 
    seconds.style.transform = `rotate(${srotations}deg)`; 
}, 1000);

// window.addEventListener("load", ()=>{
//     let loader = document.querySelector(".pre-loader");
//     loader.style.display = "none"; 
// })
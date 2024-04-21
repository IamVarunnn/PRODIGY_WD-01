


 

let menuBtn = document.querySelector("#menu-btn");
let navLink = document.querySelector("#nav-lin");

const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLink.classList.toggle("open");

    const isOpen = navLink.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});


navLink.addEventListener("click",(e)=>{
    navLink.classList.remove("open")
    menuBtnIcon.setAttribute("class","ri-menu-line");
})

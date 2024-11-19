let menuBar = document.querySelector(".icons");
let navBar = document.querySelector(".navbar");
menuBar.addEventListener("click", ()=>{
    navBar.classList.toggle("hide");
})

let home = document.querySelector(".home");
let about = document.querySelector(".abt");
let experience = document.querySelector(".exp");
let project = document.querySelector(".pjt");
let contacts = document.querySelector(".cnt");
let main = document.querySelector(".main");
let aboutt = document.querySelector(".about");
let experience2 = document.querySelector(".myexperience");
let projectt = document.querySelector(".projects");
let contactt = document.querySelector(".contact");
let button = document.querySelector(".btn");

button.addEventListener("click",()=>{
    contactt.style.display="block";
    experience2.style.display="none"
    aboutt.style.display="none"
    main.style.display =" none";
    projectt.style.display="none"
   
})

home.addEventListener("click", () =>{
    aboutt.style.display="block"
    main.style.display ="flex"
    experience2.style.display="block"
    projectt.style.display="block"
    contactt.style.display="block"
})

about.addEventListener("click", () =>{
    aboutt.style.display="block"
    main.style.display ="none"
    experience2.style.display="none"
    projectt.style.display="none"
    contactt.style.display="none"
})

experience.addEventListener("click", () =>{
    experience2.style.display="block"
    main.style.display ="none"
    aboutt.style.display="none"
    projectt.style.display="none"
    contactt.style.display="none"
})

project.addEventListener("click", () =>{
    main.style.display ="none"
    experience2.style.display="none"
    projectt.style.display="block"
    contactt.style.display="none"
    aboutt.style.display="none"
})

contacts.addEventListener("click", () =>{
    experience2.style.display="none"
    main.style.display ="none"
    aboutt.style.display="none"
    projectt.style.display="none"
    contactt.style.display="block"
})



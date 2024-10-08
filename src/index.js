import "./styles.css";
import home from "./home";
import about from "./about";
import menu from "./menu";
import contact from "./contact";

//Buttons
const homeButton = document.getElementById("home-page-logo");
const aboutButton = document.getElementById("about-btn");
const menuButton = document.getElementById("menu-btn");
const contactButton = document.getElementById("contact-btn");

const mainContent = document.getElementById("main");

homeButton.addEventListener("click", ()=>{
    mainContent.innerHTML = "";
    mainContent.appendChild(home());
});

aboutButton.addEventListener("click", ()=>{
    mainContent.innerHTML = "";
    mainContent.appendChild(about());
});

menuButton.addEventListener("click", ()=>{
    mainContent.innerHTML = "";
    mainContent.appendChild(menu());
});

contactButton.addEventListener("click", ()=> {
    mainContent.innerHTML = "";
    mainContent.appendChild(contact());
})

window.onload = ()=> mainContent.appendChild(home()); 
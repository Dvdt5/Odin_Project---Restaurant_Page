import "./styles.css";
import home from "./home";
import about from "./about";

//Buttons
const homeButton = document.getElementById("home-page-logo");
const aboutButton = document.getElementById("about-btn");

const mainContent = document.getElementById("main");

homeButton.addEventListener("click", ()=>{
    mainContent.innerHTML = "";
    mainContent.appendChild(home());
});

aboutButton.addEventListener("click", ()=>{
    mainContent.innerHTML = "";
    mainContent.appendChild(about());
});

window.onload = ()=> mainContent.appendChild(home()); ;
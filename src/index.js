import "./styles.css";
import home from "./home";

const homeButton = document.getElementById("home-page-logo");
const mainContent = document.getElementById("main");

homeButton.addEventListener("click", ()=>{
    mainContent.innerHTML = "";
    mainContent.appendChild(home()); 
});

window.onload = ()=> mainContent.appendChild(home()); ;
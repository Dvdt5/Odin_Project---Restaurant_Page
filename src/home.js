

export default function home () {
    const homeHeaderText = document.createElement("p");
    homeHeaderText.id = "head-text-home";
    homeHeaderText.innerHTML = "DeepLake Restaurant <br><br><span>World's Best Seafood Restaurant</span>";
    homeHeaderText.classList.add("fadeAnimation");
    homeHeaderText.classList.add("non-selectable");
    return homeHeaderText;
}
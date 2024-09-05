

export default function about() {
    const aboutGrid = document.createElement("div");
    const aboutTextSection = document.createElement("div"); 
    const aboutHeaderText = document.createElement("p");
    const aboutContentText = document.createElement("p");
    const aboutImg = document.createElement("div");

    aboutGrid.id = "about-grid";
    aboutTextSection.id = "about-text";
    aboutHeaderText.id = "about-header-text";
    aboutContentText.id = "about-content-text";
    aboutImg.id = "about-img";

    aboutHeaderText.innerText = "DeepLake Seafood Restaurant";
    aboutContentText.innerText = "DeepLake Restaurant is a seafood restaurant that offers a quintessential dining experience for seafood enthusiasts. With its charming nautical decor and panoramic views of the sparkling harbor, the restaurant creates an inviting atmosphere that celebrates the best of coastal cuisine. DeepLake Restaurant prides itself on sourcing the freshest catch of the day, from succulent lobster and tender scallops to delicately grilled fish and briny oysters. Each dish is prepared with a blend of traditional techniques and modern flair, ensuring a delightful culinary journey with every visit. The warm, knowledgeable staff and the restaurant’s commitment to sustainability and quality make DeepLake Restaurant a beloved destination for both locals and visitors seeking a memorable seafood feast.";

    aboutTextSection.appendChild(aboutHeaderText);
    aboutTextSection.appendChild(aboutContentText);
    aboutGrid.appendChild(aboutTextSection);
    aboutGrid.appendChild(aboutImg);

    aboutGrid.classList.add("fadeAnimation");
    return aboutGrid;
}
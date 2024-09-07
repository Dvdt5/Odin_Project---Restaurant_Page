

export default function menu () {
    const menuContent = [
        {
            name: "Fish and Chips",
            content: "Classic dish of the British Isles, consisting of battered and deep-fried fish, usually cod or haddock, and french fries.",
            price: "5$"
        },
        {
            name: "Fish Tacos",
            content: "The prototypical fish taco originated in Baja California, Mexico, and the preparation referred to in this country as “Baja-style” is similar to what you might find on the Mexican peninsula.",
            price: "10$"
        },
        {
            name: "Grilled salmon tacos with avocado salsa",
            content: "Crispy tortillas are layered with crunchy cabbage slaw, tender grilled salmon, creamy avocado salsa, and creamy cotija cheese for an explosion of flavors that help you meet all of your diet and protein goals!",
            price: "15$"
        },
        {
            name: "Baked sea bass with lemon caper dressing",
            content: "This elegant, gluten-free main is special enough for a dinner party, yet simple and quick to make for no fuss entertaining.",
            price: "20$"
        }

    ];

    const gridMenu = document.createElement("div");
    gridMenu.id = "menu-grid";
    gridMenu.classList.add("fadeAnimation");

    menuContent.forEach(({name,content,price})=>{
        const dishCard = document.createElement("div");
        const dishCardName = document.createElement("p");
        const dishCardContent = document.createElement("p");
        const dishCardPrice = document.createElement("p");

        dishCard.classList.add("dish-card");
        dishCardName.classList.add("dish-card-header");
        dishCardContent.classList.add("dish-card-content");
        dishCardPrice.classList.add("dish-price");

        dishCardName.innerText = name;
        dishCardContent.innerText = content;
        dishCardPrice.innerText = price;

        dishCard.appendChild(dishCardName);
        dishCard.appendChild(dishCardContent);
        dishCard.appendChild(dishCardPrice);

        gridMenu.appendChild(dishCard);
    });

    return gridMenu;
}
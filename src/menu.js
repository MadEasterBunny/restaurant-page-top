import menuItemImg from "./menu-item.png"
import { PageContent } from "./page";

let menuHTML = "<h2>Menu</h2><div>";

const menuItems = [
    {
        name: "Margherita",
        description: "Tomato sauce, mozzaerlla, and oregano",
        price: 8,
        img: menuItemImg,
    },
    {
        name: "Quattro Stagioni",
        description: "Tomato sauce, mozzaerlla, mushrooms, ham, artichokes, olives, and oregano",
        price: 10,
        img: menuItemImg,
    },
    {
        name: "Diavola",
        description: "Tomato sauce, mozzaerlla, spicy salami, and chili pepper",
        price: 9,
        img: menuItemImg,
    },
    {
        name: "Parmigiana",
        description: "Tomato sauce, mozzaerlla, eggplant, and parmasan flakes",
        price: 9,
        img: menuItemImg,
    },
    {
        name: "Frutti Di Mare",
        description: "Tomato sauce, and seafood",
        price: 10,
        img: menuItemImg,
    },
];

menuItems.forEach(item => {
    menuHTML += `<div class="menu-item">
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>${item.description}</p>
    <p>$${item.price}</p>
    </div>`;
});

menuHTML += "</div>"
 
export const menuContent = new PageContent("menu", menuHTML).render();
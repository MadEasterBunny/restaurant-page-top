import "./styles.css";
import { homeContent } from "./home";
import { menuContent } from "./menu";
import { contactContent } from "./contact";

const nav = document.querySelector("nav");
const container = document.querySelector("#content");

const pages = {
    home: homeContent,
    menu: menuContent,
    contact: contactContent,
};

const contentGenerator = (page) => {
    container.replaceChildren();
    container.appendChild(page());
}

nav.addEventListener("click", (e) => {
    const buttonId = e.target.id;
    for(const key in pages) {
        if(buttonId === key) {
            contentGenerator(pages[key]);
        }
    }
});

contentGenerator(pages.home);
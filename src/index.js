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
    container.appendChild(page);
}

const updateNavState = (buttonText, target) => {
    const currActiveBtn = nav.querySelector(".active");
    const newActiveElement = Array.from(nav.children).find(child => {
        return child.textContent.toLowerCase().trim() === buttonText;
    });

    if(currActiveBtn) {
        currActiveBtn.classList.remove("active");
    }
    
    if (newActiveElement) {
        newActiveElement.classList.add("active");
    } else {
        target.classList.add("active");
    }
}

const renderPageContent = (key, pages) => {
    if(pages[key]) {
        contentGenerator(pages[key]);
    }
}

const handleClick = e => {
    const target = e.target;
    const buttonText = target.textContent.toLowerCase();
    updateNavState(buttonText, target);
    renderPageContent(buttonText, pages);
}

contentGenerator(pages.home);
nav.children[0].classList.add("active");

const homeBtns = document.querySelector("#homeBtns");
nav.addEventListener("click", handleClick);
homeBtns.addEventListener("click", handleClick);
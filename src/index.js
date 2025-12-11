import "./styles.css";
import { homeContent } from "./home";
import { menuContent } from "./menu";
import { contactContent } from "./contact";

class GenerateContent {
    constructor(page) {
        this.nav = document.querySelector("nav");
        this.container = document.querySelector("#content");
        this.page = page;
        this.render(page);
        this.bindEvents();
    }
    
    render(page) {
        this.container.replaceChildren();
        this.container.appendChild(page());
    }

    bindEvents() {
        this.nav.addEventListener("click", (e) => {
            const buttonId = e.target.id;
            if(buttonId === "home") {
                this.page = homeContent;
            } else if (buttonId === "menu") {
                this.page = menuContent;
            } else {
                this.page = contactContent;
            }
            this.render(this.page);
        })
    }

}

const page = new GenerateContent(homeContent);
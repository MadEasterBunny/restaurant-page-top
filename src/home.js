import { PageContent } from "./page";

const homeHTML = `
    <h1>The best pizza around</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <div id="homeBtns">
    <button>Menu</button>
    <button>Contact</button>
    </div>`;

export const homeContent = new PageContent(homeHTML).render();
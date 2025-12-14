import { PageContent } from "./page";

const contactHTML = `
<h2>Contact</h2>
<p>Phone: 555-5555-5555</p>
<p>Email: pizzasite@pizzasite.com</p>`;
export const contactContent = new PageContent("contact", contactHTML).render();
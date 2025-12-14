import { PageContent } from "./page";

//Add an object that contains the menu item content (name, description, price, image)

const menuHTML = `<h1>Menu</h1>`; //Add logic to make it so that the above object gets run through and displays all items
export const menuContent = new PageContent(menuHTML).render();
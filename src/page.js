export class PageContent {
    constructor(content) {
        this.content = content;
    }

    render() {
        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = this.content;
        return container;
    }
}
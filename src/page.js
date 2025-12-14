export class PageContent {
    constructor(contentClass, content) {
        this.contentClass = contentClass;
        this.content = content;
    }

    render() {
        const container = document.createElement("div");
        container.classList.add("container", this.contentClass);
        container.innerHTML = this.content;
        return container;
    }
}
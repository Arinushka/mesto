export class Section {
    constructor(renderer, cardContainerElement) {
        this._renderer = renderer;
        this._container = document.querySelector(cardContainerElement);
    }
    render(items) {
        items.forEach(item => {
            this._renderer(item)
        });
    }

    addItem(element) {
        this._container.prepend(element);
    }

    setItem(element) {
        this._container.append(element);
    }

}
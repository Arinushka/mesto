export class Section {
    constructor({ items, renderer }, cardContainerElement) {
        this._addItems = items;
        this._renderer = renderer;
        this._container = document.querySelector(cardContainerElement);
    }
    render() {
        this._addItems.forEach(item => {
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
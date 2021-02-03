export class Section {
    constructor({ items, renderer }, cardContainerElement) {
        this._addItems = items;
        this._renderer = renderer;
        this._container = document.querySelector('.gallery');
    }

    addItem() {
        this._addItems.forEach(item => {
            this._renderer(item)
        });
    }

    setItem(element) {
        this._container.append(element);
    }

}
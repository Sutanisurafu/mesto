
export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }


  rendererItems() {
   this._items.forEach(title => {
    this._renderer(title)
   })
  }

  addItem(item)  {
  this._container.prepend(item)
  }

}
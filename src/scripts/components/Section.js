
export default class Section {
  constructor({renderer}, containerSelector) {

    this._renderer = renderer;
    this._container = containerSelector;
  }


  rendererItems(cards) {
   cards.forEach(cardEl => {
    this._renderer(cardEl)

   })
  }

  addItem(item)  {
  this._container.prepend(item)
  }

}
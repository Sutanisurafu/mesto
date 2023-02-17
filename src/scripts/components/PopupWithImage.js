import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._link = this._popup.querySelector('.popup__image-item');
    this._place = this._popup.querySelector('.popup__image-caption')
  

  }



  open(place, link) {
    this._place.textContent = place;
    this._link.alt = place;
    this._link.src = link;
    super.open();

  }
}
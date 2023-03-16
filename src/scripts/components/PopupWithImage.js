import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._link = this._popup.querySelector('.popup__image-item');
    this._place = this._popup.querySelector('.popup__image-caption')
  }

  open(cardInfo) {
    this._place.textContent = cardInfo.place;
    this._link.alt = cardInfo.place;
    this._link.src = cardInfo.link;
    super.open();

  }
}
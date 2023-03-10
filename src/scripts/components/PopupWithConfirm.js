import Popup from './Popup.js'
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, cardFunctions) {
    this._popup = popupSelector;
    this._handleDeleteCard = cardFunctions.handleDeleteCard;
  }

  setEventListeners() {
    super.setEventListeners();


    }
}

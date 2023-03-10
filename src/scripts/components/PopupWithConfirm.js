import Popup from './Popup.js'
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, callBack) {
    super(popupSelector);
    this._callBack = callBack;
    this._submitBtn = this._popup.querySelector('.popup__submit-btn')
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitBtn.addEventListener('click', () => {
      this._callBack();
      this.close();
    })
    }

    open(card) {
      super.open();
      this._cardId = card._cardId;
      this._card = card;   
    }

  }
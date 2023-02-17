export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._ESC = '27';
  }

  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.keyCode == this._ESC) {
      this.close();
  }
}



setEventListeners() {
  document.addEventListener('keydown', this._handleEscClose);
  this._popup.addEventListener('click', (e) => {
    if (e.target.classList.contains('popup_opened') ||
    e.target.classList.contains('popup__close')){
      this.close();
      }
   })
  }
 

 
}


import Popup from './Popup.js'
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, callBack) {
    super(popupSelector);

    this._callBack = callBack;
    this._callBackData = null;
    this._submitBtn = this._popup.querySelector('.popup__submit-btn')
  }

  setEventListeners() {
    super.setEventListeners();
    this._submitBtn.addEventListener('click', () => {
      this.renderLoading(true);
      if(this._callBackData) {
        this._callBack(this._callBackData);

      } 
    })
    }

    open(callBackData) {
      super.open();
      this._callBackData = callBackData;  
    }

    renderLoading(isLoading) {
      if(isLoading) {
        this._submitBtn.textContent = "Загрузка..."
      } else {
        this._submitBtn.textContent = "Да"
      }
    }
  }
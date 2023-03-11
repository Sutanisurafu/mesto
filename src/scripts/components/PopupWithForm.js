import Popup from './Popup.js'
export default class PopupWithForm extends Popup {
  constructor({popupSelector, callBack}) {
    super(popupSelector);
    this._callBack = callBack;
    this._form = popupSelector.querySelector('.popup__form');
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
    this._submitButton = this._form.querySelector('.popup__submit-btn')
  }

  _getInputValues () {
   this._values = {};
    this._inputs.forEach(input => {
      this._values[input.name] = input.value;   
    })
    return this._values;  
  }

renderInputValues  (info) {
  this._inputs.forEach(input => {
    input.value = info[input.id];
    
  })
  
}


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (e) =>{ 
      e.preventDefault(); 
      this._callBack(this._getInputValues());
      this.close();
    })
  }


  close() {
    super.close();
    this._form.reset();

  }
}
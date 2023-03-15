export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
    
  }

  enableValidation() {
    this._toggleButtonState();
    const fieldSet = this._formElement.offsetParent
    this._setEventListeners();
  };

   _setEventListeners() {
      this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
        this._toggleButtonState();
      });
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._toggleButtonState();
          this._checkInputValidity(inputElement);
        })
      })
    }

    _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
      } else {
        this._hideInputError(inputElement);
      }
    };

    _showInputError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`)
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = inputElement.validationMessage;
      errorElement.classList.add(this._config.errorClass);
    };

    _hideInputError = (inputElement) => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`)
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
    };

    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    }); 
    }

    _toggleButtonState() {
      if (this._hasInvalidInput(this._inputList) === true) {
        this._buttonElement.setAttribute("disabled", "disabled");
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
      } else {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.removeAttribute("disabled");
      }
    }
 }


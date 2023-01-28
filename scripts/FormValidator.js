class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    this._buttonElement = formElement.querySelector(config.submitButtonSelector);
    
  }

  enableValidation(formElement, config) {
    this._toggleButtonState();
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._toggleButtonState();
    });
    const fieldSet = formElement.offsetParent
    this._setEventListeners(fieldSet, config);
  };

   _setEventListeners() {
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
          this._toggleButtonState();
          this._checkInputValidity(inputElement);
        })
      })
    }

    _checkInputValidity = (inputElement, config, formElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(config, formElement, inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(config, formElement, inputElement);
      }
    };

    _showInputError = (config, formElement, inputElement, errorMessage) => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.add(this._config.inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.errorClass);
    };

    _hideInputError = (config, formElement, inputElement) => {
      const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
      inputElement.classList.remove(this._config.inputErrorClass);
      errorElement.classList.remove(this._config.errorClass);
      errorElement.textContent = '';
    };

    _hasInvalidInput(inputList) {
      return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    }); 
    }

    _toggleButtonState(config, inputList, buttonElement) {
      if (this._hasInvalidInput(this._inputList) === true) {
        this._buttonElement.setAttribute("disabled", "disabled");
        this._buttonElement.classList.add(this._config.inactiveButtonClass);
      } else {
        this._buttonElement.classList.remove(this._config.inactiveButtonClass);
        this._buttonElement.removeAttribute("disabled");
      }
    }
 }

export {FormValidator};
import { openPopup, closePopup } from './index2.js'

class Card {
  constructor(place, link) { 
    this._link = link;
    this._place = place;
  }

  _getTemplate() {
    const template = document.querySelector('#cards-template').content
    .querySelector('.card').cloneNode(true);
    return template;
  }

  _setEventListeners =() => {
    popupAddCardForm.addEventListener('submit', this._handleCardSubmit);
  }
  
  _handleCardSubmit = (event) => {
    event.preventDefault();
    closePopup(popupAddCard);
    cardPlace.value = '';
    cardLink.value = '';
  }

  createInitialCard = (_place, _link) => {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__image');
    this._likeBtn = this._card.querySelector('.like-btn');
    this._deleteBtn = this._card.querySelector('.trash-btn');
    this._card.querySelector('.card__title').textContent = this._place;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._place;
    
    //функция добавления данных в попап картинки
    this._cardImage.addEventListener('click', () => { 
      openPopup(imagePopup);
      imagePopupItem.src = this._card.querySelector('.card__image').src
      imagePopupItem.alt = this._place;
      imagePopupCaption.textContent = this._card.querySelector('.card__title').textContent
    })
    //удаление карточки
    this._deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      this._card.remove();
    })
    //лайк карточки
    this._likeBtn.addEventListener('click', (event) => {
        const target = event.target
        target.classList.toggle('like-btn_active');
    });
   
    return this._card;
  } 
}

  export { Card };
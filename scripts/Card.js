import { templateElement, imagePopupItem, imagePopup, imagePopupCaption} from './constants.js'
import { openPopup, closePopup,} from './index.js'


class Card {
  constructor(place, link) { 
    this._link = link;
    this._place = place;

  }

  createInitialCard = () => {
    this._card = this._getTemplate();
    this._cardImage = this._card.querySelector('.card__image');
    this._likeBtn = this._card.querySelector('.like-btn');
    this._deleteBtn = this._card.querySelector('.trash-btn');
    this._card.querySelector('.card__title').textContent = this._place;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._place;
    this._deleteCard();
    this._toggleLike();
    this._handleImageClick();
    return this._card;
  } 
  _toggleLike() {
    this._likeBtn.addEventListener('click', (event) => {
      const target = event.target
      target.classList.toggle('like-btn_active');
  });
  }

  _deleteCard() {
    this._deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      this._card.remove();
    })
  }

  _handleImageClick() {
    this._cardImage.addEventListener('click', () => { 
      openPopup(imagePopup);
      imagePopupItem.src = this._link
      imagePopupItem.alt = this._place;
      imagePopupCaption.textContent = this._card.querySelector('.card__title').textContent
    })
  }

  _getTemplate() {
    const template = templateElement.content
    .querySelector('.card').cloneNode(true);
    return template;
  }
}

  export { Card };
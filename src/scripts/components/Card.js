
export default class Card {
  constructor(place, link, templateElement, handleCardClick) { 
    this._link = link;
    this._place = place;
    this._templateElement = templateElement;
    this._handleCardClick = handleCardClick;
  }

  createInitialCard = () => {
    this._card = this._getTemplate(); 
    this._cardImage = this._card.querySelector('.card__image');
    this._likeBtn = this._card.querySelector('.like-btn');
    this._deleteBtn = this._card.querySelector('.trash-btn');
    this._card.querySelector('.card__title').textContent = this._place;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._place;
    this._setEVentListeners();
    return this._card;
  } 

  

  _setEVentListeners() {
    this._likeBtn.addEventListener('click', (event) => {
      this._toggleLike(event)
    });
    this._deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      this._deleteCard(event)
    })
    this._cardImage.addEventListener('click', () => { 
      this._handleCardClick();
    })
  }
  
  _deleteCard(event) {  
      this._card.remove();
  }


  _getTemplate() { 
    const template = this._templateElement.content 
    .querySelector('.card').cloneNode(true); 
    return template; 
  } 

 
  _toggleLike(event) {
    const target = event.target
    target.classList.toggle('like-btn_active');
}
}


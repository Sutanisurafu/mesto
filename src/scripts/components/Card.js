
export default class Card {
  constructor(cardInfo, templateElement, functionsData, userId) { 
    this._card = cardInfo;
    this._cardId = cardInfo._id;
    this._ownerId = cardInfo.owner._id;
    this._templateElement = templateElement;
    this._handleCardClick = functionsData.handleCardClick;
    this._handleDeleteBtnClick = functionsData.handleDeleteBtnClick;
    this._handleCardAddLike = functionsData.handleCardAddLike;
    this._handleCardDeleteLike = functionsData.handleCardDeleteLike;
    this._place = cardInfo.name;
    this._link = cardInfo.link;
    this._userId = userId;
    this._likes = cardInfo.likes;
  }


  createInitialCard = () => {  
    this._card = this._getTemplate(); 
    this._cardImage = this._card.querySelector('.card__image');
    this._likeBtn = this._card.querySelector('.response-container__like-btn');
    this._deleteBtn = this._card.querySelector('.trash-btn');
    this._likesCounter = this._card.querySelector('.response-container__like-counter')
    this._card.querySelector('.card__title').textContent = this._place;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._place;
    this._likesCounter.textContent = this._likes.length;

    this._myLikes = this._likes.find(e => e._id === this._userId);

    this._setEVentListeners();
  // проверка id пользователя для добавления иконки удаления
    if (this._ownerId === this._userId) {
      this._deleteBtn.classList.add('trash-btn_type_visible')
    }
    this._checkLike()

    return this._card;
  } 


  //проверяет есть ли 
  _checkLike() {
    if(this._myLikes) {
      this._likeBtn.classList.add('response-container__like-btn_active')
    } else {
      this._likeBtn.classList.remove('response-container__like-btn_active');
        }
  }

  _checkLiked(event) {
    if(event.target.classList.contains('response-container__like-btn_active')) {
      this._likeFunction = this._handleCardDeleteLike;
      } else  {
        this._likeFunction = this._handleCardAddLike;
      }
    }

  _setEVentListeners() {
    this._likeBtn.addEventListener('click', (event) => {
      this._checkLiked(event)  
      this._toggleLike(event)
    });
    this._deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      this._handleDeleteBtnClick();
    })
    this._cardImage.addEventListener('click', () => { 
      this._handleCardClick();
    })
  }
  
  deleteCard() {  
      this._card.remove();
  }

  _getTemplate() { 
    const template = this._templateElement.content 
    .querySelector('.card').cloneNode(true); 
    return template; 
  } 

  _toggleLike(event) {
    this._likeFunction();
    const target = event.target
    target.classList.toggle('response-container__like-btn_active');

  }
}


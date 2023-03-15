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
    this._userId = userId.userId;
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

    this._isLiked = this._likes.some(e => e._id === this._userId);

    this._setEVentListeners();
  // проверка id пользователя для добавления иконки удаления
    if (this._ownerId === this._userId) {
      this._deleteBtn.classList.add('trash-btn_type_visible')
    }
    if (this._isLiked) {
      this._likeBtn.classList.add('response-container__like-btn_active')
    }

    return this._card;
  } 

  //работает с датой сз колбека , обновляет массив лайков и меняет цвет кнопки
  checkLike(likes) {
    if(this._isLiked) {
      this._isLiked = likes.some(e => e._id === this._userId);
      this._setCounter(likes)
      this._likeBtn.classList.remove('response-container__like-btn_active');
    } else {
      this._isLiked = likes.some(e => e._id === this._userId);
      this._setCounter(likes)
      this._likeBtn.classList.add('response-container__like-btn_active')
        }
  }

  //обновляет счетчик лайков из даты с сервера
  _setCounter(likes){
    this._likesCounter.textContent = likes.length;
  }

//проверяет стоит ли мой лайк, если стоит  то вызывает удалитель лайка
  _checkLiked() {
    if(this._isLiked) {
      this._handleCardDeleteLike(this.checkLike);
      } else  {
      this._handleCardAddLike();

      }
    }

    //слушательСобытий
  _setEVentListeners() {
    this._likeBtn.addEventListener('click', (event) => {
      this._checkLiked();
    });
    this._deleteBtn.addEventListener('click', (event) => {
      event.stopPropagation();
      this._handleDeleteBtnClick();
    })
    this._cardImage.addEventListener('click', () => { 
      this._handleCardClick();
    })
  }
  //удаляет карту
  deleteCard() {  
      this._card.remove();
      this._card = null;
  }

  //возвращает
  _getTemplate() { 
    const template = this._templateElement.content 
    .querySelector('.card').cloneNode(true); 
    return template; 
  } 

}


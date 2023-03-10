import './index.css';
import Card  from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/utils/FormValidator';
import {initialCards, validationConfig, profileEditButton, popupEditProfile,
         profileName, profileSpeciality,popupProfileAddButton, popupAddCard,
         popupAddCardForm, popupAddProfileForm, imagePopup, cardsContainer,
         templateElement, popupConfirm} 
  from '../scripts/utils/constants.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithConfirm from '../scripts/components/PopupWithConfirm.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js'


const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-60",
  headers: {
      authorization: "82fce0f5-7c53-446f-a999-07e7ad879d1f",
      "Content-Type": "application/json",
  },
})


let userId;


Promise.all([api.getUserInfo(), api.getCards()])
.then(([userData, cardsData]) => {
 profileInfo.setUserInfo(userData);
 userId = userData._id;
 const cardsSection = new Section({
      items: cardsData.reverse(),
      renderer: (cardInfo) => {
        const card = createCard(cardInfo,
        templateElement, cardFunctions,
        userId); 
        cardsSection.addItem(card);
      }
    }, cardsContainer)
    //отрисовываю карты на странице
    cardsSection.rendererItems();
    //слушатель событий для кнопки добавления карточки
    //создаю объект попапа добавления карточки
const popupCardAdd = new PopupWithForm({
  popupSelector: popupAddCard,
  callBack: (cardInfo) => {
    api.addCard(cardInfo)
    .then((cardData) => {
      const card = createCard(cardData,
        templateElement, cardFunctions,
        userId);
        cardsSection.addItem(card);
    })
  }

})
popupProfileAddButton.addEventListener('click', () => {
  popupCardAdd.open();
})
popupCardAdd.setEventListeners();
  })


//объект функций для работы с карточками
const cardFunctions = {
  handleCardClick: function () {
    popupCardImg.open(this._place, this._link);
  },
  handleDeleteBtnClick: function (event) {
    popupDeleteCard.open();
    // api.deleteCard(this._cardId)
  },
  handleCardAddLike: function () {
    api.addLike(this._cardId)
  },
  handleCardDeleteLike: function () {
    api.deleteLike(this._cardId)
  }
}


//Функция открытия картинки по нажатию на неё
function handleCardClick() {
  popupCardImg.open(this._place, this._link);
}

//создаю объект попапа с картинкой 
const popupCardImg = new PopupWithImage(imagePopup);
popupCardImg.setEventListeners();
 
//создаю объект информации о пользователе 
const profileInfo = new UserInfo(
    {profile: profileName,
     speciality: profileSpeciality}
)

//функция создания отдельной карточки
function createCard(cardInfo, templateElement, cardFunctions, userId) {
  const card = new Card(cardInfo, templateElement, cardFunctions, userId);
  const cardItem = card.createInitialCard();
  return cardItem;
}

//создаю объект попапа редактирования профиля
const popupProfileEdit = new PopupWithForm({
  popupSelector: popupEditProfile,
  callBack: (data) => {
    profileInfo.setUserInfo(data)
    api.editUserInfo(data);
    return profileInfo;
    }
  }
)

popupProfileEdit.setEventListeners();


//создаю объект валидации попапа редактирования профиля
const profileValidation = new FormValidator(validationConfig, popupAddProfileForm);
profileValidation.enableValidation();

//создаю объект валидации попапа добавления карточки
const cardValidation = new FormValidator(validationConfig, popupAddCardForm);
cardValidation.enableValidation();

//слушатель событий для кнопки редактирования профиля
profileEditButton.addEventListener('click', () => {
  popupProfileEdit.renderInputValues(profileInfo.getUserInfo())
  popupProfileEdit.open();
});

//слушатель событий для 

//функция удаления карточки 









import './index.css';
import Card  from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/utils/FormValidator';
import {initialCards, validationConfig, profileEditButton, popupEditProfile,
         profileName, profileSpeciality,popupProfileAddButton, popupAddCard,
         popupAddCardForm, popupAddProfileForm, imagePopup, cardsContainer,
         templateElement} 
  from '../scripts/utils/constants.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
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




//загружаю данные пользователя с сервера
api.getUserInfo()
.then((userData) => {
    profileInfo.setUserInfo(userData);
    
})



//загружаю карточки с сервера
api.getCards()
.then((cardsData) => {
   //рендерю карточки в секцию
  const cardsSection = new Section({
    items: cardsData,
    renderer: (cardEl) => {
      const card = createCard(cardEl,
      templateElement, handleCardClick); 
      cardsSection.addItem(card);
    }
  }, cardsContainer)
  
  //отрисовываю карты на странице
  cardsSection.rendererItems();
})





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
function createCard(cardEl, templateElement, handleCardClick) {
  const card = new Card(cardEl, templateElement, handleCardClick);
  const cardItem = card.createInitialCard();
  return cardItem;
}


//создаю секцию для карточек



//создаю объект попапа редактирования профиля
const popupProfileEdit = new PopupWithForm({
  popupSelector: popupEditProfile,
  callBack: (data) => {
    console.log(profileInfo.setUserInfo(data))
    return profileInfo;
    }
  }
)
popupProfileEdit.setEventListeners();
//создаю объект валидации попапа редактирования профиля
const profileValidation = new FormValidator(validationConfig, popupAddProfileForm);
profileValidation.enableValidation();


//создаю объект попапа добавления карточки
const popupCardAdd = new PopupWithForm({
  popupSelector: popupAddCard,
  callBack: (data) => {
    const card = createCard(data['card-name'], data['card-image'],
    templateElement, handleCardClick);
    cards.addItem(card);
  }
})
popupCardAdd.setEventListeners();
//создаю объект валидации попапа добавления карточки
const cardValidation = new FormValidator(validationConfig, popupAddCardForm);
cardValidation.enableValidation();


//слушатель событий для кнопки добавления карточки
popupProfileAddButton.addEventListener('click', () => {
  popupCardAdd.open();
})

//слушатель событий для кнопки редактирования профиля
profileEditButton.addEventListener('click', () => {
  popupProfileEdit.renderInputValues(profileInfo.getUserInfo())
  popupProfileEdit.open();
});


 

//запрос кард
// const getCards = () => {
//   api.getCards()
//   .then((cardsData) => {
//     return cardsData;
//     // cardsSection.rendererItems(cardsData);
//   })
// }


//ТРАБЛЫ :
//!!! не понимаю как пользоваться функцией объявленной ввиде константы =\

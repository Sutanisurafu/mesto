import './index.css';
import Card  from '../scripts/components/Card.js';
import Section from '../scripts/components/Section.js';
import FormValidator from '../scripts/components/FormValidator.js';
import {validationConfig, profileEditButton, profileName, profileSpeciality,
        popupCardAddBtn, popupAddCardForm, popupAddProfileForm, cardsContainer,
        templateElement, profileAvatar, popupAvatar,popupEditProfileSelector,
        popupAddCardSelector, popupConfirmSelector, popupAvatarSelector,
        imagePopupSelector, avatarContainer
        } 
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



//создаю объект информации о пользователе 
const profileInfo = new UserInfo(
   profileName,
   profileSpeciality,
   profileAvatar
)



//делаю запрос на сервер за данными юзера и карточек
Promise.all([api.getUserInfo(), api.getCards()])
.then(([userData, cardsData]) => {
 profileInfo.setUserInfo(userData);
 profileInfo.setUserAvatar(userData);
 profileInfo.setId(userData._id)
 cardsSection.rendererItems(cardsData.reverse());
      }).catch((err) => {
        console.error(err);
      })





//Создаю объект секции карточек
const cardsSection = new Section({
  renderer: (cardInfo) => {
    const card = createCard(cardInfo); 
    cardsSection.addItem(card);
  }
}, cardsContainer)
 
//создаю объект попапа добавления карточки
const popupCardAdd = new PopupWithForm({
  popupSelector: popupAddCardSelector,
  callBack: (cardInfo) => {
    api.addCard(cardInfo)
    .then((cardData) => {
      const card = createCard(cardData);
      cardsSection.addItem(card);
      popupCardAdd.close()
        })
        .catch((err) => console.log(err))
        .finally(() => {
          popupCardAdd.renderLoading(false);
          cardValidation.toggleButtonState();
        })
      }   
    })

    popupCardAdd.setEventListeners();
 
//создаю объект попапа редактирования профиля
const popupProfileEdit = new PopupWithForm({
  popupSelector: popupEditProfileSelector,
  callBack: (inputData) => {
    api.editUserInfo(inputData)
    .then((userData) => {
      profileInfo.setUserInfo(inputData)
      popupProfileEdit.close()
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupProfileEdit.renderLoading(false);
      profileValidation.toggleButtonState();
    })
    return profileInfo;
    }
  }
)
popupProfileEdit.setEventListeners();

//создаю объект попапа редактирования аватара
const popupProfileAvatarEdit = new PopupWithForm({
  popupSelector: popupAvatarSelector,
  callBack: (data) => {
    api.editAvatar(data.avatar)
    .then((data) => {
      popupProfileAvatarEdit.renderLoading();
      popupProfileAvatarEdit.close();
      profileInfo.setUserAvatar(data)
    })
    .catch((err) => console.log(err))
    .finally(() => {
      popupProfileAvatarEdit.renderLoading(false)
      avatarValidation.toggleButtonState();
    })  
  }
})
popupProfileAvatarEdit.setEventListeners();
 
//создаю объект попапа с картинкой 
const popupCardImg = new PopupWithImage(imagePopupSelector);
popupCardImg.setEventListeners();

//попап подтверждения удаления
const popupDeleteCard = new PopupWithConfirm(popupConfirmSelector, removeCard)
popupDeleteCard.setEventListeners();



//объект функций для работы с карточками
const cardFunctions = {
  handleCardClick: function (cardInfo) {
    popupCardImg.open(cardInfo.place, cardInfo.link);
  },
  handleDeleteBtnClick: function (card) {
    popupDeleteCard.open(card);
  },
  handleCardAddLike: function (cardId) {
    api.addLike(cardId)
    .then((cardData) => {
      this.checkLike(cardData.likes)
    })
    .catch((err) => console.log(err))
  },
  handleCardDeleteLike: function (cardId) {
    api.deleteLike(cardId)
    .then((cardData) => {
      this.checkLike(cardData.likes)
    })
    .catch((err) => console.log(err))
  }
}


//функция удаления карточки
function removeCard({id, cardObj}) {
  api.deleteCard(id)
  .then((data) => {
    cardObj.deleteCard();
    popupDeleteCard.close();
  })
  .catch((err) => console.log(err))
  .finally(() => {popupDeleteCard.renderLoading(false)})
}


//функция создания отдельной карточки
function createCard(cardInfo) {
  const card = new Card(cardInfo, templateElement, cardFunctions, profileInfo.getId());
  const cardItem = card.createInitialCard();
  return cardItem;
}


//создаю объект валидации попапа редактирования аватара
const avatarValidation = new FormValidator(validationConfig, popupAvatar)
avatarValidation.enableValidation();

//создаю объект валидации попапа редактирования профиля
const profileValidation = new FormValidator(validationConfig, popupAddProfileForm);
profileValidation.enableValidation();

//создаю объект валидации попапа добавления карточки
const cardValidation = new FormValidator(validationConfig, popupAddCardForm);
cardValidation.enableValidation();




//слушатель событий для кнопки добавления карты
popupCardAddBtn.addEventListener('click', () => {
  popupCardAdd.open();
})


//слушатель событий для кнопки редактирования профиля
profileEditButton.addEventListener('click', () => {
  popupProfileEdit.renderInputValues(profileInfo.getUserInfo())
  popupProfileEdit.open();
});

//слушатель событий для редактирования аватара
avatarContainer.addEventListener('click', () => {
  popupProfileAvatarEdit.open();
})

import Card  from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import { initialCards, validationConfig, profileEditButton, popupEditProfile,
  popupEditProfileCloseButton, profileName, profileSpeciality,
  popupProfileAddButton, popupInputName, popupInputSpeciality, popupEditProfileForm,
  popupAddCard, popupAddCardForm, popupAddProfileForm, popupCardCloseButton,
  imagePopup, imagePopupCloseButton, cardPlace, cardLink, cardsContainer, ESC, templateElement} 
  from './constants.js';
import PopupWithImage from './PopupWithImage.js';
import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';

  



//Функция открытия картинки по нажатию на неё
function handleCardClick() {
  const popupCardImg = new PopupWithImage(imagePopup);
  popupCardImg.open(this._place, this._link);
}

//создаю объект информации о пользователе 
const profileInfo = new UserInfo(
    {profile: profileName,
     speciality: profileSpeciality}
)

//функция создания отдельной карточки
function createCard(place, link, templateElement, handleCardClick) {
  const card = new Card(place, link, templateElement, handleCardClick);
  const cardItem = card.createInitialCard();
  return cardItem;
}


//создаю секцию для карточек
const cards = new Section({
  items: initialCards,
  renderer: (title) => {
    const card = createCard(title.place, title.link,
    templateElement, handleCardClick); 
    cards.addItem(card);
  
  }
}, cardsContainer)

//отрисовываю карты на странице
cards.rendererItems();

//создаю объект попапа редактирования профиля
const popupProfileEdit = new PopupWithForm({
  popupSelector: popupEditProfile,
  callBack: (data) => {
    profileInfo.setUserInfo(data);  

    return profileInfo;
    }
  }
)

//создаю объект попапа добавления карточки
const popupCardAdd = new PopupWithForm({
  popupSelector: popupAddCard,
  callBack: (data) => {
    const card = createCard(data['card-name'], data['card-image'],
    templateElement, handleCardClick);
    cards.addItem(card);
  }
})


//слушатель событий для кнопки добавления карточки
popupProfileAddButton.addEventListener('click', () => {
  popupCardAdd.open();
  const cardValidation = new FormValidator(validationConfig, popupAddCardForm);
  cardValidation.enableValidation();
})


//слушатель событий для кнопки редактирования профиля
profileEditButton.addEventListener('click', () => {
  popupProfileEdit.renderInputValues(profileInfo.getUserInfo())
  popupProfileEdit.open();
  const profileValidation = new FormValidator(validationConfig, popupAddProfileForm);
  profileValidation.enableValidation();
});


 


//Валидация форнм
// const profileValidation = new FormValidator(validationConfig, popupAddProfileForm); 
// const cardValidation = new FormValidator(validationConfig, popupAddCardForm);

// cardValidation.enableValidation();
// profileValidation.enableValidation();

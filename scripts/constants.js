//массив данных карточек
const initialCards = [
  {
    place: 'Чусовая',
    link: 'https://www.visit-tagil.ru/upload/iblock/fcb/chusovaya_reka_.jpg'
  },
  {
    place: 'Кунгурская пещера',
    link: 'https://lh3.googleusercontent.com/p/AF1QipNRgZutp5r7YNZZkrP-Xsi0PobkaXARlbIfaYtj=s680-w680-h510'
  },
  {
    place: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    place: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    place: 'Санкт-Петербург',
    link: 'https://images.unsplash.com/photo-1548834925-e48f8a27ae6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    place: 'Байкал',
    link: 'https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }
]; 

//Файл валидации
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-btn',
    inactiveButtonClass: 'popup__submit-btn_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'error_visible',
    fieldSetSelector: '.popup__container'
}

//Константы клавиш 
const ESC = 27;

//константы элементов попапа
const profileEditButton = document.querySelector('.profile__edit-btn');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupEditProfileCloseButton = document.querySelector('.popup__close_type_profile');
const profileName = document.querySelector('.profile__title');
const profileSpeciality = document.querySelector('.profile__text');
const popupProfileAddButton = document.querySelector('.profile__add-btn');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputSpeciality = document.querySelector('.popup__input_type_speciality');
const popupEditProfileForm = document.querySelector('.popup__form');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardForm = document.querySelector('.popup__form_type_card');
const popupAddProfileForm = document.querySelector('.popup__form_type_profile');
const popupCardCloseButton = document.querySelector('.popup__close_type_cards');
const cardSubmitButton = document.querySelector('.popup__submit-btn_type_card');
const imagePopup = document.querySelector('.popup_type_image-popup');
const imagePopupCloseButton = document.querySelector('.popup__image-close-btn');
const imagePopupItem = document.querySelector('.popup__image-item');
const imagePopupCaption = document.querySelector('.popup__image-caption')
const cardPlace = document.querySelector('.popup__input_type_place');
const cardLink = document.querySelector('.popup__input_type_image-link');
const cardsContainer = document.querySelector('.cards');
const templateElement = document.querySelector('#cards-template');

export {initialCards, validationConfig, profileEditButton, popupEditProfile,
      popupEditProfileCloseButton, profileName, profileSpeciality,
      popupProfileAddButton, popupInputName, popupInputSpeciality, popupEditProfileForm,
      popupAddCard, popupAddCardForm, popupAddProfileForm, popupCardCloseButton,
      cardSubmitButton, imagePopup, imagePopupCloseButton, imagePopupItem,
      imagePopupCaption, cardPlace, cardLink, cardsContainer, ESC };
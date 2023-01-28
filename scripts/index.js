import  {Card}  from './Card.js';
import {FormValidator} from './FormValidator.js';
//Функция открытия попапа редактирования профиля
function openProfilePopup(popup) {
  popupInputName.value = profileName.textContent; 
  popupInputSpeciality.value = profileSpeciality.textContent;
  openPopup(popup)
}

//Функция открытия попапов 
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupWithEsc)
  document.addEventListener('click', closePopupWithOverlayClick)
}

//Функция закрытия попапов
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupWithEsc)
  document.removeEventListener('click', closePopupWithOverlayClick)
}

//Функция закрытия попапов клавишей Esc
  function closePopupWithEsc(evt)  {
    if (evt.keyCode == ESC) {
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
    }
  }

//Закрытие попапов нажатием на оверлей
function closePopupWithOverlayClick(evt) {
  if (evt.target === document.querySelector('.popup_opened')) {
    closePopup(evt.target);
  }
}

//сохранение данных формы профайла
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileSpeciality.textContent = popupInputSpeciality.value;
  closePopup(popupEditProfile);
}

//функция добавления новой карточки на страницу
const renderCards = () => {
  const card = new Card(cardPlace.value, cardLink.value);
  const cardItem = card.createInitialCard();
  cardsContainer.prepend(cardItem);
  closePopup(popupAddCard);
  cardPlace.value = '';
  cardLink.value = '';
}

//перебираю масив карточек  и создаю для каждого элемента, объект карточки
initialCards.forEach((title) => {
  const card = new Card(title.place, title.link);
  const cardItem = card.createInitialCard(cardPlace.value, cardLink.value);
  cardsContainer.append(cardItem);

})

//слушатели
profileEditButton.addEventListener('click', () => openProfilePopup(popupEditProfile));
popupEditProfileCloseButton.addEventListener('click', () => closePopup(popupEditProfile));
popupProfileAddButton.addEventListener('click', () => openPopup(popupAddCard));
popupCardCloseButton.addEventListener('click', () => closePopup(popupAddCard));
popupEditProfileForm.addEventListener('submit', handleFormSubmit);
popupAddCardForm.addEventListener('submit', renderCards);
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));
//экспортирую функции открытия и закрытия попапов
export { openPopup, closePopup };


const profileValidation = new FormValidator(validationConfig, popupAddProfileForm);
const cardValidation = new FormValidator(validationConfig, popupAddCardForm);


profileValidation.enableValidation(popupAddProfileForm, validationConfig);
cardValidation.enableValidation(popupAddCardForm);









//Функция открытия попапа редактирования профиля
function openProfilePopup(popup) {
  popupInputName.value = profileName.textContent; 
  popupInputSpeciality.value = profileSpeciality.textContent;
  openPopup(popup)
}

//Функция открытия попапов 
function openPopup(popup) {
  popup.classList.add('popup_opened');
  enableValidation(validationConfig);
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

//добавление карточек на страницу через template


const createInitialCard = (place, link) => {
  const card = template.content.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const likeBtn = card.querySelector('.like-btn');
  const deleteBtn = card.querySelector('.trash-btn');
  card.querySelector('.card__title').textContent = place;
  cardImage.src = link;
  cardImage.alt = place;
  //функция добавления данных в попап картинки
  cardImage.addEventListener('click', () => { 
    openPopup(imagePopup);
    imagePopupItem.src = card.querySelector('.card__image').src
    imagePopupItem.alt = place;
    imagePopupCaption.textContent = card.querySelector('.card__title').textContent
  })
  //удаление карточки
  deleteBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    card.remove();
  })
  //лайк карточки
    likeBtn.addEventListener('click', (event) => {
      const target = event.target
      target.classList.toggle('like-btn_active');
  });
  return card;
}

const renderCards = ({place, link}) => {
  cardsContainer.append(createInitialCard(place, link))
}

initialCards.forEach((title) => {
  renderCards(title);
})

const handleCardSubmit = (event) => {
  event.preventDefault();
  createInitialCard(cardPlace, cardLink);
  cardsContainer.prepend(createInitialCard(cardPlace.value, cardLink.value));
  closePopup(popupAddCard);
  cardPlace.value = '';
  cardLink.value = '';
}

//слушатели событий
profileEditButton.addEventListener('click', () => openProfilePopup(popupEditProfile));
popupEditProfileCloseButton.addEventListener('click', () => closePopup(popupEditProfile));
popupEditProfileForm.addEventListener('submit', handleFormSubmit);
popupAddCardForm.addEventListener('submit', handleCardSubmit);
popupProfileAddButton.addEventListener('click', () => openPopup(popupAddCard));
popupCardCloseButton.addEventListener('click', () => closePopup(popupAddCard));
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));

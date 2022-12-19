const profileEditButton = document.querySelector('.profile__edit-btn');
const popupEditProfile = document.querySelector('.popup_edit-profile');
const popupEditProfileCloseButton = document.querySelector('.popup__close_type_profile');
const profileName = document.querySelector('.profile__title');
const profileSpeciality = document.querySelector('.profile__text');
const popupProfileAddButton = document.querySelector('.profile__add-btn');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputSpeciality = document.querySelector('.popup__input_type_speciality');
const popupEditProfileForm = document.querySelector('.popup__form');
const popupAddCard = document.querySelector('.popup_add-card');
const popupAddCardForm = document.getElementsByName('card-form')[0];
const popupCardCloseButton = document.querySelector('.popup__close_type_cards');
const cardName = document.getElementsByName('card-name');
const cardImage = document.getElementsByName('card-image');
const cardSubmitButton = document.getElementsByName('card-submit-btn');
const imagePopup = document.querySelector('.popup_image-popup');
const imagePopupCloseButton = document.querySelector('.image-popup__close');
const imagePopupItem = document.querySelector('.image-popup__item');
const imagePopupCaption = document.querySelector('.image-popup__caption')
const cardPlace = document.querySelector('.popup__input_type_place');
const cardLink = document.querySelector('.popup__input_type_image-link');
//открытие попапа редактирования профайла
function openEditProfilePopup() {
  popupEditProfile.classList.add('popup_opened');
  popupInputName.value = profileName.textContent;
  popupInputSpeciality.value = profileSpeciality.textContent;
}
//закрытие попапа редактирования профайла
function closeEditProfilePopup() {
  popupEditProfile.classList.remove('popup_opened');
}
//сохранение данных формы 
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = popupInputName.value;
  profileSpeciality.textContent = popupInputSpeciality.value;
  closeEditProfilePopup();
}

//открытие попапа добавления карточек
function openCardPopup() {
  popupAddCard.classList.add('popup_opened');
}
//закрытие попапа добавления карточек
function closeCardPopup() {
  popupAddCard.classList.remove('popup_opened');
}

// закрытие попапа с картинкой 
function closeImagePopup() {
  imagePopup.classList.remove('popup_opened')
}

//добавление карточек на страницу через template
const cardsContainer = document.querySelector('.cards');
const template = document.querySelector('#cards-template');

const createInitialCards = (place, link) => {
  const card = template.content.querySelector('.card').cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const likeBtn = card.querySelector('.like-btn');
  const deleteBtn = card.querySelector('.trash-btn');
  card.querySelector('.card__title').textContent = place;
  card.querySelector('.card__image').src = link;
  card.querySelector('.card__image').alt = place;
  //открытие попапа с  картинкой
  cardImage.addEventListener('click', () => {  
    imagePopup.classList.add('popup_opened');
    imagePopupItem.src = card.querySelector('.card__image').src
    imagePopupCaption.textContent = card.querySelector('.card__title').textContent
  })
  
  //удаление карточки
  deleteBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    card.remove();
  })
  //лайк карточки
    likeBtn.addEventListener('click', () => {
    if(likeBtn.classList.contains('like-btn_active')) {
      likeBtn.classList.remove('like-btn_active')
    } else {likeBtn.classList.add('like-btn_active');
  }
  });

  return card;
}

const renderCards = ({place, link}) => {
  cardsContainer.append(createInitialCards(place, link))
}

initialCards.forEach((title) => {
  renderCards(title);
})


const handleCardSubmit = (event) => {
  event.preventDefault();
    createInitialCards(cardPlace, cardLink);
    cardsContainer.prepend(createInitialCards(cardPlace.value, cardLink.value));
    closeCardPopup();
    cardPlace.value = '';
    cardLink.value = '';
}

//слушатели событий
popupEditProfileCloseButton.addEventListener('click', closeEditProfilePopup);
profileEditButton.addEventListener('click', openEditProfilePopup);
popupEditProfileForm.addEventListener('submit', handleFormSubmit);
popupAddCardForm.addEventListener('submit', handleCardSubmit);
popupProfileAddButton.addEventListener('click', openCardPopup);
popupCardCloseButton.addEventListener('click', closeCardPopup);
imagePopupCloseButton.addEventListener('click', closeImagePopup) 

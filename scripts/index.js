const profileEditButton = document.querySelector('.profile__edit-btn');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close_type_profile');
const popupContainer = document.querySelector('.popup__container');
const profileName = document.querySelector('.profile__title');
const profileSpeciality = document.querySelector('.profile__text');
const popupForm = document.querySelector('.popup__form');
const popupCardForm = document.getElementsByName('card-form')[0];
const inputName = document.querySelector('.popup__input_type_name');
const inputSpeciality = document.querySelector('.popup__input_type_speciality');
const addButton = document.querySelector('.profile__add-btn');
const popupCardAdder = document.querySelector('.popup_card_adder')
const cardPopup = document.querySelector('.popup_card_adder');
const cardPopupCloseButton = document.querySelector('.popup__close_type_cards');
const cardName = document.getElementsByName('card-name');
const cardImage = document.getElementsByName('card-image');
const cardSubmitButton = document.getElementsByName('card-submit-btn');
const sectionCards = document.querySelector('.cards');
const imagePopup = document.querySelector('.image-popup');

//массив данных карточек
const cardsArr = [
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

//открытие попапа редактирования профайла
function popupOpen() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputSpeciality.value = profileSpeciality.textContent;
}
//закрытие попапа редактирования профайла
function popupClose() {
  popup.classList.remove('popup_opened');
}
//сохранение данных формы 
function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileSpeciality.textContent = inputSpeciality.value;
  popupClose();
}

//открытие попапа добавления карточек
function popupCardOpen() {
  cardPopup.classList.add('popup_opened');
}
//закрытие попапа добавления карточек
function popupCardClose() {
  popupCardAdder.classList.remove('popup_opened');
}

//добавление карточек на страницу через template
const cardsContainer = document.querySelector('.cards');
const template = document.querySelector('#cards-template');

const createCard = (place, link) => {
  const card = template.content.querySelector('.card').cloneNode(true);
  const likeBtn = card.querySelector('.like-btn');
  const deleteBtn = card.querySelector('.trash-btn');
  card.querySelector('.card__title').textContent = place;
  card.querySelector('.card__image').src = link;
  //открытие картинки в полный размер
  card.addEventListener('click', () => {  
    imagePopup.classList.add('image-popup_opened');
    console.log("click");
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
  cardsContainer.append(createCard(place, link))
}

cardsArr.forEach((title) => {
  renderCards(title);
})

const handleCardSubmit = (event) => {
  event.preventDefault();
    let cardPlace = document.querySelector('.popup__input_type_place').value;
    let cardLink = document.querySelector('.popup__input_type_image-link').value;
    createCard(cardPlace, cardLink);
    cardsContainer.prepend(createCard(cardPlace, cardLink));
    popupCardClose();
    document.querySelector('.popup__input_type_place').value = '';
    document.querySelector('.popup__input_type_image-link').value = '';
}


//слушатели событий
popupCloseButton.addEventListener('click', popupClose);
profileEditButton.addEventListener('click', popupOpen);
popupForm.addEventListener('submit', handleFormSubmit);
popupCardForm.addEventListener('submit', handleCardSubmit);
addButton.addEventListener('click', popupCardOpen);
cardPopupCloseButton.addEventListener('click', popupCardClose);

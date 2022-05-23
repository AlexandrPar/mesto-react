import React from 'react';
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setiIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
    }
    function handleAddPlaceClick() {
        setiIsAddPlacePopupOpen(!isAddPlacePopupOpen);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setiIsAddPlacePopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <div className="page">
            <Header />
            <Main
                onCardClick={handleCardClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
            />
            <Footer />
            <PopupWithForm
                name='profile'
                heading="Редактировать профиль"
                saveButton="Сохранить"
                onClose={closeAllPopups}
                isOpen={isEditProfilePopupOpen}
            >
                <input
                    type="text"
                    className="popup__item popup__item_el_name"
                    name="name"
                    placeholder="Имя"
                    required
                    minLength="2"
                    maxLength="40"
                    id="name-input"
                />
                <span className="name-input-error popup__input-error"></span>
                <input
                    type="text"
                    className="popup__item popup__item_el_profession"
                    name="about"
                    placeholder="О себе"
                    required
                    minLength="2"
                    maxLength="200"
                    id="profession-input"
                />
                <span className="profession-input-error popup__input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name='card'
                heading="Новое место"
                saveButton="Сохранить"
                onClose={closeAllPopups}
                isOpen={isAddPlacePopupOpen}
            >
                <input
                    type="text"
                    className="popup__item popup__item_el_title"
                    name="name"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    id="title-input"
                />
                <span className="title-input-error popup__input-error"></span>
                <input
                    type="url"
                    className="popup__item popup__item_el_link"
                    name="link"
                    placeholder="Ссылка на картинку"
                    id="link-input"
                />
                <span className="link-input-error popup__input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name='avatar'
                heading="Обновить аватар"
                saveButton="Сохранить"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <input
                    type="url"
                    className="popup__item popup__item_el_link"
                    name="avatar"
                    placeholder="Ссылка на картинку"
                    id="link-input-avatar"
                    required
                />
                <span className="link-input-avatar-error popup__input-error"></span>
            </PopupWithForm>
            <PopupWithForm
                name='delete'
                heading="Вы уверены?"
                saveButton="Да"
                onClose={closeAllPopups}
            >
            </PopupWithForm>
            <ImagePopup
                onClose={closeAllPopups}
                card={selectedCard} />
        </div>
    );
}

export default App;

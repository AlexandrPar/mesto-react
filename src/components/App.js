import {useEffect, useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import DeleteCardPopup from './DeleteCardPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
import { api } from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setiIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);
    const [removedCardId, setRemovedCardId] = useState('');

    useEffect(() => {
        Promise.all([api.getProfileInfo(), api.getMassivCards()])
            .then(([itemUser, cards]) => {
                setCurrentUser(itemUser);
                setCards(cards);
            })
            .catch((err) => {
                console.log(`Ошибка получения данных: ${err}`)
            });
    }, []);

    function handleCardDeleteClick(card) {
        setIsDeleteCardPopupOpen(!isDeleteCardPopupOpen);
        setRemovedCardId(card);
      }

    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards((cards) => cards.filter(c => c._id !== card._id))
                closeAllPopups()
            })
            .catch((err) => {
                console.log(`Ошибка удаления карточки: ${err}`)
            });
    }

    function handleCardLike(card) {
        const isLiked = card.likes.some((user) => user._id === currentUser._id);
        const request = isLiked ? api.deleteCardLike(card._id) : api.getCardLike(card._id);
        request
            .then((newCard) => {
                setCards((state) =>
                    state.map((c) => (c._id === card._id ? newCard : c))
                );
            })
            .catch((err) => {
                console.log(`Ошибка лайка: ${err}`);
            });
    }

    function handleUpdateUser(data) {
        api.renameProfileInfo(data)
            .then((itemUser) => {
                setCurrentUser(itemUser);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка обновления данных: ${err}`);
            });
    }

    function handleUpdateAvatar(avatar) {
        api.replaceProfileAvatar(avatar)
            .then((itemUser) => {
                setCurrentUser(itemUser);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка аватара: ${err}`);
            });
    }

    function handleAddPlaceSubmit(item) {
        api.addNewCard(item)
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => {
                console.log(`Ошибка отправки данных карточки: ${err}`);
            });
    }

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
        setIsDeleteCardPopupOpen(false);
        setSelectedCard(null);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onCardClick={handleCardClick}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDeleteClick}
                />
                <Footer />
                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />
                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                />
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />
                <DeleteCardPopup
                    isOpen={isDeleteCardPopupOpen}
                    onClose={closeAllPopups}
                    onDeleteCard={handleCardDelete}
                    card={removedCardId}
                />
                <ImagePopup
                    onClose={closeAllPopups}
                    card={selectedCard} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;

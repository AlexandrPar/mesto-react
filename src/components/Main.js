import React from "react";
import { api } from "../utils/Api";
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
    const [userAvatar, setUserAvatar] = React.useState();
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getProfileInfo(), api.getMassivCards()])
            .then(([item, cards]) => {
                setUserName(item.name);
                setUserDescription(item.about);
                setUserAvatar(item.avatar)
                setCards(cards);
            })
            .catch((err) => {
                console.log(`Ошибка получения данных: ${err}`);
            });
    }, [])
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-block">
                    <img src={userAvatar} alt="Аватар" className="profile__avatar" />
                    <button className="profile__avatar-replace" onClick={onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__profession">{userDescription}</p>
                    <button type="button" aria-label="Редактор профиля" className="profile__edit-button" onClick={onEditProfile}></button>
                </div>
                <button type="button" aria-label="Добавить картинку" className="profile__add-button" onClick={onAddPlace}></button>
            </section>
            <section className="gallery">
                {cards.map((card) => (
                    <Card
                        key={card._id}
                        link={card.link}
                        name={card.name}
                        likes={card.likes.length}
                        card={card}
                        onCardClick={onCardClick}
                    />
                )
                )}
            </section>
        </main>
    );
}

export default Main;
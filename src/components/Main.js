import React from "react";

function Main() {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar-block">
                    <img src="#" alt="Аватар" class="profile__avatar"/>
                    <button className="profile__avatar-replace"></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name"></h1>
                    <p className="profile__profession"></p>
                    <button type="button" aria-label="Редактор профиля" className="profile__edit-button"></button>
                </div>
                <button type="button" aria-label="Добавить картинку" className="profile__add-button"></button>
            </section>
            <section className="gallery">

            </section>
        </main>
    );
}

export default Main;
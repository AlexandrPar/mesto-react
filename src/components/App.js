import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div class="page">
        <Header />
        <Main />
        <Footer />
        <div class="popup popup_class_profile">
            <div class="popup__container">
                <button type="button" class="popup__close popup__close_class_profile" aria-label="Закрыть"></button>
                <div class="popup__content">
                    <h2 class="popup__heading popup__heading_class_profile">Редактировать профиль</h2>
                    <form class="popup__input-container popup__input-container_class_profile" name="input-container"
                        novalidate>
                        <input type="text" class="popup__item popup__item_el_name" name="name" placeholder="Имя"
                            required minlength="2" maxlength="40" id="name-input"/>
                        <span class="name-input-error popup__input-error"></span>
                        <input type="text" class="popup__item popup__item_el_profession" name="about"
                            placeholder="О себе" required minlength="2" maxlength="200" id="profession-input"/>
                        <span class="profession-input-error popup__input-error"></span>
                        <button type="submit" aria-label="Сохранить"
                            class="popup__save popup__save_class_profile">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="popup popup_class_card">
            <div class="popup__container">
                <button type="button" class="popup__close popup__close_class_card" aria-label="Закрыть"></button>
                <div class="popup__content">
                    <h2 class="popup__heading popup__heading_class_card">Новое место</h2>
                    <form class="popup__input-container popup__input-container_class_card" name="input-container"
                        novalidate>
                        <input type="text" class="popup__item popup__item_el_title" name="name" placeholder="Название"
                            required minlength="2" maxlength="30" id="title-input"/>
                        <span class="title-input-error popup__input-error"></span>
                        <input type="url" class="popup__item popup__item_el_link" name="link"
                            placeholder="Ссылка на картинку" required id="link-input"/>
                        <span class="link-input-error popup__input-error"></span>
                        <button type="submit" aria-label="Сохранить"
                            class="popup__save popup__save_class_card">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="popup popup_class_image">
            <div class="popup__container popup__container_class_image">
                <img src="#" alt="#" class="popup__image"/>
                <p class="popup__subtitel"></p>
                <button type="button" class="popup__close popup__close_class_image" aria-label="Закрыть"></button>
            </div>
        </div>
        <div class="popup popup_class_avatar">
            <div class="popup__container">
                <button type="button" class="popup__close popup__close_class_avatar" aria-label="Закрыть"></button>
                <div class="popup__content">
                    <h2 class="popup__heading popup__heading_class_avatar">Обновить аватар</h2>
                    <form class="popup__input-container popup__input-container_class_avatar" name="input-container"
                        novalidate>
                        <input type="url" class="popup__item popup__item_el_link" name="avatar"
                            placeholder="Ссылка на картинку" required id="link-input-avatar"/>
                        <span class="link-input-avatar-error popup__input-error"></span>
                        <button type="submit" aria-label="Сохранить"
                            class="popup__save popup__save_class_avatar">Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="popup popup_class_delete">
            <div class="popup__container">
                <button type="button" class="popup__close popup__close_class_delete" aria-label="Закрыть"></button>
                <div class="popup__content">
                    <h2 class="popup__heading popup__heading_class_delete">Вы уверены?</h2>
                    <form class="popup__input-container popup__input-container_class_delete" name="input-container"
                        novalidate>
                        <button type="submit" aria-label="Сохранить"
                            class="popup__save popup__save_class_delete">Да</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

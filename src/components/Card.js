import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card)
    }

    return (
        <div className="card">
            <button type="button" aria-label="Удалить" className="card__delete"></button>
            <img src={props.link} alt={props.name} className="card__image" onClick={handleClick} />
            <div className="card__caption">
                <h2 className="card__name">{props.name}</h2>
                <div className="card__like-box">
                    <button type="button" aria-label="Лайк" className="card__like"></button>
                    <span className="card__like-amount">{props.likes}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;
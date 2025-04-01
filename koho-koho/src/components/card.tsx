import React from 'react';
import './card.css';

const Card = (props: { titles: string[], times: string[] }) => {
    return (
        <div className="card-container">
            <div className="card-item">
                <div className="card-item-titles">
                    <div className="card-heading">{props.titles[0]}</div>
                    <div className="card-sub-heading">{props.titles[1]}</div>
                </div>
                <div className="card-item-titles">
                    <div className="card-heading card-time-heading">{props.times[0]}</div>
                    <div className="card-sub-heading">{props.times[1]}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
import React from 'react';
import './card.css';

const Card = (props: { titles: string[], times: string[] }) => {
    return (
        <div className="card-container">
            <div className="card-item">
                <p>{props.titles[0]}</p>
                <p>{props.times[0]}</p>
            </div>
            <div className="card-item">
                <p>{props.titles[1]}</p>
                <p>{props.times[1]}</p>
            </div>
        </div>
    );
}

export default Card;
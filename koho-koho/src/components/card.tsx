import React from 'react';
import './card.css';

const Card = (props: {titles: string[], times: string[]}) => {
    return (
        <div className="container">
            {/*TODO: Grid*/}
            <div>
                Title SL: {props.titles[0]}
                SL Time: {props.times[0]}
            </div>
            <div>
                Title User: {props.titles[1]}
                User Time: {props.times[1]}
            </div>
        </div>
    );
}

export default Card;
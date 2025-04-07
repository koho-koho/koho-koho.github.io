import React, {useState} from 'react';
import './card.css';
import expandIcon from '../icons/expand.svg';

const Card = (props: { titles: string[], times: string[], descriptions?: string[] }) => {
    const [displayDetails, setDisplayDetails] = useState(false)

    return (
        <div className="card-container">
            <div className="card-item">
                <div className="card-item-titles">
                    <div className="card-heading">{props.titles[0]}</div>
                    <div className="card-sub-heading">{props.titles[1]}</div>
                </div>
                <div className="card-item-titles">
                    <div className="card-heading">{props.times[0]}</div>
                    <div className="card-sub-heading">{props.times[1]}</div>
                </div>
            </div>
            {props.descriptions !== undefined &&
                (
                    <>
                        <button style={displayDetails ? {"borderRadius": "0"} : {"borderRadius": "0 0 10px 10px"}}
                                onClick={() => {
                                    setDisplayDetails(!displayDetails)
                                }}><span>
                        {displayDetails && <img alt="expand icon" src={expandIcon} style={{transform: "scaleY(-1)"}}/>}
                            {!displayDetails && <img alt="expand icon" src={expandIcon}/>}
                            </span></button>
                        <div className="card-description-container"
                             style={displayDetails ? {} : {display: "none"}}>
                            <div className="card-item description-item">
                                <div className="card-item-titles">
                                    <div className="card-heading description-item-sinhala">
                                        {props.descriptions[0]}
                                    </div>
                                    <div className="card-sub-heading">
                                        {props.descriptions[1]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
        ;
}

export default Card;
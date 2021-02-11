import React from 'react'
import "./miniCard.css"


export default function MiniCard(props) {

    const rightOrLeft = (props.align === 'left') ? 'miniCLeft' : 'miniCRight';

    return (
        <div className={rightOrLeft}>
            <p>{props.text}</p>
            <p>{props.text2}</p>
        </div>
    )
}

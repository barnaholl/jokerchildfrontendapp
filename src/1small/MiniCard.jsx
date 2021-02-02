import React from 'react'
import {Button, Card} from 'react-bootstrap';
import "./miniCard.css"


export default function MiniCard(props) {

    const rightOrLeft = (props.align == 'left') ? 'miniCLeft' : 'miniCRight';

    return (
        <div className={rightOrLeft}>
            <p>{props.text}</p>
        </div>
    )
}

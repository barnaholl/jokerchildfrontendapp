import React from 'react'
import "./PurpleButton"
import {Button, Card} from 'react-bootstrap';


export default function PurpleButton(props) {

    return (
        <div className="purpleButt">
            <Button variant="default" onClick={props.onClick} style={{color: 'white', background: '#7749f8', fontFamily:'sans-serif', fontWeight:"bolder"}}>{props.text}</Button>
        </div>
    )
}

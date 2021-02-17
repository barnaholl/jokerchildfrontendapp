import React from 'react'
import "./PurpleButton"
import {Button} from 'react-bootstrap';


export default function PurpleButton(props) {

    return (
        <div className="purpleButt">
            <Button variant="default"  id={props.id} onClick={props.onClick} style={{color: 'white', background: '#7749f8', fontFamily:'sans-serif', fontWeight:"bolder"}}>{props.text}</Button>
        </div>
    )
}

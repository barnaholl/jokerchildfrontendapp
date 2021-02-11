import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import './popup.css'


export default function PopupButton(props) {
    let counter = 0;
    let tryings = 0;
    const goodAnswers = () => {
        props.selectedW.map(item => {
            if (props.goodW.includes(item.content)) {
                counter++;
            };
        return counter;
        })
    }

    const clicked = () => {
        tryings++;
    }

    const setContent = () => {
        if (props.goodW.length === props.selectedW.length) {
            goodAnswers()
            return (
                <>
                    <p>{props.goodW.length} / {counter} válaszod helyes.</p>
                </>
            )
        } else if (props.goodW.length < props.selectedW.length || props.goodW.length > props.selectedW.length) {
            return (
                <>
                    <p>{props.goodW.length} választ kell megadnod!</p>
                </>
            )
        }
    }

    return (
        <Popup
            content={setContent()}
            on='click'
            positionFixed
            className='popup'
            trigger={<Button  style={{ color: 'white', background: '#7749f8', fontFamily: 'sans-serif', fontWeight: "bolder", borderRadius: "10px" }} onClick={props.validation, clicked}>{props.text}</Button>}
        />

    )
}


import React from 'react'
import { Button, Popup } from 'semantic-ui-react'
import './popup.css'
import { useHistory } from 'react-router-dom';


export default function PopupButton(props) {
    let counter = 0;
    let tryings = 0;
    const history=useHistory();

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
            goodAnswers();
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

    const validate = () => {
        const selectedItems = [];
        props.selectedW.map(item => {
            selectedItems.push(item.content)
        })
        if(JSON.stringify(selectedItems.sort()) === JSON.stringify(props.goodW.sort())) {
            history.push("/Questions")
        }
    }

    return (
        <Popup
            content={setContent()}
            on='click'
            positionFixed
            className='popup'
            trigger={<Button  style={{ color: 'white', background: '#7749f8', fontFamily: 'sans-serif', fontWeight: "bolder", borderRadius: "10px" }} onClick={clicked, validate}>{props.text}</Button>}
        />

    )
}


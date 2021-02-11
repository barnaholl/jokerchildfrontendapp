import React,{useState,useContext}from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "./getId.css"
import getCardByIdentificationId from "../context/ApiCalls"
import { CardContext} from '../context/CardContext'
import { useHistory } from 'react-router-dom'


export default function GetId() {

    const context=useContext(CardContext);
    const history=useHistory();

    const [identificationId,setIdentificationId]=useState("");

    const onValidIdentificationId = (cardData) =>{
        context.setCard(cardData);
        history.push("/Questions")
    }

    const submitCode = () => {
        getCardByIdentificationId(identificationId)
            .then(data=>data.data==="" ? window.alert("Rossz azonosító kód") : onValidIdentificationId(data.data));
    }

    return (
            <div>
                <PinkInfo text="Kérlek add meg a kártyán található kódot amivel játszani szeretnél." />
                <div className="input1"><input type="text" name="name"  className="input1" onChange={event=>setIdentificationId(event.target.value)}/></div>
                <PurpleButton text="Mutasd a kártyát!" onClick={submitCode}/>
                      
            </div>      
    )
}

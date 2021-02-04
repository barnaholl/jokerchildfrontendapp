import React,{useState}from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "./getId.css"
import urhajos from "../pics/urhajos.png"
import urhajoshata from "../pics/urhajoshata.png"
import getCardByIdentificationId from "../context/ApiCalls"


export default function GetId() {

    const [identificationId,setIdentificationId]=useState("");

    const test = () => {
        getCardByIdentificationId(identificationId);
    }


    return (
        <div>
            <form>
                <PinkInfo text="Kérlek add meg a kártyán található kódot amivel játszani szeretnél." />
                <input type="text" name="name"  className="input1" onChange={event=>setIdentificationId(event.target.value)}/>
                <PurpleButton text="Mutasd a kártyát!" onClick={test}/>
            </form>
            <div className="pics">
                <img src={urhajos} style={{height: "320px", paddingRight:"1%"}}/>
                <img src={urhajoshata} style={{height: "320px"}}/>
            </div>
            
        </div>
    )
}

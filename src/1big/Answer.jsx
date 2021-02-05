import React from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "./getId.css"
import urhajos from "../pics/urhajos.png"
import urhajoshata from "../pics/urhajoshata.png"
import felho from "../pics/felho.png"
import nap from "../pics/nap.png"
import "./getId.css"



export default function Questions() {
    return (
        <div>
            <PinkInfo text="Ide kell majd beírni a kérdéseket adatbázisból." />
            <div className="pics">
                <img src={felho} className="responsive" style={{minWidth:"250px", paddingRight:"1%"}}/>
                <img src={nap} className="responsive" style={{minWidth:"250px"}}/>
            </div>
            <p></p>
            <PurpleButton text="Kész!" />
    
        </div>
    )
}

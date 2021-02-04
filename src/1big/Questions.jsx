import React from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "../1medium/pinkInfo.css"
import urhajos from "../pics/urhajos.png"
import urhajoshata from "../pics/urhajoshata.png"
import felho from "../pics/felho.png"
import MiniCard from "../1small/MiniCard"
import "./questions.css"
export default function Questions() {
    return (
        <div>
            <div className='test'>
                <p className='h1'>Foglalkozás név</p>
                <ol>
                    <li>Első kérdés</li>
                    <li>Második kérdés</li>
                    <li>Harmadik kérdés</li>
                    <li>Negyedik kérdés</li>
                </ol>
            </div>
            <PurpleButton text="Következő kártya!" />
            <div>
            <MiniCard text="Leírás" align="left" className="oneline" />
            <MiniCard text="12/2 XP-t " text2="gyűjtöttél" align="right" className="oneline"/>
            </div>


        </div>
    )
}

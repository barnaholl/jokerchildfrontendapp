import React,{useContext,useState,useEffect} from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "./getId.css"
import urhajos from "../pics/urhajos.png"
import urhajoshata from "../pics/urhajoshata.png"
import felho from "../pics/felho.png"
import nap from "../pics/nap.png"
import "./getId.css"
import { CardContext,AnswerIdContext} from '../context/CardContext'
import { useHistory } from 'react-router-dom'



export default function Questions() {

    const context=useContext(CardContext);
    const answerIdContext=useContext(AnswerIdContext)
    const history=useHistory();
    let words=[];
    let goodWords=[];

    useEffect(()=>{
        let allWords=context.card.exercises[answerIdContext.answerId].answer.split(";");
        goodWords=allWords[0].split(",");
        let badWords=allWords[1].split(",");
        words= goodWords.concat(badWords);
        console.log(words);
        console.log(goodWords);
    },[])

    return (
        <div>
            <PinkInfo text={context.card.exercises[answerIdContext.answerId].question}/>
            <div className="pics">
                <img src={felho} className="responsive" style={{minWidth:"250px", paddingRight:"1%"}}/>
                <img src={nap} className="responsive" style={{minWidth:"250px"}}/>
            </div>
            <p></p>
            <PurpleButton text="Kész!" />
    
        </div>
    )
}

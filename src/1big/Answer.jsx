import React,{useContext,useState,useEffect} from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "./getId.css"
import urhajos from "../pics/urhajos.png"
import urhajoshata from "../pics/urhajoshata.png"
import felho from "../pics/felho.png"
import nap from "../pics/nap.png"
import "./getId.css"
import {getSessionsCardByUserId} from "../context/ApiCalls"
import { useHistory } from 'react-router-dom'



export default function Questions() {

    const history=useHistory();

    const [question,setQuestion]=useState(null);
    const [words,setWords]=useState([]);
    const [goodWords,setGoodWords]=useState([]);

    useEffect(()=>{
        getSessionsCardByUserId(0) // fix value until login is not implemented
            .then((data)=>{
                setQuestion(data.data.exercises[0].question)
                let allWords=data.data.exercises[0].answer.split(";");
                setGoodWords(allWords[0].split(","));
                let badWords=allWords[1].split(",");
                setWords(goodWords.concat(badWords));
            })           
    },[])

    return (
        
        <div>
            {question==null||words==null ? 
            (
                <div><p>Kérdés betöltése</p></div>
            ) 
            : 
            (
            <div>
                <PinkInfo text={question}/>
                <div className="pics">
                    <img src={felho} className="responsive" style={{minWidth:"250px", paddingRight:"1%"}}/>
                    <img src={nap} className="responsive" style={{minWidth:"250px"}}/>
                </div>
                <p></p>
                <PurpleButton text="Kész!" />
            </div>
            )}
            
    
        </div>
    )
}

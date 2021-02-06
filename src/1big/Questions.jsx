import React,{useContext,useState,useEffect} from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "../1medium/pinkInfo.css"
import urhajos from "../pics/urhajos.png"
import urhajoshata from "../pics/urhajoshata.png"
import felho from "../pics/felho.png"
import MiniCard from "../1small/MiniCard"
import "./questions.css"
import { CardContext,AnswerIdContext} from '../context/CardContext'
import {getSessionsCardByUserId} from "../context/ApiCalls"
import { useHistory } from 'react-router-dom'
import axios from 'axios'


export default function Questions() {

    const context=useContext(CardContext);
    const answerIdContext=useContext(AnswerIdContext)
    const history=useHistory(); 

    const [card,setCard]=useState(null);
    const [userId,setUserId]=useState(0); 

    
    const answerQuestion = (id) =>{
        answerIdContext.setAnswerId(id);
        history.push("/Answer");
    }

    const getNewCard=()=>{
        history.push("/GetId");
    }

    useEffect(()=>{
        getSessionsCardByUserId(0) // fix value until login is not implemented
            .then((data)=>setCard(data.data))     
    },[])


    return (
        
        <div>
            {card==null ? 
            
            (<div><p>Kártya betöltése</p></div>) 
            :
            (
                <div>
                    <div className='test'>
                        <p className='h1'>{card.profession.name}</p>
                        <ol>
                            {
                                card.exercises.map((exercise,index)=><li id={index} onClick={event=>answerQuestion(event.target.id)}>{exercise.question}</li>)
                            }
                            
                        </ol>
                    </div>
                    <div className="pics">
                        <img src={urhajos} className="responsiveGetId" style={{minWidth:"250px", paddingRight:"1%"}}/>
                    </div>
                    <PurpleButton onClick={getNewCard} text="Új kártyát kérek!" />
                    <div>
                        <MiniCard text="Leírás" align="left" className="oneline" />
                        <MiniCard text="12/2 XP-t gyűjtöttél" align="right" className="oneline"/>
                    </div>
                </div>
            ) 
            
            }         
        </div>
    )
}

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./game.css"
import WelcomePage from "./1big/WelcomePage"
import GetId from "./1big/GetId"
import Questions from "./1big/Questions"
import Answer from "./1big/Answer"
import { AnswerIdContext, CardContext } from "./context/CardContext";


const App = () => {

    const [card, setCard] = useState("null");
    const [answerId, setAnswerId] = useState("null");


    return (
        <Router>
          <div className='centralizeMainCard'>
            <div className="mainDiv">
                <Route exact path='/' component={WelcomePage}></Route>
                <CardContext.Provider value={{card,setCard}}>
                    <Route exact path='/getid' component ={GetId}></Route>
                    <AnswerIdContext.Provider value={{answerId,setAnswerId}}>
                        <Route exact path='/questions' component ={Questions}></Route>
                        <Route exact path='/answer' component ={Answer}></Route>
                    </AnswerIdContext.Provider>
                </CardContext.Provider>
            </div>
          </div>
        </Router>

    )
};

export default App;


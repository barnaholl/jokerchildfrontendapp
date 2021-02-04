import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";
import {Button, Card} from 'react-bootstrap';
import "./game.css"
import WelcomePage from "./1big/WelcomePage"
import GetId from "./1big/GetId"
import Questions from "./1big/Questions"
import Answer from "./1big/Answer"
import { CardContext } from "./context/CardContext";


const App = () => {

    const [card, setCard] = useState("null");

    return (
        <Router>
          <div className='centralizeMainCard'>
            <div className="mainDiv">
                <Route exact path='/' component={WelcomePage}></Route>
                <CardContext.Provider value={{card,setCard}}>
                    <Route exact path='/getid' component ={GetId}></Route>
                    <Route exact path='/questions' component ={Questions}></Route>
                    <Route exact path='/answer' component ={Answer}></Route>
                </CardContext.Provider>
            </div>
          </div>
        </Router>

    )
};

export default App;


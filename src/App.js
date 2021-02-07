import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./game.css"
import WelcomePage from "./1big/WelcomePage"
import GetId from "./1big/GetId"
import Questions from "./1big/Questions"
import Answer from "./1big/Answer"


const App = () => {

    return (
        <Router>
          <div className='centralizeMainCard'>
            <div className="mainDiv">
                <Route exact path='/' component={WelcomePage}></Route>
                <Route exact path='/getid' component ={GetId}></Route>
                <Route exact path='/questions' component ={Questions}></Route>
                <Route exact path='/answer/:questionId' component ={Answer}></Route>
            </div>
          </div>
        </Router>

    )
};

export default App;


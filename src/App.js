import React, { useState } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./game.css"
import Navbar1 from "./1medium/Navbar1"
import WelcomePage from "./1big/WelcomePage"
import GetId from "./1big/GetId"
import Questions from "./1big/Questions"
import Answer from "./1big/Answer"
import Statistics from "./1big/Statistics"
import AddCard from "./1big/AddCard"
import ProfilePage from "./1big/ProfilePage";


const App = () => {

    return (
        <Router>
          <Navbar1/>
          <div className='centralizeMainCard'>
            <div className="mainDiv">
                <Route exact path='/' component={WelcomePage}></Route>
                <Route exact path='/getid' component ={GetId}></Route>
                <Route exact path='/questions' component ={Questions}></Route>
                <Route exact path='/answer/:questionId' component ={Answer}></Route>
                <Route exact path='/statistics' component ={Statistics}></Route>
                <Route exact path='/addcard' component={AddCard}></Route>
                <Route exact path='/profil' component={ProfilePage}></Route>

            </div>
          </div>
        </Router>

    )
};

export default App;


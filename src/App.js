import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";
import {Button, Card} from 'react-bootstrap';
import "./game.css"
import WelcomePage from "./1big/WelcomePage"
import GetId from "./1big/GetId"

const App = () => {
    const [test, setTest] = useState();

    useEffect(() =>
        axios.get('https://joker-child-spring.herokuapp.com/')
            .then(res => {
                alert(res.data)
            })
    );



    return (
        <Router>
          <div className='centralizeMainCard'>
            <div className="mainDiv">
                <Route exact path='/' component={WelcomePage}></Route>
                <Route exact path='/getid' component ={GetId}></Route>
            </div>
          </div>
        </Router>

    )
};

export default App;


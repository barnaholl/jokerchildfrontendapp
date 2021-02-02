import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {Button, Card} from 'react-bootstrap';
import "./game.css"
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import MiniCard from "../1small/MiniCard"
const Game = () => {
    const [test, setTest] = useState();

    useEffect(() =>
        axios.get('https://joker-child-spring.herokuapp.com/')
            .then(res => {
                alert(res.data)
            })
    );



    return (
        <div className='centralizeMainCard'>
            <div className="mainDiv">
                    <PinkInfo title="Joker Child" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    <div className="purplButt">
                    <PurpleButton text="Belépek!" />
                    </div>
                    <MiniCard />
            </div>
        </div>

    )
};

export default Game;


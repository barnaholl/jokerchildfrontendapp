import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from "axios";
import {Button, Card} from 'react-bootstrap';
import "../game.css"
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import MiniCard from "../1small/MiniCard"


export default function WelcomePage() {
    return (
        <div>
            <PinkInfo title="Joker Child" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            <div className="purplButt">
                <PurpleButton text="Belépek!" />
            </div>
                <MiniCard text="Diákként " text2="regisztrálok!" align="left" />
                <MiniCard text="Tanárként " text2="regisztrálok!" align="right" />
        </div>
    )
}

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {Card} from 'react-bootstrap';
import "./pinkInfo.css"

export default function PinkInfo(props) {


    return (
        <div className='test'>
            <p style={{fontSize:"50px"}}>{props.title}</p>
            <p>{props.text}</p>
        </div>
    )
}

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {Button, Card} from 'react-bootstrap';
import "./game.css"

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
            <Card style={{ borderColor: '#7749f8', borderWidth: '4px', borderRadius: '15px' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>

    )
};

export default Game;


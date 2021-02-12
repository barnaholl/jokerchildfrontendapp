import React from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import PurpleButton from "../1small/PurpleButton";


export default function AddCard() {
    return (
        <div>
            <h1>Itt tudsz hozzáadni új kártyát a játékhoz!</h1>
            <div>
                <div>
                    <p>Kártya azonosító megadása:</p>
                    <input type="text" name="id" />
                </div>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                               Kérdés megadásához kattints ide!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                            <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Mi a kérdés?</Form.Label>
                                        <Form.Control type="question" placeholder="Írd ide a kérdést!"/>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Helyes válaszok:</Form.Label>
                                        <Form.Control type="goodAnswers" placeholder="pl.: A nap süt, Meleg van, Nem esik a hó" />
                                        <Form.Text className="text-muted">
                                            A válasz kifejezéseket vesszővel kell elválasztani.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Helytelen válaszok:</Form.Label>
                                            <Form.Control type="badAnswers" placeholder="pl.: A nap süt, Meleg van, Nem esik a hó" />
                                            <Form.Text className="text-muted">
                                            A válasz kifejezéseket vesszővel kell elválasztani.
                                            </Form.Text>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            Kérdés megadásához kattints ide!
                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Mi a kérdés?</Form.Label>
                                        <Form.Control type="question" placeholder="Írd ide a kérdést!"/>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Helyes válaszok:</Form.Label>
                                        <Form.Control type="goodAnswers" placeholder="pl.: A nap süt, Meleg van, Nem esik a hó" />
                                        <Form.Text className="text-muted">
                                            A válasz kifejezéseket vesszővel kell elválasztani.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Helytelen válaszok:</Form.Label>
                                            <Form.Control type="badAnswers" placeholder="pl.: A nap süt, Meleg van, Nem esik a hó" />
                                            <Form.Text className="text-muted">
                                            A válasz kifejezéseket vesszővel kell elválasztani.
                                            </Form.Text>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                            Kérdés megadásához kattints ide!
                    </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Mi a kérdés?</Form.Label>
                                        <Form.Control type="question" placeholder="Írd ide a kérdést!"/>
                                        
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Helyes válaszok:</Form.Label>
                                        <Form.Control type="goodAnswers" placeholder="pl.: A nap süt, Meleg van, Nem esik a hó" />
                                        <Form.Text className="text-muted">
                                            A válasz kifejezéseket vesszővel kell elválasztani.
                                        </Form.Text>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Label>Helytelen válaszok:</Form.Label>
                                            <Form.Control type="badAnswers" placeholder="pl.: A nap süt, Meleg van, Nem esik a hó" />
                                            <Form.Text className="text-muted">
                                            A válasz kifejezéseket vesszővel kell elválasztani.
                                            </Form.Text>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
                <PurpleButton text="Kártya hozzáadása" />
            </div>
        </div>
    )
}

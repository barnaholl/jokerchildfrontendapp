import React, { useContext, useState, useEffect } from 'react'
import PinkInfo from "../1medium/PinkInfo"
import PurpleButton from "../1small/PurpleButton"
import "./getId.css"
import urhajos from "../pics/urhajos.png"
import urhajoshata from "../pics/urhajoshata.png"
import felho from "../pics/felho.png"
import nap from "../pics/nap.png"
import "./getId.css"
import "./answer.css"

import "./questions.css"
import { CardContext, AnswerIdContext } from '../context/CardContext'
import { useHistory } from 'react-router-dom'

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function DndTest() {

    const context = useContext(CardContext);
    const answerIdContext = useContext(AnswerIdContext)
    let goodWords = [];


    useEffect( () => {
        setAnswers();
    }, [])
    const [question,setQuestion] = useState('')
    const setAnswers = () => {
        let allWords = context.card.exercises[answerIdContext.answerId].answer.split(";");
        goodWords = allWords[0].split(",");
        let badWords = allWords[1].split(",");
        const newW = goodWords.concat(badWords);
        setQuestion(context.card.exercises[answerIdContext.answerId].question);
        setState( () => {
            return {
                words: newW,
                items: getItems(newW.length, newW),
                selected: getItems(0),
            }
        })
    }

    const [state,setState] = useState({
        words: [],
        items: [],
        selected: [],
        
    })

    // fake data generator
    const getItems = (count, w) =>
        Array.from({ length: count }, (v,k) => k).map(k => ({
            id: `item-${k}`,
            content: w[k]
        }));



    // a little function to help us with reordering the result
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };
     // Moves an item from one list to another list.
    const move = (source, destination, droppableSource, droppableDestination) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSource.index, 1);

        destClone.splice(droppableDestination.index, 0, removed);

        const result = {};
        result[droppableSource.droppableId] = sourceClone;
        result[droppableDestination.droppableId] = destClone;

        return result;
    };

    const grid = 8;
    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',
        margin: `0 0 ${grid}px 0`,
        borderRadius: '20px',
        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'grey',
        height: '35px',
        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = isDraggingOver => ({
        padding: grid,
        width: 250,
        height: '100%',
    });



     // A semi-generic way to handle multiple lists. Matches the IDs of the droppable container to the names of the source arrays stored in the state.
    const id2List = {
        droppable: 'items',
        droppable2: 'selected'
    };

    const getList = id => state[id2List[id]];

    const onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                getList(source.droppableId),
                source.index,
                destination.index
            );


            if (source.droppableId === 'droppable2') {
                setState({
                    items: state.items,
                    selected: items
                });
            } else {
                setState({
                    items: items,
                    selected: state.selected
                });
            }

            
        } else {
            const result = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination
            );

            setState({
                items: result.droppable,
                selected: result.droppable2
            });
        }
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <PinkInfo text={question}/>
            <div className="inline">
            
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <div
                        className="firstDroppable"
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}>
                        <div>
                <p>Válasz lehetőségek:</p>
            </div>
                        {state.items.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}>
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
            </div>
            <div className="inline">
            <Droppable droppableId="droppable2">
                {(provided, snapshot) => (
                    <div
                        className="secondDroppable"
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}>
                            <div>
                <p>Ide húzd a válaszaid:</p>
            </div>
                        {state.selected.map((item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )}>
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
        <PurpleButton text="Kész!" />
        </DragDropContext>
    );
}


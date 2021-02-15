import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {getIsSessionActiveByUserId} from "../context/ApiCalls"
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const Navbar1 = () => {

    const [isSessionActive,setIssessionActive]=useState(null);

    useEffect(()=>{
        getIsSessionActiveByUserId(0) // fix value until login is not implemented
            .then((data)=>{
                setIssessionActive(data.data);
            })
    })

  return (

    <div>
        {isSessionActive==null ? 
        (
            <div></div>
        ) 
        : 
        (
            <div>
                <header>
                    <Link to={"/"}>Home</Link>
                    {isSessionActive==true ?
                    (
                        <Link to={"/questions"}>Játék</Link>
                    ) 
                    :
                    (
                        <Link to={"/getid"}>Játék</Link>
                    )}
                    <Link to={"/Statistics"}>Statisztikák</Link>
                    <Navbar collapseOnSelect>
              <Navbar.Header>
                <Navbar.Brand>Logo</Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey="a" href="#">
                    Link1
            </NavItem>

                  <NavItem eventKey="b" href="#">
                    Link2
            </NavItem>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
                </header>
            </div>
        )}
    </div>
  );
};


export default Navbar1;
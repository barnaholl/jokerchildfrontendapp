import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import {getIsSessionActiveByUserId} from "../context/ApiCalls"


const Navbar = () => {

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
                </header>
            </div>
        )}
    </div>
  );
};


export default Navbar;
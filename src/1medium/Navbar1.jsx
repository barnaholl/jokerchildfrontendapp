import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './pinkInfo.css'
export default function Navbar1() {
  return (
    <div >
  <Navbar collapseOnSelect expand="lg"  style={{backgroundColor: "#7749f8", borderRadius: "20px", marginTop:"1vw", marginLeft:'1vw', marginRight: '1vw', fontFamily:"Courier New, courier, monospace", fontSize:'1vw'}} variant="dark">
    <Nav className="m-auto">
      <Nav.Link href="/">Kezdőlap</Nav.Link>
      <Nav.Link href="/getid">Játék</Nav.Link>
      <Nav.Link href="/statistics">Statisztikák</Nav.Link>
      <Nav.Link href="/profil">Profil</Nav.Link>
    </Nav>
  </Navbar>
    </div>
  )
}

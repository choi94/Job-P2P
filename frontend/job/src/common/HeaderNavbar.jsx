import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar,Nav,Juombo,Footer} from 'react-bootstrap';
import Main from '../Main/Main.jsx'
import Board from '../board/Board.jsx'

import './commom.css'

const HeaderNavbar =()=>{

    return(
<div className="Header">
  <Router>
  <Navbar collapseOnSelect expand="lg" bg="light" >
    <Navbar.Brand href="/">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' JOPP2P'}
    </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Board">탐색</Nav.Link>
          <Nav.Link href="#pricing">공지사항</Nav.Link>
          <Nav.Link href="/page">마이 페이지</Nav.Link>
          <Nav.Link href="#pricing">Board</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Sign in</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">REGISTER</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     </Navbar>
      <Route path="/Main" component={Main}/>
      <Route path="/Board" component={Board}/>
      </Router>
    </div>
    )
}

export default HeaderNavbar
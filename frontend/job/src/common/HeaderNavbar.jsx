import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar,Nav,Juombo,Footer} from 'react-bootstrap';
import Login from '../member/Login'
import Join from '../member/Join'
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
          <Nav.Link href="/board">탐색</Nav.Link>
          <Nav.Link href="#pricing">공지사항</Nav.Link>
          <Nav.Link href="#pricing">페이지</Nav.Link>
          <Nav.Link href="#pricing">Board</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Sign in</Nav.Link>
          <Nav.Link href="/join">REGISTER</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     </Navbar>
      <Route path="/main" component={Main}/>
      <Route path="/board" component={Board}/>
      <Route path="/login" component={Login}/>
      <Route path="/join" component={Join}/>
      </Router>
    </div>
    )
}

export default HeaderNavbar
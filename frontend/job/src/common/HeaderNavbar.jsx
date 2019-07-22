import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar,Nav,Juombo,Footer} from 'react-bootstrap';
import Main from '../Main/Main.jsx'
import Login from '../member/Login.jsx'
import Join from '../member/Join.jsx'
import Board from '../board/Board.jsx'
import Detail from '../board/Detail/Detail.jsx'

import './commom.css'

const HeaderNavbar =()=>{
    return(
  <Router>
  <Navbar collapseOnSelect expand="lg" className="Header"  >
      <Link to="/" className="navbar-brand">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' JOPP2P'}
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Board" className="nav-link">탐색</Link>
          <Link to="/Board2" className="nav-link">공지사항</Link>
        </Nav>
        <Nav>
          <Link to="/login" className="nav-link">Sign in</Link>
          <Link to="/Join" className="nav-link">Join</Link>
        </Nav>
      </Navbar.Collapse>
     </Navbar>
      <Route path={"/"} exact component = {Main} />
      <Route path="/Board" component={Board}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Join" component={Join}/>
      <Route path="/Detail" component={Detail}/>
      </Router>
    )
}

function scrollToTop(){
  let scroll = document.getElementsByClassName("Header");
    if(window.scrollToTop>=50)
    {
      scroll.addClass('.HeaderScroll')
    }
    else{
      scroll.removeClass('.HeaderScroll')
    }
};



export default HeaderNavbar
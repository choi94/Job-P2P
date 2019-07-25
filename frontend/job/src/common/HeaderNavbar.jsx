import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Navbar,Nav,Juombo,Footer} from 'react-bootstrap';
import Login from '../member/Login'
import Join from '../member/Join'
import Main from '../Main/Main.jsx'
import Board from '../board/Board.jsx'
import Detail from '../board/Detail/Detail.jsx'
import MyPage from '../mypage/MyPage.jsx'
import InfoUpdate from '../mypage/InfoUpdate.jsx'
import Drop from '../mypage/Drop.jsx'
import Write from '../board/Write/Write'

import './css/commom.css'

const HeaderNavbar =()=>{
   
    return(
  <Router>
  <Navbar collapseOnSelect expand="lg" className="Header"   variant="dark" >
      <Link to="/" className="navbar-brand">
      <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' JOP P2P'}
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/Board" className="nav-link">탐색</Link>
          <Link to="/Mypage" className="nav-link">Mypage</Link>
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
      <Route path="/Mypage" component={MyPage}/>
      <Route path="/Detail" component={Detail}/>
      <Route path="/InfoUpdate" component={InfoUpdate}/>
      <Route path="/Drop" component={Drop}/>
      <Route path="/Write" component={Write}/>
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
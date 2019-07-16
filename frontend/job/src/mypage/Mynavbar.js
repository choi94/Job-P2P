import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Page from "./Page"
import RecoPage from "./RecoPage"
import ScraPage from "./ScraPage"
import AlignPage from "./AlignPage"
import Info from "./Info"
import InfoUpdate from "./InfoUpdate"
import Resume from "./Resume"
import Password from "./Password"
import Drop from "./Drop"

const Mynavbar = () =>{
  return (
    <Router>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Job PtoP</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Nav className="mr-auto">
        <Nav.Link href="#">Features</Nav.Link>
        <Nav.Link href="/page">마이 페이지</Nav.Link>
      </Nav>
  </Navbar>
  <Route path="/page" component={Page}/>
  <Route path="/recopage" component={RecoPage}/>
  <Route path="/scrapage" component={ScraPage}/>
  <Route path="/alignpage" component={AlignPage}/>
  <Route path="/info" component={Info}/>
  <Route path="/infoupdate" component={InfoUpdate}/>
  <Route path="/resume" component={Resume}/>
  <Route path="/password" component={Password}/>
  <Route path="/drop" component={Drop}/>
  </Router>
  )
}

export default Mynavbar
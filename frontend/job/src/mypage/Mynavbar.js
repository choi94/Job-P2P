import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

const Mynavbar = () =>{
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Job PtoP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav>
          <Nav.Link href="/page">마이 페이지</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default Mynavbar
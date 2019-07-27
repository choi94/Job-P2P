import React, {Component} from 'react'
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
import Write from '../board/Write/Write.jsx'
import Trans from '../mypage/Trans'
import './css/commom.css'

class HeaderNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login_checked : sessionStorage.getItem('id')
        }
    }
    login_checking = e => {
        sessionStorage.setItem('id', e)
        this.setState({login_checked : sessionStorage.getItem('id')})
    }
    logout_checking = () => {
        sessionStorage.clear()
        this.setState({login_checked : sessionStorage.getItem('id')})
    }

    render() {
        return(
            <Router>
                <Navbar collapseOnSelect expand="lg" className="Header"  variant="dark" >
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
                      <Link to="/board" className="nav-link">탐색</Link>
                        {
                            this.state.login_checked ? <Link to="/mypage" className="nav-link">Mypage</Link> : null
                        }
                    </Nav>
                      {
                          this.state.login_checked ?
                          <Nav onClick={this.logout_checking}>
                              <Link to="/" className="nav-link">Logout</Link>
                          </Nav>
                            :
                          <Nav>
                              <Link to={{pathname : "/login"}} className="nav-link">Sign in</Link>
                              <Link to="/join" className="nav-link">Join</Link>
                          </Nav>
                      }
                  </Navbar.Collapse>
                 </Navbar>
                  <Route path="/" exact component = {Main} />
                  <Route path="/board" component={Board}/>
                  <Route path="/login" component={(props) => <Login {...props} logins={this.login_checking}/>}/>
                  <Route path="/join" component={Join}/>
                  <Route path="/mypage" component={MyPage}/>
                  <Route path="/detail" component={Detail}/>
                  <Route path="/infoUpdate" component={InfoUpdate}/>
                  <Route path="/drop" component={Drop}/>
                  <Route path="/write" component={Write}/>
                  <Route path="/trans" component={Trans}/>
            </Router>
        )
    }
}




export default HeaderNavbar
import React from 'react';
import HeaderNavbar from './common/HeaderNavbar.jsx'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Page from "./mypage/Page"
import Info from "./mypage/click/Info"
import InfoUpdate from "./mypage/click/InfoUpdate"
import Password from "./mypage/click/Password"
import Drop from "./mypage/click/Drop"
import SupMini from "./mypage/click/SupMini"

function App() {
  return (
    <div>
      <HeaderNavbar/>

      <Router>
        <Route path="/page" component={Page}/>
        <Route path="/info" component={Info}/>
        <Route path="/infoupdate" component={InfoUpdate}/>
        <Route path="/password" component={Password}/>
        <Route path="/drop" component={Drop}/>
        <Route path="/sup" component={SupMini}/>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import Mynavbar from './mypage/Mynavbar'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Page from "./mypage/Page"
import ResPage from "./mypage/ResPage"
import SupPage from "./mypage/SupPage"
import Info from "./mypage/Info"
import InfoUpdate from "./mypage/InfoUpdate"
import Resume from "./mypage/Resume"
import Password from "./mypage/Password"
import Drop from "./mypage/Drop"

function App() {
  return (
    <div>
      <Mynavbar></Mynavbar>

      <Router>
        <Route path="/page" component={Page}/>
        <Route path="/respage" component={ResPage}/>
        <Route path="/suppage" component={SupPage}/>
        <Route path="/info" component={Info}/>
        <Route path="/infoupdate" component={InfoUpdate}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/password" component={Password}/>
        <Route path="/drop" component={Drop}/>
      </Router>
    </div>
  );
}

export default App;

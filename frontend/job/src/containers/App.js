import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Hello from '../components/Hello.jsx';
import Mynavbar from './Mynavbar.js';

class App extends Component{

  constructor(props){
    super()
  }
  render(){
    return (
      <div className='wrapper'>
        <Mynavbar></Mynavbar>
        <Hello name='홍길동...'></Hello>
      </div>
        
    );
  }
}
export default App;

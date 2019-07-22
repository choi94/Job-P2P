import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
        <BrowserRouter>
        <App/></BrowserRouter>, document.getElementById('root'));
=======
import HeaderNavbar from './common/HeaderNavbar.jsx'

ReactDOM.render(
        <App/>, document.getElementById('root'));

>>>>>>> 538c11c0cae80e2bcf322cdad7517cadd25ff7ac
serviceWorker.unregister();

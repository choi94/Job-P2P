import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HeaderNavbar from './common/HeaderNavbar.jsx'

ReactDOM.render(
        <App/>, document.getElementById('root'));

serviceWorker.unregister();

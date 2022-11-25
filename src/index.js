/** React Imports */
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/** Root Component Imports */
import App from './App';

/** CSS Imports */
import './index.css';
import 'semantic-ui-css/semantic.css'

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

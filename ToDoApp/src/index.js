import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from './App';
import TodoApp from './TodoApp';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Router>
    <Route path="/" component={TodoApp}/>

  </Router>,

  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

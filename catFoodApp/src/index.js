import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import App from './components/App';
import Title from './components/Title.js';
import reportWebVitals from './reportWebVitals';
import SmallBlurb from './components/SmallBlurb.js'

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <App />
    <SmallBlurb />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

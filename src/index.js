import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainComponents from './components/mainComponents';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.render(
  <React.StrictMode>
        <BrowserRouter>
           <MainComponents/>
       </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Basic from './Basic';
import Sum from './Sum';
import './index.css';

ReactDOM.render(
  <div>
    <Sum a={3} b={2} />
    <Sum a={4} b={4} />
    <Sum a={5} b={6} />
    <Sum a={6} b={8} />
  </div>,
  document.getElementById('root')
);

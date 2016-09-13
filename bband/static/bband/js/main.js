import App from './app.js';
import React from 'react';
import ReactDom from 'react-dom';

// render app to html
const appDomElem = document.getElementById('app');
ReactDom.render(<App />, appDomElem);

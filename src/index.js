import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app'
import registerServiceWorker from './registerServiceWorker';

const API_KEY = "29cbf715b4ac786dc256d3345a211f81";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

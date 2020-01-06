import * as React from "react";
import * as ReactDom from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App';
ReactDom.render(React.createElement(HashRouter, null,
    React.createElement(App, null)), document.getElementById('root'));
// registerServiceWorker();
//# sourceMappingURL=index.js.map
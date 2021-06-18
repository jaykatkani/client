import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import { ContextProvider } from './SocketContext';
import './style.css';
ReactDOM.render(
     <ContextProvider>
     < App />
     </ContextProvider>, 
     document.getElementById('root')
     );


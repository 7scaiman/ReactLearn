import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getAPIRecourse } from './API/User';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
    <div>
        <App getAPIRecourse={getAPIRecourse} />
    </div>
);
 
import React from 'react';
import ReactoDOM from 'react-dom/client'
import { CounterApp } from './components/CounterAppExercise';
import './css/style.css'

ReactoDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode> 
        <CounterApp value={0} />
    </React.StrictMode>
)
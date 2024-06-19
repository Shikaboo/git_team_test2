import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './reset.css'
import "./common.css"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={'/Team_period_project/'}>
  <App />
  </BrowserRouter>
)
import React from 'react'
import ReactDOM from 'react-dom/client'
import { WebSite } from './WebSite'
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/css/styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <WebSite />
      </Router>
  </React.StrictMode>
)

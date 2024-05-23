import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import {   RouterProvider } from 'react-router-dom'
import router from './Router/router'
 
 
 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="w-[1920px] mx-auto">
    <RouterProvider router={router} />
    </div>

  </React.StrictMode>,
)

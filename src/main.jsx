import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
// import React from 'react'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import TablesGenerater from './component/TablesGenerater.jsx'
import SingleTableGenerater from './component/SingleTableGenerater.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"single-table",
        element:<SingleTableGenerater/>
      },
      {
        path:"multiple-tables",
        element:<TablesGenerater/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// does not need app.jsx when we use router

import './index.css'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home , About , Contact  }  from './components/Index.js'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = { <Layout/> }>

      <Route path ='' element = {<Home/> } />
      <Route path ='about' element = {<About/> } />
      <Route path ='contact' element = {<Contact/> } />
    </Route>
  ) 
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)

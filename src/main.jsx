import React from 'react'
import ReactDOM from 'react-dom/client';
import {RouterProvider,Route,createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import AboutPage from './pages/AboutPage.jsx'; 
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import './index.css'
 
const router = createBrowserRouter (
  createRoutesFromElements (
   <Route path="/" element= {<App/>}>
   <Route path="/" element= {<HomePage/>}/> 
   <Route path="/about" element= {<AboutPage/>}/>
   </Route>
  
 
   )
)
ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
  
);

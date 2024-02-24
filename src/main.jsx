import React from "react"
import ReactDOM from "react-dom/client";
import {RouterProvider,Route,createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import AboutPage from "./pages/AboutPage"; 
import App from "./App"
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import './index.css'
import ErrorPage from "./pages/ErrorPage";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions"; 

 
const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recipe/:id" element={<RecipePage />}>
        <Route path="/recipe/:id/ingredients" element={<Ingredients />} />
        <Route path="/recipe/:id/instructions" element={<Instructions />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />
  
);

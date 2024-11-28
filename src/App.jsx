import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import Home from './Home'
import Overview from './Overview'
import Dataint from './Dataint'
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  
  return (
   <BrowserRouter>
    <Routes>
      <Route index element = {<Home />}></Route>
      <Route path='./Home' element = {<Home />}></Route>
      <Route path='./Dataint' element = {<Dataint />}></Route>
      
    </Routes>
   </BrowserRouter>
 
  )
}

export default App




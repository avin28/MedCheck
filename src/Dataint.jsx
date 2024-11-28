import Nav from "./assets/Components/Nav.Jsx";
import React, { useState } from 'react';
import UserInput from "./assets/Components/Userinput";
import { CiWarning } from "react-icons/ci";
import Footer from "./assets/Components/Footer.jsx";
export default function Dataint(params) {
    return(
        <div class="Dataint">
        <Nav></Nav>

        <div>
        <h1 className="text-black text-xxl text-center font-extrabold my-10 ">
        Drug Interaction
       </h1>
       <h3 className="my-6 text-black text-xl text-center">Check Interactions between Drugs , Supplements and Foods</h3>
       </div>
       <div className="flex justify-center my-4">
          <UserInput></UserInput>
          
       </div>
       <div className="grid grid-cols-4 my-6 items-center ">
       <div className="col-span-1"></div>
        <p className="text-black-800 mx-6 col-span-2">Not all drugs interact, and not every interaction means you must stop taking one of your medications. Always consult your healthcare provider about how drug interactions should be managed before making any changes to your current prescription.</p>
        <CiWarning fontSize="5em"/>
       </div>
       <Footer/>
       </div>
  
    )
};


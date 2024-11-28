 import main from './assets/homebg.png'
 import { FaArrowCircleRight } from "react-icons/fa";
 import { FaAnglesRight } from "react-icons/fa6";
 import Overview from './Overview'
 import Dataint from './Dataint'
 import { Link } from 'react-router-dom';

export default function Home() {
    return(
    <div className="w-screen h-screen grid grid-cols-2 ">
    <div className="w-full h-full bg-blue">
      <>
       <h1 className="text-5xl text-white mx-8 py-14 font-bold"> MedCheck.</h1>
       </>
       <>
       <h4 className="text-white mx-8 font-semibold text-4xl">Check Interaction With Multiple Drugs</h4>
       <p className="text-white mx-8 font-thin py-4">Consult your healthcare provider about how drug interactions
       should be managed</p>
      
        </>
        <div className="flex my-4 mx-24 py-10 justify-end items-center">
        <div className='flex p-2 items-center'>
            <Link to='./Dataint' className="text-white">Get Started </Link>
            <FaArrowCircleRight color='White' className='mx-2' />
            </div>
            <button className="bg-yellow p-2 mx-2 rounded-sm font-medium flex items-center"            
            ><Link to='./Overview'>Explore</Link>
            <FaAnglesRight className='mx-2' />
            </button>
        </div>   
    </div>
    <div className="w-full h-full bg-yellow">
    
       <img src={main}></img>
    </div>
 </div>)
};

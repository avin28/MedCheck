import { Link } from "react-router-dom";
import Home from "../../Home.jsx";
import Overview from "../../Overview.jsx";
import Dataint from "../../Dataint.jsx";

export default function Nav(){
    return(
        <Nav className="navbar bg-blue w-full h-16">
        <div className="flex flex-stretch">
        <div >
          <h2 className="text-white font-bold mx-4">MedCheck.</h2>
          </div>
          <div className="text-white justify-center mx-20 font-semibold">
          <ul className="flex justify-center mx-24">
            <li><Link to="./Dataint">Drug Interaction</Link></li>
            <li><Link to='/' className="mx-4">Food Interaction</Link></li>
            <li><Link to ='/' className="mx-4">Medi Click</Link></li>
            </ul>
          </div>
          <div className=" justify-items-end ">
          <Link to = './Overview'>
          <button className="bg-yellow p-2 mx-2 rounded-md font-medium "><h5>Explore</h5> </button></Link>
          </div>
        </div>
  
</Nav>
    )
}


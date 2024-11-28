export default function Footer(params) {
    return(
        <div className="w-screen h-20 grid grid-cols-4 bottom-0 mb-0 align-baseline">
        <div className="w-21 h-full bg-blue col-span-1">
          <>
           <h1 className="text-xl text-white mx-8 py-14 font-bold"> MedCheck.</h1>
           </>
          
        </div>
        <div className="w-75 h-full bg-yellow flex col-span-3">      
           <ul className="flex text-blue my-16 font-semibold px-8">   
           <li><Link to ="./Dataint">Drug Interaction</Link></li>         
            <li className="px-4">Food Interaction</li>
            <li className="mx-2">Medi Click</li>
           </ul>
          
            <div className="flex my-4 mx-24 py-10 justify-end">
                <Link to = './Overview'>
                <button className="bg-blue p-2 mx-2 rounded-md font-medium text-white"
                >Explore</button></Link>
            </div>  
        </div>
     </div>
    )
};

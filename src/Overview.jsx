import Nav from './assets/Components/Nav.jsx'
import Footer from "./assets/Components/Footer.jsx";
import med from './assets/overview assets/Med.jpeg'
import hp from './assets/overview assets/Handpill.jpeg'
import doc from './assets/overview assets/Doc.jpeg'
import box from './assets/overview assets/Tabbox.jpeg'
import equip from './assets/overview assets/Handequip.jpeg'
import hequip from './assets/overview assets/Handequip.jpeg'
export default function Overview(params) {
    return(
        <div class="Overview">
        <Nav></Nav>
        <div>
            <h1 className='text-center my-4 font-semibold text-xl'>Explore Medicheck</h1>
            <h4 className='font-semibold text-center my-6 bg-yellow p-2 text-blue'> Your One-Stop Solution for Drug & Food Insights</h4>
        </div>
        <h3 className='font-semibold text-center'>Why Medicheck?</h3>

        <div className='border-b-blue my-8'>
        <div className='col-span-1'></div>
            <div className='mx-4 col-span-3'>
                
                <p className='text-center'>MediCheck helps you make informed decisions about your health by
providing easy access to drug and food interaction information.
Whether you're managing multiple medications or curious about the
impact of food on your prescription</p>
            </div>
            <div>
                <img src={med} class="medim" className='rounded-md shadow-md'></img>
            </div>
        </div>
        <div className='my-16'>
        <h3 className='font-semibold text-center'>How it works?</h3>
        <div class="grid lg:grid-cols-3 gap-6 p-6">
    
        <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={hp} alt="Card Image" class="w-full h-48 object-cover"></img>
        <div class="p-4">   
        <h3 class="text-xl font-semibold text-gray-800">Input Your Details</h3>        
         <p class="text-gray-600 mt-2 font-bold">Input Your Medications or Product</p>
         <p class="mt-4 inline-block text-blue-500 hover:underline">"Start by adding the names of the medications, supplements, or food items you're consuming. You can type the names or upload a list for quick access. MediCheck ensures your inputs are securely processed and analyzed."</p>            
        </div>
        </div>
    
    
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src= {box} alt="Card Image" class="w-full h-48 object-cover"></img>
        <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800"> Analyze Interactions</h3>
            <p class="text-gray-600 mt-2 font-bold">Get Accurate Interaction Results</p>
            <p class="mt-4 inline-block text-blue-500 hover:underline">"cross-checks your inputs using a comprehensive database of drug and food interactions. It identifies potential risks, categorizes them by severity, and provides recommendations to help you make informed decisions."</p>
        </div>
    </div>

    
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={doc} alt="Card Image" class="w-full h-48 object-cover"></img>
        <div class="p-4">
            <h3 class="text-xl font-semibold text-gray-800">Review and Act</h3>
            <p class="text-gray-600 mt-2 font-bold">Review Recommendations</p>
            <p class="mt-4 inline-block text-blue-500 hover:underline">"Review the detailed interaction results, including severity levels, effects, and precautions. Take action based on these insights—whether it’s consulting your doctor, adjusting your intake, or avoiding certain combinations."</p>
        </div>
        </div>


   
        </div>

        </div>
        <div className=' border-b-2'>
        <h3 className='font-semibold text-center'>Drug to drug Interaction</h3>
        <div className='grid grid-cols-4 my-8 gap-4'>
          <div className='col-span-1'></div>
          <p className='col-span-1'>A drug-to-drug interaction is when the effect of a drug changes when taken with another drug.Drug-to-Drug interactions occur when two or more drugs react with each other, potentially leading to unexpected side effects.</p>
          <img src= {equip} className='h-25 rounded-md items-center'></img>
        </div>
        </div>
        <div className=' my-4'>
        <h3 className='font-semibold text-center'>Food to drug interactions</h3>
        <div className='grid grid-cols-4 my-8 gap-4'>
          <div className='col-span-1'></div>
          <p className='col-span-1'>Food-to-Drug interactions occur when certain foods impact the effectiveness of a drug or cause side effects. For instance, consuming grapefruit while on certain medications may lead to adverse reactions. Use MediCheck to avoid such risks by staying informed.</p>
          <img src= {hequip} className='h-25 rounded-md items-center'></img>
        </div>
        </div>
        <Footer/>
        </div>
    )
};

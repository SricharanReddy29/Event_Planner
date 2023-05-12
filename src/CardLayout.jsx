
import React, { useState } from 'react'; 
import { useEffect } from 'react';
import axios from 'axios';
import { useContent } from './ContProvider';
import {FaStar} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function CardLayout() {

const {data,setData}=useContent(); 

useEffect(()=>{
  const abortController=new AbortController();
 axios.get('http://localhost:3000/api/data/').then((res)=>{
  setData(res.data);
 })

 return(()=>{
  abortController.abort();
 })
  
},[])

const [showDate, setShowDate] = useState([]);


return (
  <div className="container mx-auto my-16 bg-slate-900 p-2">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {data.map((item,index) => (
        
        <div className="mb-8">
          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img className="w-full" src="https://source.unsplash.com/500x500/?wedding" alt="Event" />
            <div className="p-4">  
              <h2 className="font-bold text-xl mb-2">{item.org_name}</h2>
              <p className="text-gray-700 text-base">Location: {item.location}</p>
              <div class="flex  items-center">
              <div class="flex  flex-row justify-center items-center flex-nowrap space-x-4">
              <p className="text-gray-700 text-base">Veg/plate: {item.food_cost.veg}</p>
            
              <p className="text-gray-700 text-base">Non-Veg/plate{item.food_cost.non_veg}</p>
              </div>
              </div>
              <div class="flex  items-center">
              <div class="flex  flex-row justify-center items-center flex-nowrap">
                <FaStar  className="text-yellow-500"/>
              <p class="ml-2 text-lg font-bold text-sky-1000 dark:text-sky">{item.rating}.0</p>
              </div>
              </div>
              <Link to={`/venuedetails/${index}`}><p className="text-gray-700 text-base">More details</p></Link>
           
              <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={()=>setShowDate([...showDate,item._id])}
      >
      Check Availability
      </button>

      {showDate.includes(item.id) && ( 
        <div>
         <p className="text-red-900 text-base">Already Booked on: {item.Booked_on}</p>  
        </div>
      )}
       
    </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
      }

export default CardLayout; 












import React, { useState, useEffect } from 'react';
import { FiMenu } from "react-icons/fi";
import Sidebar from "./Sidebar";
import  Location  from "./Location";
import { useAuth } from "./AuthProvider";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useContent } from './ContProvider';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const VenueInfo = () => {
  const [venueInfo, setVenueInfo] = useState();
  const [loading,setLoading]=useState(false);
  const {data}=useContent();
  const {id}=useParams();

  useEffect(() => {
    setLoading(true);
    setVenueInfo(data[id]);
    console.log(data[id]);
    setLoading(false);
  }, []);

  return (
    
    <>
      <Header />
      {!loading ? (
        venueInfo && (
          <div className="container mx-auto px-4 py-8 bg-gray-100">
           <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
  <span className="text-sky-500">{venueInfo.org_name}</span> 
</h1>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
  {venueInfo.img && (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-xl font-bold">Album</p>
      <Slider
        dots={true}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
      >
        {venueInfo.img.map((item, index) => (
          <div key={index}>
            <img
              src={item.img}
              alt="Convention Hall"
              className="w-full h-auto rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  )}
</div>


              <div className="flex flex-col space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-xl font-bold">Rent: ₹{venueInfo.rent}</p>
                </div>

                {venueInfo.venueInfo && (
                  <>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-xl font-bold">Payment</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li className="text-lg font-medium"> Advance: {venueInfo.venueInfo.paymentAndBooking.advance}</li>
                        <li className="text-lg font-medium"> Payment After Event: {venueInfo.venueInfo.paymentAndBooking.paymentAfterEvent}</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-xl font-bold">Air Conditioning</p>
                      <p>{venueInfo.venueInfo.airConditioning}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-xl font-bold">Cuisines Allowed</p>
                      <p>{venueInfo.venueInfo.cuisinesAllowed}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-xl font-bold">DJ Policy</p>
                      <p>{venueInfo.venueInfo.djPolicy}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-xl font-bold">Alcohol Policy</p>
                      <p>{venueInfo.venueInfo.alcoholPolicy}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-xl font-bold">Outside Decoration</p>
                      <p>{venueInfo.venueInfo.outsideDecorationAllowed}</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <p className="text-xl font-bold">Rooms Available</p>
                      <ul className="list-disc ml-6 space-y-1">
                        <li className="text-lg font-medium"> Guest Rooms: {venueInfo.venueInfo.roomsAvailable.guestRooms}</li>
                        <li className="text-lg font-medium"> AC Rooms: {venueInfo.venueInfo.roomsAvailable.acRooms}</li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-xl font-bold">Parking Space</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li className="text-lg font-medium"> Bike Parking: {venueInfo.venueInfo.parkingSpace.bikeParking}</li>
                      <li className="text-lg font-medium"> Car Parking: {venueInfo.venueInfo.parkingSpace.carParking}</li>
                      <li className="text-lg font-medium"> Valet Parking: {venueInfo.venueInfo.parkingSpace.valetParkingAvailable}</li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-xl font-bold">Contact</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>Phone: {venueInfo.contact}</li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-xl font-bold">I'm Interested</p>
                  </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )
      ) : (
        <h1>Loading...</h1>
    )}
    <Footer />
    </>
   
  ); 
};

export default VenueInfo;


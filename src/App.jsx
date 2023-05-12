import React from 'react';
/* import Header from './Header';
import HeroSection from './HeroSection';
import CardLayout from './CardLayout';
import Footer from './Footer'; */
import Home from './Home';
import {Routes,Route} from 'react-router-dom';
import SignIn from './Signin';
import Signup from './signup';
import Profile from './profile';
import VenueInfo from './VenueInfo';
function App() {
  return (
   <>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='signin' element={<SignIn/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='venuedetails/:id' element={<VenueInfo/>}/>
     </Routes>
   </>
  );
}

export default App;
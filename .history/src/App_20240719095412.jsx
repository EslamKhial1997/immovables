import { useState } from "react";

import "./App.css";
import Navbar from "./Components/layout/Navbar";
import OurProjects from "./Components/contents/OurProjects";
import OurAchievements from "./Components/contents/OurAchievements";
import Footer from "./Components/layout/Footer";


function App() {
 

  return (
    <>
    <Navbar/>
    <OurProjects/>
    <OurAchievements/>
    <
    <Footer/>
    </>
  );
}

export default App;
// import React from 'react'

// const App = () => {
//   return (
//     <div>
//      <h2 className='text-gray-100 hover:text-blue-600 bg-sky-500/100'>Hello world</h2> 
//     </div>
//   )
// }

// export default App

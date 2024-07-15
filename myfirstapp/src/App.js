import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import Navbar from "./component/Navbar";

import About from "./component/About";
import Contact from "./component/Contact";




/**Functional Based component - PARENT CLASS */
function App() {
  return ( 
        <BrowserRouter>
          <Routes>
            
            <Route path="/" element={<Navbar />}> 
              <Route index element={<Home />} />
              {/*  localhost:3000/             =====> HOME SCREEN WILL BE LOADED */}
              
              <Route path="about" element={<About />} />
              {/*  localhost:3000/about         =====> ABOUT SCREEN WILL BE LOADED */}
              <Route path="contact" element={<Contact />} />
              {/*  localhost:3000/contact         =====> CONTACT SCREEN WILL BE LOADED */}
             
            </Route>
          </Routes>
        </BrowserRouter> 
  );
}

export default App;

import React from "react";
import { BrowserRouter, Outlet } from "react-router-dom";
import {About,Contact,Feedbacks,Experience,Hero,Loader, StarsCanvas,Navbar,Tech,Works} from "./components/index" ;

import { createBrowserRouter } from "react-router-dom";


function App() {


  return (
    <>
      <BrowserRouter>
          <div className="relative bg-primary">

            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar></Navbar>
              <Hero></Hero>
            </div>

            <About></About>
            <Experience></Experience>
            <Tech></Tech>
            <Works></Works>
            <Feedbacks></Feedbacks>

            <div className="relative z-0">

              <Contact></Contact>
              <StarsCanvas></StarsCanvas>

            </div>
            

          </div>

      </BrowserRouter>
    </>
  )
}

export default App
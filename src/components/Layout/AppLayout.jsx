import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../UI/Header"
import Footer from "../UI/Footer"
const AppLayout = () => {
  return (
  
    <div className="text-white bg-black ">
      <Header />
   
        <Outlet />

      <Footer />
    </div>
  
  )
}

export default AppLayout
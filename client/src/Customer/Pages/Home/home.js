import React, { useEffect } from 'react';
import lity from 'lity';
import SideBar from '../../components/SideBar';
import NavBar from '../../../components/NavBar';
const CustomerHome = () => {
    
    return(
        <div className="h-screen flex">
        <section className="fixed h-full">
              <SideBar />
        </section>
        <section className="flex-grow">
                      <div className="fixed w-full fixed top-0 left-0 w-full z-10">
                          <NavBar  />
                      </div>
                      <div className="p-[90px;] h-full"></div>
                </section>
        </div>
    )
}
export default CustomerHome;
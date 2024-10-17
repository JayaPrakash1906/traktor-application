import React, { useState } from 'react';
import SideBar from "../../../Finance/Components/Sidebar";
import NavBar from "../../../components/NavBar";

const Updatefunding = () => {
  const [formData, setFormData] = useState({
   funding_form: {
      startup_name: '',
      funding_type: '',
      amount: '',
      purpose: '',
      funding_date: '',
      reference_number: '',
      document: '',
      description: ''
      
    }
  });
  
  const handleChange = (e) => {
            const { name, value } = e.target;
                  setFormData((prevData) => ({
                  ...prevData,
                  funding_form: {
                  ...prevData.funding_form,
                  [name]: value,
                  },
    }));
    console.log(formData); // Log formData here to avoid multiple prints during re-rendering
  };

  return (
    <div>
          <div className="h-screen flex ">
                <section id="SideBar" className="fixed h-full">
                    <SideBar />
                </section>
                <section id="" className="flex-grow">
                <div className="fixed w-full">
                    <NavBar />
                  </div>
          <div className="p-[90px;] h-full">
            <div className="shadow-lg px-6 py-6">
              <div className="text-xl text-dmsans">Funding Form</div>
              <div className="mt-6">
                <div className="grid grid-cols-2 gap-5 px-6">

                  {/* Startup Name */}
                  <div className="relative pt-6 ">
                    <select
                      id="options"
                      className="peer bg-gray-50 border border-gray-300 h-[45px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="startup_name"
                      onChange={handleChange}
                    >
                      <option value="Webinar">Webinar</option>
                    </select>
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-9 z-10 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-500">
                      Select Startup
                    </label>
                  </div>

                  {/* Funding Type */}
                  <div className="relative mt-6">
                    <select
                      id="options"
                      name="funding_type"
                      className="block px-2.5 pb-2.5 pt-4 w-full h-[45px] text-sm bg-transparent rounded-lg border-1 border-gray-300"
                      onChange={handleChange}
                    >
                      <option value="">Select option</option>
                      <option value="Funding Distributed">Funding Distributed</option>
                      <option value="Funding Utilized">Funding Utilized</option>
                    </select>
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2 peer-focus:text-blue-600">
                      Select Funding type
                    </label>
                  </div>

                  {/* Amount */}
                  <div className="relative mt-4">
                    <input
                      id="text"
                      type="text"
                      name="amount"
                      className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm rounded-lg border border-gray-300"
                      onChange={handleChange}
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                      Amount
                    </label>
                  </div>

                  {/* Purpose */}
                  <div className="relative mt-4">
                    <input
                      type="text"
                      name="purpose"
                      className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm rounded-lg border border-gray-300"
                      onChange={handleChange}
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                      Purpose
                    </label>
                  </div>

                  {/* Funding Date */}
                  <div className="relative mt-4">
                    <input
                      type="date"
                      name="funding_date"
                      className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm rounded-lg border border-gray-300"
                      onChange={handleChange}
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                      Funding Date
                    </label>
                  </div>

                  {/* Reference Number */}
                  <div className="relative mt-4">
                    <input
                      type="number"
                      name="reference_number"
                      className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm rounded-lg border border-gray-300"
                      onChange={handleChange}
                    />
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                      Reference Number
                    </label>
                  </div>

                </div>
              </div>

              <div className="px-6">
                {/* Document Upload */}
                <div className="relative mt-4">
                  <input
                    type="file"
                    name="document"
                    className="block px-2.5 pb-2.5 pt-4 w-full md:h-[60px] text-sm rounded-lg border border-gray-300"
                    onChange={handleChange}
                  />
                  <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                    Upload document (if any)
                  </label>
                </div>

                {/* Description */}
                <div className="relative mt-4">
                  <textarea
                    name="description"
                    rows="4"
                    className="block px-2.5 pb-2.5 pt-4 w-full md:h-[150px] text-sm rounded-lg border border-gray-300 resize-none"
                    onChange={handleChange}
                  />
                  <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                    Description
                  </label >
                </div>

                {/* Submit Button */}
                <div className="relative mt-6 ">
                  <button className="border p-1 rounded-lg" style={{ backgroundColor: '#afdade' }}>
                    Submit
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    
    </div>
  );
};

export default Updatefunding;

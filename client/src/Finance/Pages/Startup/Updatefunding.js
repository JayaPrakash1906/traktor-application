<<<<<<< HEAD
import React, { useState } from 'react';
import SideBar from "../../../Finance/Components/Sidebar";
import NavBar from "../../../components/NavBar";

const Updatefunding = () => {
  const [formData, setFormData] = useState({
   funding_form: {
=======
import React, { useState, useEffect } from 'react';
import SideBar from "../../../Finance/Components/Sidebar";
import NavBar from "../../../components/NavBar";
import axios from 'axios';
import toast from 'react-hot-toast';
const Updatefunding = () => {
  const [formData, setFormData] = useState({
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
      startup_name: '',
      funding_type: '',
      amount: '',
      purpose: '',
      funding_date: '',
      reference_number: '',
      document: '',
      description: ''
<<<<<<< HEAD
      
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
=======
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
        setFormData((prevData)=>({ 
            ...prevData,
            [name]: value,
        }))
  };
  console.log(formData);
  const handleSubmit = async(e) => {
        e.preventDefault();
        try
        {
            const result = await axios.post('http://localhost:3003/api/v1/finance/funding-update', formData);
            console.log(result);
            if(result)
            {
              toast.success("Updated Successfully")
            }
        }
        catch(err)
        {
            console.log(err.response.status===400);
            if(err.response.status == 400)
            {
                toast.error('Fields required')
            }
            else if(err.response.status == 401)
            {
              toast.error("Team has'nt got funds");
            }
        }
  }
  const [ApiData, setApiData] = useState([]);
  const APIData = async() => {
    try
    {
        const result = await axios.get('http://localhost:3003/api/v1/fetch-startup'); 
        setApiData(result.data.rows);
        console.log(result)
    }
    catch(err)
    {
        console.log(err);
    }
  }
  console.log(ApiData);
  useEffect(() => {
    APIData();
  }, [])
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
            <form onSubmit={handleSubmit}>
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
            <div className="shadow-lg px-6 py-6">
              <div className="text-xl text-dmsans">Funding Form</div>
              <div className="mt-6">
                <div className="grid grid-cols-2 gap-5 px-6">
<<<<<<< HEAD

                  {/* Startup Name */}
                  <div className="relative pt-6 ">
                    <select
                      id="options"
                      className="peer bg-gray-50 border border-gray-300 h-[45px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="startup_name"
                      onChange={handleChange}
                    >
                      <option value="Webinar">Webinar</option>
=======
                  <div className="relative pt-6 ">
                    <select
                      id="options"
                      className="peer border border-gray-300 h-[47px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      name="startup_name"
                      onChange={handleChange}
                    >
                    {Array.isArray(ApiData) && ApiData.length > 0 ? (
                        ApiData.map((dataObj, Index) => (
                            <option key={Index} value={dataObj.email_address} >{dataObj.startup_name}</option>
                        ))
                    ): (
                        <option>No data</option>
                    )}
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
                    </select>
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-9 z-10 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-500">
                      Select Startup
                    </label>
                  </div>
<<<<<<< HEAD

                  {/* Funding Type */}
=======
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
                  <div className="relative mt-6">
                    <select
                      id="options"
                      name="funding_type"
<<<<<<< HEAD
                      className="block px-2.5 pb-2.5 pt-4 w-full h-[45px] text-sm bg-transparent rounded-lg border-1 border-gray-300"
=======
                      className="block px-2.5 pb-2.5 pt-4 w-full h-[47px] text-sm bg-transparent rounded-lg border-1 border-gray-300"
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
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
<<<<<<< HEAD

                  {/* Amount */}
=======
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
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
<<<<<<< HEAD

                  {/* Purpose */}
=======
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
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
<<<<<<< HEAD

                  {/* Funding Date */}
=======
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
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
<<<<<<< HEAD

                  {/* Reference Number */}
=======
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
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
<<<<<<< HEAD

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
=======
              <div className="px-6">
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
                <div className="relative mt-4">
                  <textarea
                    name="description"
                    rows="4"
                    className="block px-2.5 pb-2.5 pt-4 w-full md:h-[150px] text-sm rounded-lg border border-gray-300 resize-none"
                    onChange={handleChange}
                  />
                  <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 bg-white px-2">
                    Description
<<<<<<< HEAD
                  </label >
                </div>

                {/* Submit Button */}
=======
                  </label>
                </div>
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
                <div className="relative mt-6 ">
                  <button className="border p-1 rounded-lg" style={{ backgroundColor: '#afdade' }}>
                    Submit
                  </button>
                </div>
              </div>
<<<<<<< HEAD

            </div>
          </div>
        </section>
      </div>
    
=======
            </div>
            </form>
          </div>
        </section>
      </div>
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
    </div>
  );
};

export default Updatefunding;

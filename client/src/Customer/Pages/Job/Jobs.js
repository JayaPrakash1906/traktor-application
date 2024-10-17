import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { FaEllipsisV } from "react-icons/fa";
import Addjob from "./AddJob";
function Jobs() {
        const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const [openPopUp, setOpenpopup] = useState(false);
  const handleShow = (e) => setOpenpopup(true);
  const ScheduleButton = () => {
    console.log("working");
  };
  const [formData, setFormData] = useState({
        
        role:'',
        duration:'',
        job_type:'',
        renumeration:'',
        requirements:'',
        description:''   
        
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
    <div className="h-screen flex">
          <section className="fixed h-full">
                <SideBar />
          </section>
          <section className="flex-grow">
                        <div className="fixed w-full fixed top-0 left-0 w-full z-10">
                            <NavBar  />
                        </div>
                        <div className="p-[90px;] h-full">
                        <h1 className="text-gray-500 text-3xl font-semibold">Job</h1>
                        <div className={`border mt-10 rounded-md w-full`}>
                                        <div className="p-3 font-semibold text-gray-500 text-xl pb-7">All Jobs</div>
                                        <div className="grid grid-cols-2 gap-5 px-10">
                                        <div className="flex justify-between items-center px-3">
                                            <input type="text" placeholder="Search Jobs" className="w-full rounded-3xl focus:ring-green-400"/></div>
                                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md mr-3" style={{ backgroundColor: '#afdade' }} onClick={handleShow}>
                                                   Post a New Job
                                                </button>
                                            </div>
                                                
                                        </div>
                                        <div className="m-12 bg-white border border-gray-100 shadow-md rounded-md overflow-x-auto">
                                                <table class="table-fixed w-full">
                                                        <thead>
                                                                <tr>
                                                                        <th className="px-5 py-2 text-left text-green-600">Role</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Duration</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Reqquirements</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Paid/Unpaid</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Created at</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Responses </th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Actions</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                        
                                                              
                                                                <tr>
                                                                        <td colSpan="7" className="text-center px-5 py-2">
                                                                                <div role="status" className="flex justify-center items-center">
                                                                                                <svg aria-hidden="true" class=" w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                                                                </svg>
                                                                                                <span class="sr-only">Loading...</span>
                                                                                </div>
                                                                        </td>
                                                                </tr>
                                                                

                                                        </tbody>
                                                        
                                                </table>
                                                <div class="flex justify-end mt-5">
                                                                <div className="p-3">
                                                                        <label for="rows-per-page" class="mr-2 text-sm">Rows per page:</label>
                                                                        <select id="rows-per-page" class="border border-gray-600 rounded p-0 border-b-1 border-t-0 border-l-0 border-r-0 focus:ring-0">
                                                                                <option value="5">5</option>
                                                                                <option value="10">10</option>
                                                                                <option value="15">15</option>
                                                                        </select>
                                                                </div>
                                                                <div>
                                                                        <span>1-5 of 7</span>
                                                                        <button class="ml-2 text-gray-500">Prev</button>
                                                                        {/* {
                                                                                numbers.map((n, i) => (
                                                                                        <button key={i} onClick={changeCPage} className={` ${currentPage === n ? 'active': ''}`}></button>
                                                                                ))
                                                                        } */}
                                                                        <button class="ml-2 text-gray-500">Next</button>
                                                                </div> 
                                                </div>
                                            </div> 
                      </div>     
        
          
        </div>
        
        </section>
                                                        <Addjob isVisible={openPopUp} onClose={() => setOpenpopup(false)}>
                                                                <form onSubmit={ScheduleButton}>
                                                                <div className="font-semibold">Post New Job</div>
                                                                <div className="grid grid-cols-2 gap-2">
                                                                {/*Role */}
                                                                <div className="relative mt-5">
                                                                <input
                                                                type="text"
                                                                id="floating_outlined"
                                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                                placeholder=" "
                                                                name="role"
                                                                onChange={handleChange}
                                                                />
                                                                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                                                Role
                                                                </label>
                                                                </div>
                                                                {/*Duration */}
                                                                <div className="relative mt-5">
                                                                <input
                                                                type="text"
                                                                id="floating_outlined"
                                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                                placeholder=" "
                                                                name="duration"
                                                                onChange={handleChange}
                                                                />
                                                                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                                                Duration
                                                                </label>
                                                                </div>
                                                                { /*JobType*/}
                                                                <div className="relative mt-5">
                                                                <select
                                                                id="options"
                                                                className="peer bg-gray-50 border border-gray-300 h-[45px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                                name="job_type"
                                                                onChange={handleChange}
                                                                >
                                                                <option value="">  Select </option>
                                                                <option value="Internship">Internship</option>
                                                                <option value="Employment">Employment</option>
                                                                <option value="Fulltime">Full Time</option>
                                                                <option value="Parttime">Part Time</option>
                                                                <option value="Project">Project</option>
                                                                </select>
                                                                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 z-10 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-500">
                                                                Job Type
                                                                </label>
                                                                </div>
                                                                {/*Renumeration */}
                                                                <div className="relative mt-5">
                                                                <select
                                                                id="options"
                                                                className="peer bg-gray-50 border border-gray-300 h-[45px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                                                name="renumeration"
                                                                onChange={handleChange}
                                                                >
                                                                <option value="">   Select </option>
                                                                <option value="paid">Paid</option>
                                                                <option value="unpaid">Unpaid</option>
                                                                <option value="variable">Variable</option>
                                                                </select>
                                                                <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 z-10 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-500">
                                                                Renumeration
                                                                </label>
                                                                </div>
                                                              
                                                                </div>
                                                                {/*Requirements */}
                                                                <div className="relative mt-5">
                                                                <textarea
                                                                name="requirements"
                                                                rows="4"
                                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                                                                placeholder=" "
                                                                onChange={handleChange}
                                                                />
                                                                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                                                Requirements
                                                                </label>
                                                                </div>
                                                                {/*description*/}
                                                                <div className="relative mt-5">
                                                                <textarea
                                                                name="description"
                                                                rows="4"
                                                                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
                                                                placeholder=" "
                                                                onChange={handleChange}
                                                                />
                                                                <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                                                description
                                                                </label>
                                                                </div>
                                                                {/*PostJob */}
                                                                <div className="relative mt-5 flex justify-end mr-3">
                                                                <button
                                                                className="shadow-sm rounded-xl text-gray-800 font-semibold px-1 py-1"
                                                                style={{ backgroundColor: "#afdade" }}
                                                                >
                                                                Post Job
                                                                </button>
                                                                </div>
                                                                </form>
                                                        </Addjob>
    </div>  
  );
}
export default Jobs;

import React from 'react'
import NavBar from '../../../components/NavBar'
import SideBar from '../../../Finance/Components/Sidebar'
import { FaPersonRifle } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'

const Finstartup = () => {
  return (
    <div className="h-screen flex ">
                <section id="SideBar" className="fixed h-full">
                    <SideBar />
                </section>
                <section id="" className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                            <div className='shadow-lg px-6 py-6 '>
                                <div className='text-xl text-dmsans'>Startups</div> 
                        <div className="grid grid-cols-2 gap-5 px-6 m-6">
                            <div>
                            <div className="px-3"><input type="text" placeholder="Search for Startups" className="w-full rounded-md focus:ring-green-400"/></div>

                        </div>
<<<<<<< HEAD
                        <div className="flex justify-end">
<a href="/fin-startups/updatefunding">  <button className="text-gray-500 text-sm font-semibold mt-1 p- px-3 rounded-2xl shadow-md" style={{ backgroundColor: '#afdade' }}>
    Update Funding
  </button></a>
</div>

=======
                            <div className="flex justify-end">
                                    <a href="/fin-startups/updatefunding">  
                                        <button className="text-gray-500 text-sm font-semibold mt-1 p- px-3 rounded-2xl shadow-md" style={{ backgroundColor: '#afdade' }}>
                                                Update Funding
                                        </button>
                                    </a>
                            </div>
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
                        </div>
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-800 uppercase dark:text-gray-500" style={{backgroundColor: '#7da1ad'}}>
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Name
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Cohort
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                         Funding Distributred
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Funding Utilized
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                         Balance
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                         Actions
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    <div className="flex items-center justify-center">
                                                                <FaUser className="w-6 h-6" />
                                                    </div>

                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Silver
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Laptop
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $2999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
<<<<<<< HEAD
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        White
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Laptop PC
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Black
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Accessories
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $99
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Gray
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Phone
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $799
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Red
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Wearables
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>  
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
=======
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* table ends */}
                                    </div>
                        </div>
                    </section>
                    </div>
  )
}

export default Finstartup
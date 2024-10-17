import React from 'react'
import SideBar from '../../../Finance/Components/Sidebar'
import NavBar from '../../../components/NavBar'

<<<<<<< HEAD
const Home = () => {
=======
const FinanceHome = () => {
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
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
<<<<<<< HEAD
                        <div className={`grid md:grid-cols-4 gap-4 mt-2 grid-cols-1 `}> 
</div>
                        </div>
                            </section>
                           </div>
=======
                                <div className={`grid md:grid-cols-4 gap-4 mt-2 grid-cols-1 `}> 
                                </div>
                        </div>
                </section>
        </div>
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4
                            
    </div>
  )
}

<<<<<<< HEAD
export default Home
=======
export default FinanceHome;
>>>>>>> 0ea1c40d5ec99c334b24c86bb4653803304d50a4

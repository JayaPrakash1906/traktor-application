import React, { useState } from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import { FaGear, FaMessage } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";
import Step3 from "./Step/Step3";

function AddNewMentor() {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        'Description',
        'Professional',
        'Contact',
    ];
    const icons = [
        <FaMessage size={20} />,
        <FaInfo size={20} />,
        <FaGear size={20} />
    ];

    const nextPrev = (n) => {
        setCurrentStep((prevStep) => prevStep + n);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    const [formData, setFormData] = useState({
        description: {
            mentor_name: '',
            mentor_description: ''
        },
        professional: {
            years_of_experience: '',
            area_of_expertise: '',
            current_designation: '',
            institution: '',
            qualification: '',
            year_of_passing_out: '',
            startup_associated: ''
        },
        contact: {
            contact_number: '',
            email_address: '',
            linkedIn_ID: '',
            password: ''
        }
    });

    const handleChange = (e, section) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [name]: value,
            },
        }));
    };
    console.log(formData);
    return (
        <div className="h-screen flex">
            <section id="SideBar" className="fixed h-full">
                <SideBar />
            </section>
            <section className="flex-grow">
                <div className="fixed w-full">
                    <NavBar />
                </div>
                <div className="p-[90px] h-full">
                    <div className="flex justify-between">
                        <h1 className="p-0 text-3xl font-semibold text-gray-500">Add new mentor</h1>
                    </div>
                    <div className="mt-6 shadow-md rounded-md border py-2 mb-10">
                        <div className="m-3 text-center">
                            Add new mentor
                        </div>
                        <div className="flex justify-between items-center my-8">
                            {steps.map((step, index) => (
                                <div key={index} className="flex-1 text-center relative">
                                    <div
                                        className={`stepper-circle w-16 h-16 mx-auto rounded-full border-2 flex items-center justify-center ${currentStep >= index ? 'text-white' : 'border-gray-300 bg-white text-gray-600'}`}
                                        style={{
                                            backgroundColor: currentStep >= index ? '#0b5f66' : 'white',
                                            borderColor: currentStep >= index ? '#0b5f66' : '#0b5f66',
                                        }}
                                    >
                                        {icons[index % icons.length]}
                                    </div>
                                    <div
                                        className={`text-lg mt-2 ${currentStep >= index ? 'font-semibold' : ''}`}
                                        style={{
                                            color: currentStep >= index ? '#0b5f66' : '#4b5563',
                                        }}
                                    >
                                        {step}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div
                                            className={`stepper-line absolute top-8 left-[58.5%] w-full h-1`}
                                            style={{
                                                backgroundColor: currentStep > index ? '#0b5f66' : '#0b5f66',
                                            }}
                                        ></div>
                                    )}
                                </div>
                            ))}
                        </div>
                        {currentStep === 0 && <Step1 formData={formData.description} handleChange={(e) => handleChange(e, 'description')}/>}
                        {currentStep === 1 && <Step2 formData={formData.professional} handleChange={(e) => handleChange(e, 'professional')}/>}
                        {currentStep === 2 && <Step3 formData={formData.contact} handleChange={(e) => handleChange(e, 'contact')} />}
                        <div className="form-footer gap-2 px-10 flex justify-center">
                            {currentStep > 0 && (
                                <button
                                    type="button"
                                    className="w-24 focus:outline-none border border-gray-300 py-1 px-2 rounded-lg shadow-sm text-center text-gray-700 bg-white hover:bg-gray-100 text-sm"
                                    onClick={() => nextPrev(-1)}
                                >
                                    Previous
                                </button>
                            )}
                            {currentStep < steps.length - 1 ? (
                                <button
                                    type="button"
                                    className="border border-transparent focus:outline-none py-2 px-5 rounded-md text-center text-white text-sm"
                                    style={{ backgroundColor: '#0b5f66' }}
                                    onClick={() => nextPrev(1)}
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="border border-transparent focus:outline-none py-2 px-5 rounded-md text-center text-white text-sm"
                                    style={{ backgroundColor: '#0b5f66' }}
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddNewMentor;

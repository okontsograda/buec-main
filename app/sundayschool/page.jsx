"use client"
import { use, useState } from "react"

import Step1 from './comps/step1'
import Step2 from './comps/step2'

const SundaySchool = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        parentFirstName: '',
        parentLastName: '',
        phoneNumber: '',
        email: '',
        address: '',
        // sameAsParents: false,
        // emergencyFirstName: '',
        // emergencyLastName: '',
        // emergencyPhone: '',
        childFirstName: '',
        childLastName: '',
        age: '',
        schoolGrade: '',
        allergies: '',
        birthDate: '',
        notes: ''
    })

    const handleInputChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        }
        );

        if (type === 'checkbox' && (checked || formData[name])) {
            formData.emergencyFirstName = formData.parentFirstName
        }
    }

    const nextStep = (e) => {
        e.preventDefault()
        setCurrentStep(currentStep + 1)
    }

    const prevStep = (e) => {
        e.preventDefault()
        if (currentStep <= 0) return
        setCurrentStep(currentStep - 1)
        console.log('Back a step')
        console.log(currentStep)
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(formData)

        // Send a fetch request to update the event data in the database
        fetch('/api/submitForm', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to send event data');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Event data updated successfully:', data);
            })
            .catch((error) => {
                console.error('Error updating event data:', error);
            });

    }

    return (
        <div className='lg:py-16'>
            <div className='mx-auto flex md:border border-gray-200 rounded-xl md:max-w-xl lg:max-w-6xl xl:max-w-7xl md:shadow-md h-screen lg:h-[750px]'>
                <div className='hidden lg:block lg:w-1/2 rounded-l-xl bg-cover bg-[url("/bg-4.avif")]'>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col px-8 py-12'>
                        <div className='flex flex-row pb-6 justify-around'>
                            <div className='flex items-center gap-2'>
                                <div className={`flex justify-center items-center rounded-xl text-sm p-2 px-4 text-white ${currentStep == 0 && 'bg-blue-500' || 'bg-blue-200'}`}>
                                    1
                                </div>
                                <div className={`text-sm ${currentStep == 0 && 'text-gray-500' || 'text-gray-300'}`}>Child Details</div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className={`flex justify-center items-center rounded-xl text-sm p-2 px-4 text-white ${currentStep == 1 && 'bg-blue-500' || 'bg-blue-200'}`}>
                                    2
                                </div>
                                <div className={`text-sm ${currentStep == 1 && 'text-gray-500' || 'text-gray-300'}`}>Parent Details</div>
                            </div>
                        </div>
                        <div className='border-t pb-8' />

                        {/* Main Form Component */}

                        <form className=''>
                            {currentStep == 1 &&
                                <Step1
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                />}
                            {currentStep == 0 &&
                                <Step2
                                    formData={formData}
                                    handleInputChange={handleInputChange}
                                />
                            }
                            <div className='flex px-2 py-8 justify-end relative'>
                                {currentStep > 0 &&
                                    <button className='text-sm bg-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 absolute left-0' onClick={prevStep}>
                                        Back
                                    </button>
                                }
                                {currentStep < 1 &&
                                    <button className='text-sm bg-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 flex' onClick={nextStep}>
                                        Next
                                    </button>
                                }
                                {currentStep >= 1 &&
                                    <button className='text-sm bg-blue-500 text-white py-2 px-4 rounded-lg hover:opacity-90 flex' onClick={submitForm}>
                                        Submit
                                    </button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SundaySchool
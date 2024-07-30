import React from 'react'

const step2 = ({ formData, handleInputChange }) => {
    return (
        <div className='h-[500px]'>
            <p className='text-gray-400 text-sm py-2'>Step 1/2</p>
            <h2 className='text-2xl font-semibold pb-6'>Child Information</h2>
            <div className='flex gap-4 pb-2.5'>
                <div className='w-1/2'>
                    <label htmlFor="childFirstName" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.childFirstName} onChange={handleInputChange} type="text" name="childFirstName" id="childFirstName" autoComplete="child-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="childLastName" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.childLasttName} onChange={handleInputChange} type="text" name="childLastName" id="childLastName" autoComplete="child-surname" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
            </div>
            <div className='flex gap-4 pb-2.5'>
                <div className='w-1/3'>
                    <label htmlFor="birthDate" className="block text-sm font-semibold leading-6 text-gray-900">Birthdate</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.birthDate} onChange={handleInputChange} type="text" name="birthDate" id="birthDate" placeholder='04/05/2006' autoComplete='child-birthdate' className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
                <div className='w-1/3'>
                    <label htmlFor="age" className="block text-sm font-semibold leading-6 text-gray-900">Age</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.age} onChange={handleInputChange} type="number" name="age" id="age" autoComplete='child-age' className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
                <div className='w-1/3'>
                    <label htmlFor="schoolGrade" className="block text-sm font-semibold leading-6 text-gray-900">School Grade</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.schoolGrade} onChange={handleInputChange} type="number" name="schoolGrade" id="schoolGrade" autoComplete='child-current-grade' className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
            </div>
            <div className='pb-2.5'>
                <div className='w-full'>
                    <label htmlFor="allergies" className="block text-sm font-semibold leading-6 text-gray-900">Allergies</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.allergies} onChange={handleInputChange} type="text" name="allergies" id="allergies" placeholder="Peanuts, advil, etc.." className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default step2
import React from 'react'

const step1 = ({ formData, handleInputChange }) => {
    return (
        <div className='h-[500px]'>
            <p className='text-gray-400 text-sm py-2'>Step 2/2</p>
            <h2 className='text-2xl font-semibold pb-6'>Parent Information</h2>
            <div className='flex gap-4 pb-2.5'>
                <div className='w-1/2'>
                    <label htmlFor="parentFirstName" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.parentFirstName} onChange={handleInputChange} type="text" name="parentFirstName" id="parentFirstName" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="parentLastName" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                    <div className="mt-2.5">
                        <input required="" disabled value={formData.childLastName} onChange={handleInputChange} type="text" name="parentLastName" id="parentLastName" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            </div>
            <div className='flex gap-4 pb-2.5'>
                <div className='w-1/2'>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">Phone</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.phoneNumber} onChange={handleInputChange} type="phone" name="phoneNumber" placeholder="555-555-5555" id="phoneNumber" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">E-mail</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.email} onChange={handleInputChange} type="text" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">Address</label>
                <div className="mt-2.5">
                    <input required="" value={formData.address} onChange={handleInputChange} type="text" name="address" id="address" autoComplete="address" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div className='pt-2.5'>
                <label htmlFor="notes" className="block text-sm font-semibold leading-6 text-gray-900">Notes for teacher</label>
                <div className="mt-2.5">
                    <textarea required="" value={formData.notes} onChange={handleInputChange} placeholder="Any additional information for the teach about your child" type="textarea" name="notes" id="notes" rows="3" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                </div>
            </div>


            {/* <div className='flex justify-center py-4 pt-6'>
                <div className='border-t w-1/2 border-gray-300' />
            </div> */}

            {/* Emergenct Contact */}

            {/* <div className='flex flex-row justify-between my-2'>
                <div className='font-semibold text-xl'>Emergency Contact</div>
                <div className='flex mb-4'>
                    <input className='mr-2' checked={formData.sameAsParents || false} onChange={handleInputChange} type="checkbox" name="sameAsParents" id="sameAsParents" />
                    <label htmlFor="sameAsParents" className="text-sm font-semibold leading-6 text-gray-900">Same as parents</label>
                </div>
            </div> */}

            {/* <div className='flex gap-4'>
                <div className='w-1/2'>
                    <label htmlFor="emergencyFirstName" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                    <div className="mt-2.5">
                        <input value={formData.sameAsParents == true && formData.parentFirstName || formData.emergencyFirstName} onChange={handleInputChange} type="text" name="emergencyFirstName" id="emergencyFirstName" autoComplete="emergency-first-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="emergencyLastName" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.emergencyLastName} onChange={handleInputChange} type="text" name="emergencyLastName" id="emergencyLastName" autoComplete="emergencty-last-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            </div>
            <div className='flex gap-4 pt-2.5'>
                <div className='w-1/2'>
                    <label htmlFor="emergencyPhone" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                    <div className="mt-2.5">
                        <input required="" value={formData.emergencyPhone} onChange={handleInputChange} type="text" name="emergencyPhone" id="emergencyPhone" autoComplete="emergency-phone" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default step1
import React from 'react'

const step1 = ({ formData, handleInputChange }) => {
    return (
        <div className='lg:h-[500px]'>
            <p className='text-gray-400 text-sm py-2'>Step 2/2</p>
            <h2 className='text-2xl font-semibold pb-6'>Parent Information / <br/><span className="text-gray-500">Інформація про батьків</span></h2>
            <div className='flex gap-4 pb-2.5'>
                <div className='w-1/2'>
                    <label htmlFor="parentFirstName" className="block text-sm font-semibold leading-6 text-gray-900">First name / <span className="text-gray-500">Ім'я</span></label>
                    <div className="mt-2.5">
                        <input required value={formData.parentFirstName} onChange={handleInputChange} type="text" name="parentFirstName" id="parentFirstName" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="parentLastName" className="block text-sm font-semibold leading-6 text-gray-900">Last name / <span className="text-gray-500">Прізвище</span></label>
                    <div className="mt-2.5">
                        <input required value={formData.parentLastName} onChange={handleInputChange} type="text" name="parentLastName" id="parentLastName" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
            </div>
            <div className='flex gap-4 pb-2.5'>
                <div className='w-1/2'>
                    <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">Phone / <span className="text-gray-500">Телефон</span></label>
                    <div className="mt-2.5">
                        <input required value={formData.phoneNumber} onChange={handleInputChange} type="phone" name="phoneNumber" placeholder="555-555-5555" id="phoneNumber" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">E-mail / <span className="text-gray-500">Е. пошта</span></label>
                    <div className="mt-2.5">
                        <input value={formData.email} onChange={handleInputChange} type="text" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="address" className="block text-sm font-semibold leading-6 text-gray-900">Address / <span className="text-gray-500">Адреса</span></label>
                <div className="mt-2.5">
                    <input value={formData.address} onChange={handleInputChange} type="text" name="address" id="address" autoComplete="address" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                </div>
            </div>
            <div className='pt-2.5'>
                <label htmlFor="notes" className="block text-sm font-semibold leading-6 text-gray-900">Additional Information for teacher / <br/><span className="text-gray-500">Додаткова інформація для вчителя</span></label>
                <div className="mt-2.5">
                    <textarea value={formData.notes} onChange={handleInputChange} type="textarea" name="notes" id="notes" rows="3" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                </div>
            </div>
        </div>
    )
}

export default step1
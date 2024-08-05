import React from 'react'

const step2 = ({ formData, handleInputChange }) => {
    return (
        <div className='lg:h-[500px]'>
            <p className='text-gray-400 text-sm py-2'>Step 1/2</p>
            <h2 className='text-2xl font-semibold pb-6'>Child Information / <br /><span className="text-gray-500">Інформація про дитину</span></h2>
            <div className='flex gap-2 pb-2.5'>
                <div className='w-1/2'>
                    <label htmlFor="childFirstName" className="block text-sm font-semibold leading-6 text-gray-900">First name / <span className="text-gray-500">Ім'я</span></label>
                    <div className="mt-2.5">
                        <input required value={formData.childFirstName} onChange={handleInputChange} type="text" name="childFirstName" id="childFirstName" autoComplete="child-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
                <div className='w-1/2'>
                    <label htmlFor="childLastName" className="block text-sm font-semibold leading-6 text-gray-900">Last name / <span className="text-gray-500">Прізвище</span></label>
                    <div className="mt-2.5">
                        <input required value={formData.childLasttName} onChange={handleInputChange} type="text" name="childLastName" id="childLastName" autoComplete="child-surname" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
            </div>
            <div className='sm:flex sm:gap-2 pb-2.5'>
                <div className='w-full md:w-1/2'>
                    <label htmlFor="birthDate" className="block text-sm font-semibold leading-6 text-gray-900">Birthdate / <span className="text-gray-500">Дата народження</span></label>
                    <div className="mt-2.5">
                        <input required value={formData.birthDate} onChange={handleInputChange} type="text" name="birthDate" id="birthDate" placeholder='04/05/2006' autoComplete='child-birthdate' className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
                <div className='w-full md:w-1/2 pt-2.5 md:pt-0'>
                    <label htmlFor="schoolGrade" className="block text-sm font-semibold leading-6 text-gray-900">School Grade / <span className="text-gray-500">Шкільний клас</span></label>
                    <div className="mt-2.5">
                        <input required value={formData.schoolGrade} onChange={handleInputChange} type="number" name="schoolGrade" id="schoolGrade" autoComplete='child-current-grade' className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
            </div>
            <div className="flex gap-2 pb-4">
                <div className='w-1/2'>
                    <label htmlFor="age" className="block text-sm font-semibold leading-6 text-gray-900">Age / <span className="text-gray-500">Вік</span></label>
                    <div className="mt-2.5">
                        <input required value={formData.age} onChange={handleInputChange} type="number" name="age" id="age" autoComplete='child-age' className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>

                <div className='w-1/2'>
                    <label htmlFor="allergies" className="block text-sm font-semibold leading-6 text-gray-900">Allergies / <span className="text-gray-500">Aлергії</span></label>
                    <div className="mt-2.5">
                        <input value={formData.allergies} onChange={handleInputChange} type="text" name="allergies" id="allergies" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 text-sm md:text-base" />
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="langPref" className="block text-sm font-semibold leading- text-gray-900">What language does your child learn best in?<br /> <span className='text-gray-500'>Якою мовою ваша дитина навчається найкраще?</span></label>
                <div className="mt-2.5">
                    <select value={formData.langPref} onChange={handleInputChange} required name="langPref" id="langPref" className="appearance-none border text-gray-900 text-sm rounded-lg block w-full p-2.5">
                        <option className="font-semibold text-slate-300">English / Aнглійська</option>
                        <option className="font-semibold text-slate-300">Ukrainian / Українська</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default step2
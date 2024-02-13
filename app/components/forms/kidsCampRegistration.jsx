import { useState } from 'react';

const KidsCampRegistration = () => {
    const [formData, setFormData] = useState({
        children: [
            {
                childsFirstName: '',
                childsLastName: '',
                age: ''
            }
        ],
        parentName: '',
        email: '',
        phone: '',
        pickupFullName: ''
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedChildren = [...formData.children];
        updatedChildren[index][name] = value;

        // Update the last name of each child with the last name of the first child
        if (name === 'childsLastName' && index === 0) {
            updatedChildren.forEach((child, i) => {
                if (i !== 0) {
                    updatedChildren[i][name] = value;
                }
            });
        }

        setFormData(prevState => ({
            ...prevState,
            children: updatedChildren
        }));
    };

    const addAnotherChild = () => {
        const lastChild = formData.children[formData.children.length - 1];
        setFormData(prevState => ({
            ...prevState,
            children: [
                ...prevState.children,
                {
                    childsFirstName: '',
                    childsLastName: lastChild.childsLastName, // Pre-fill last name from the previous child
                    age: ''
                }
            ]
        }));
    };

    const handleAgeFormat = (e) => {
        const input = e.target;
        let formattedValue = input.value.replace(/\//g, ''); // Remove existing slashes
        if (formattedValue.length >= 3) {
            formattedValue = formattedValue.slice(0, 2) + '/' + formattedValue.slice(2);
        }
        if (formattedValue.length >= 6) {
            formattedValue = formattedValue.slice(0, 5) + '/' + formattedValue.slice(5);
        }
        input.value = formattedValue;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can handle form submission, e.g., send data to server or perform client-side validation

        console.log(formData);

        // Reset form after submission

    };

    return (
        <div className="min-h-screen p-6 bg-gray-100 flex pt-16 justify-center">
            <div className="container max-w-screen-lg mx-auto">
                <div>
                    <h2 className="font-semibold text-xl text-gray-600">Kids Camp Registration</h2>
                    <p className="text-gray-500 mb-6">Kids Camp information can go here, whatever infor would be needed.</p>

                    <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Child Information</p>
                                    <p className='text-xs text-gray-400 w-[250px]'>Please fill out the required information about your child.</p>
                                </div>

                                {/* Child Information */}
                                {formData.children.map((child, index) => (
                                    <div key={index} className={`lg:col-span-2 lg:col-start-2 mb-2 ${index !== 0 ? 'border-t-2 border-gray-100 pt-4' : ''}`}> {/* Offset all mapped elements to start from the second column */}
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-2">
                                                <label htmlFor={`childsFirstName${index}`}>First Name</label>
                                                <input type="text" id={`childsFirstName${index}`} name="childsFirstName" value={child.childsFirstName} onChange={(e) => handleChange(e, index)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor={`childsLastName${index}`}>Last Name</label>
                                                <input type="text" id={`childsLastName${index}`} name="childsLastName" value={child.childsLastName} onChange={(e) => handleChange(e, index)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor={`childsAllergies${index}`}>Allergies</label>
                                                <input type="text" id={`childsAllergies${index}`} name="childsAllergies" value={child.childsAllergies} onChange={(e) => handleChange(e, index)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor={`age${index}`}>Birthdate</label>
                                                <input type="text" id={`age${index}`} name="age" value={child.age} maxLength={10} onChange={(e) => handleChange(e, index)} onKeyPress={handleAgeFormat} placeholder='12/12/2000' className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Add another child button */}
                            <div className="text-right mt-4">
                                <span className='text-gray-500 pr-2 text-xs mt-2 align-bottom'>Add more children</span>
                                <button type="button" className="bg-blue-500 text-sm text-white py-2 px-4 rounded hover:bg-blue-600" onClick={addAnotherChild}>+</button>
                            </div>

                            {/* Parent / /Guardian Information */}

                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-12 md:mt-24">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Parent / Guardian Information</p>
                                    <p className='text-xs text-gray-400 w-[250px]'>Please fill out the required information about your child.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                        <div className="md:col-span-2">
                                            <label htmlFor="full_name">Father's First Name</label>
                                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="full_name">Mother's First Name</label>
                                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="full_name">Last Name</label>
                                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-5">
                                            <label htmlFor="email">Email Address</label>
                                            <input type="text" name="email" id="email" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="address">Address / Street</label>
                                            <input type="text" name="address" id="address" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="city">City</label>
                                            <input type="text" name="city" id="city" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="state">State / province</label>
                                            <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                <input name="state" id="state" placeholder="State" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                                <button tabIndex="-1" className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                </button>
                                                <button tabIndex="-1" htmlFor="show_more" className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                                                    <svg className="w-4 h-4 mx-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                                                </button>
                                            </div>
                                        </div>

                                        <div className="md:col-span-1">
                                            <label htmlFor="zipcode">Zipcode</label>
                                            <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}

                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-12 md:mt-24">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Emergency Contact Information</p>
                                    <p className='text-xs text-gray-400 w-[250px]'>Please fill out the required information about your child.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="full_name">Full Name</label>
                                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="full_name">Relationship to child<span className='text-gray-500'>(ren)</span></label>
                                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="zipcode">Phone Number</label>
                                            <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="(555)-555-5555" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pickup Information */}

                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-12 md:mt-24">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Pickup Information</p>
                                    <p className='text-xs text-gray-400 w-[250px]'>We will only dismiss children with your designated pickup contact.</p>
                                </div>

                                <div className="lg:col-span-2">
                                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                        <div className="md:col-span-5">
                                            <label htmlFor="pickupFullName">Full Name</label>
                                            <input type="text" id="pickupFullName" name="pickupFullName" value={formData.pickupFullName} onChange={handleChange} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-3">
                                            <label htmlFor="full_name">Relationship to child<span className='text-gray-500'>(ren)</span></label>
                                            <input type="text" name="full_name" id="full_name" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label htmlFor="zipcode">Phone Number</label>
                                            <input type="text" name="zipcode" id="zipcode" className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="(555)-555-5555" />
                                        </div>
                                    </div>
                                    <div className="md:col-span-5 text-right mt-8">
                                        <div className="inline-flex items-end">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KidsCampRegistration;

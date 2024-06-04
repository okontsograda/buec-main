"use client"
import { useState } from 'react';

const YouthCamp = () => {

  const [formData, setFormData] = useState({
    children: [
      {
        childsFirstName: '',
        childsLastName: '',
        age: '',
        childsAllergies: ''
      }
    ],
    fatherFirstName: '',
    motherFirstName: '',
    lastName: '',
    address: '',
    city: '',
    zipcode: '',
    state: '',
    email: '',
    parentsPhone: '',
    pickupFullName: '',
    emergencyFullName: '',
    emergencyRelation: '',
    emergencyPhone: '',
    pickupFullName: '',
    pickupRelation: '',
    pickupPhone: '',
    timestamp: new Date().toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    })
  });

  const [submitted, setSubmitted] = useState(false); // State to track form submission


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
    setSubmitted(true); // Set submitted state to true after a delay (simulating server response)

    // Here you can handle form submission, e.g., send data to server or perform client-side validation

    console.log(formData);

    // Send a fetch request to update the event data in the database
    fetch('/api/youthCamp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to update event data');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Event data updated successfully:', data);
      })
      .catch((error) => {
        console.error('Error updating event data:', error);
      });

  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex pt-16 justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600 mb-6">Youth Camp 2024 - Registration</h2>
          <div className='text-gray-600'>
            <div className='pt-4 pb-4 grid grid-cols-2'>
              <div>$140 per person <span className='text-xs text-gray-400'>This includes reservation fees, food, and t-shirts.</span></div>
              <div className=''>Dates: July 21-24 <span className='text-xs text-gray-400'>(3 nights - 4 days)</span></div>
              <div className=''>Check-in: <span className=''>4:00pm</span></div>
              <div>Check-out: 2:00pm</div>
              <div className='text-gray-600 mt-5'>
                <span className='text-gray-500 underline'>Address:</span> <br />
                Lake James State Park <br />
                2229 Lake James State Park Road <br />
                Nebo, NC 28761
              </div>

            </div>
          </div>

          {/* <img src="/kidsCamp_24.png" alt="Camp Banner" className="w-full" /> */}

          {!submitted && (
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Your Information</p>
                    <p className='textsm text-gray-400 w-[250px]'>Provide your information, including members in your group.<br /> <span className='text-yellow-500'>Max. 6 per group</span></p>
                  </div>

                  {/* Child Information */}
                  {formData.children.map((child, index) => (
                    <div key={index} className={`lg:col-span-2 lg:col-start-2 mb-2 ${index !== 0 ? 'border-t-2 border-gray-100 pt-4' : ''}`}> {/* Offset all mapped elements to start from the second column */}
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2">
                          <label htmlFor={`childsFirstName${index}`}>First Name</label>
                          <input required type="text" id={`childsFirstName${index}`} name="childsFirstName" value={child.childsFirstName} onChange={(e) => handleChange(e, index)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="md:col-span-3">
                          <label htmlFor={`childsLastName${index}`}>Last Name</label>
                          <input required type="text" id={`childsLastName${index}`} name="childsLastName" value={child.childsLastName} onChange={(e) => handleChange(e, index)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="md:col-span-3">
                          <label htmlFor={`childsAllergies${index}`}>Allergies</label>
                          <input type="text" id={`childsAllergies${index}`} name="childsAllergies" value={child.childsAllergies} onChange={(e) => handleChange(e, index)} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor={`age${index}`}>Birthdate</label>
                          <input required type="text" id={`age${index}`} name="age" value={child.age} maxLength={10} onChange={(e) => handleChange(e, index)} onKeyPress={handleAgeFormat} placeholder='12/12/2000' className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="md:col-span-5 pt-2">
                          <label className="cursor-pointer label">
                            <input type="checkbox" className="mr-2 text-gray-500" />
                            <span className="text-gray-600"><span className='text-gray-500090'>If you are under 18:</span> I verify that I have approved parental consent for this trip.</span>
                          </label>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

                {/* Add another child button */}
                <div className="text-right mt-4">
                  <span className='text-gray-500 pr-2 text-sm mt-2 align-bottom'>Add individual to group</span>
                  <button type="button" className="bg-blue-500 text-sm text-white py-2 px-4 rounded hover:bg-blue-600" onClick={addAnotherChild}>+</button>
                </div>

                {/* Parent / /Guardian Information */}
                {/* 
                                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-12 md:mt-24">
                                    <div className="text-gray-600">
                                        <p className="font-medium text-lg">Parent / Guardian Information</p>
                                        <p className='text-xs text-gray-400 w-[250px]'>Please fill out the required information about yourself.</p>
                                    </div>

                                    <div className="lg:col-span-2">
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">

                                            <div className="md:col-span-2">
                                                <label htmlFor="fatherFirstName">Father's First Name</label>
                                                <input required type="text" name="fatherFirstName" id="fatherFirstName" value={formData.fatherFirstName} onChange={(e) => setFormData({ ...formData, fatherFirstName: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="motherFirstName">Mother's First Name</label>
                                                <input required type="text" name="motherFirstName" id="motherFirstName" value={formData.motherFirstName} onChange={(e) => setFormData({ ...formData, motherFirstName: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="lastName">Last Name</label>
                                                <input required type="text" name="lastName" id="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="parentsPhone">Phone Number</label>
                                                <input required type="text" id="parentsPhone" value={formData.parentsPhone} onChange={(e) => setFormData({ ...formData, parentsPhone: e.target.value })} className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="(555)-555-5555" />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label htmlFor="email">Contact E-mail Address</label>
                                                <input required type="text" name="email" id="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="email@domain.com" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="address">Address</label>
                                                <input required type="text" name="address" id="address" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="city">City</label>
                                                <input required type="text" name="city" id="city" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                            <div className="md:col-span-3">
                                                <label htmlFor="state">State</label>
                                                <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                                    <input required name="state" id="state" value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} placeholder="South Carolina" className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" />
                                                </div>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="zipcode">Zipcode</label>
                                                <input required type="text" name="zipcode" id="zipcode" value={formData.zipcode} onChange={(e) => setFormData({ ...formData, zipcode: e.target.value })} className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="" />
                                            </div>

                                        </div>
                                    </div>
                                </div> */}

                {/* Emergency Contact */}

                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mt-12 md:mt-24">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Emergency Contact Information</p>
                    <p className='text-xs text-gray-400 w-[250px]'>In case of an emergency, who should we contact?</p>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <label htmlFor="emergencyFullName">Full Name</label>
                        <input required type="text" name="emergencyFullName" id="emergencyFullName" value={formData.emergencyFullName} onChange={(e) => setFormData({ ...formData, emergencyFullName: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                      </div>

                      <div className="md:col-span-3">
                        <label htmlFor="emergencyRelation">Relationship</label>
                        <input required type="text" name="emergencyRelation" id="emergencyRelation" value={formData.emergencyRelation} onChange={(e) => setFormData({ ...formData, emergencyRelation: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                      </div>

                      <div className="md:col-span-2">
                        <label htmlFor="emergencyPhone">Phone Number</label>
                        <input required type="text" name="emergencyPhone" id="emergencyPhone" value={formData.emergencyPhone} onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })} className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="(555)-555-5555" />
                      </div>

                      <div className="md:col-span-5 text-right mt-8">
                        <div className="inline-flex items-end">
                          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

          )}
          {submitted && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
              <strong className="font-bold">Success!</strong>
              <span className="block sm:inline"> Your submission was sent.</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <span className='cursor-pointer' onClick={() => setSubmitted(false)}>x</span>
                <title>Close</title>

              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YouthCamp;

"use client"
import { useState } from 'react';

const YouthCamp = () => {

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    emergencyFullName: '',
    emergencyRelation: '',
    emergencyPhone: '',
    consent: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Set submitted state to true after a delay (simulating server response)

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
          <h2 className="font-semibold text-xl text-gray-600 mb-6 md:text-center">Youth Camp 2024 - Registration</h2>
          <div className='text-gray-600 md:text-center mb-4'>
            <div className='pt-4 pb-4 grid grid-cols-2 gap-5'>
              <div>$130 per person<br/> <span className='text-xs text-gray-400'>This includes reservation fees, food, and t-shirts.</span></div>
              <div className=''>Dates: July 21-24<br/> <span className='text-xs text-gray-400'>(3 nights - 4 days)</span></div>

            </div>
          </div>

          {/* <img src="/kidsCamp_24.png" alt="Camp Banner" className="w-full" /> */}

          {!submitted && (
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600">
                    <p className="font-medium text-lg">Your Information</p>
                    <p className='text-xs text-gray-400 w-[250px]'>Provide your information in order to register.</p>
                  </div>

                    <div className={`lg:col-span-2 lg:col-start-2 mb-2`}> 
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-2">
                          <label htmlFor="firstName">First Name</label>
                          <input required type="text" id="firstName" name="firstName" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="md:col-span-3">
                          <label htmlFor={`lastName`}>Last Name</label>
                          <input required type="text" id="lastName" name="lastName" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="md:col-span-3">
                          <label htmlFor="allergies">Allergies</label>
                          <input required type="text" id="allergies" placeholder="N/A" name="allergies" value={formData.allergies} onChange={(e) => setFormData({ ...formData, allergies: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="age">Age</label>
                          <input required type="number" id="age" name="age" value={formData.age} maxLength={10} onChange={(e) => setFormData({ ...formData, age: e.target.value })} className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" />
                        </div>

                      </div>
                    </div>
                </div>

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

                      <div className="md:col-span-5 pt-8">
                          <label className="cursor-pointer label">
                            <input type="checkbox" name="consent" checked={formData.consent} id="consent" onChange={(e) => setFormData({ ...formData, consent: e.target.value })} className="mr-2 text-gray-500" />
                            <span className="text-gray-600"><span className='text-gray-500'>If you are under 18:</span> I verify that I have approved parental consent for this trip.</span>
                          </label>
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

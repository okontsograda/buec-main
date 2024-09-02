"use client"
import React, { useState } from 'react';

const CustomForm = ({ title, action, items }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e, item) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Submit the form data to the action endpoint
    fetch('/api/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Action': action,
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to submit form');
        }
        return response.json();
      })
      .then(data => {
        console.log('Form submission successful:', data);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  const renderFormInput = (item) => {
    switch (item.type) {
      case 'text':
        return (
          <input
            type="text"
            name={item.title.toLowerCase().replace(/\s/g, '')}
            placeholder={item.title}
            value={formData[item.title.toLowerCase().replace(/\s/g, '')] || ''}
            onChange={(e) => handleChange(e, item)}
            className="bg-gray-50 mt-1 px-4 border rounded w-full h-10"
          />
        );
      case 'datePicker':
        return (
          <input
            type="date"
            name={item.title.toLowerCase().replace(/\s/g, '')}
            placeholder={item.title}
            value={formData[item.title.toLowerCase().replace(/\s/g, '')] || ''}
            onChange={(e) => handleChange(e, item)}
            className="bg-gray-50 mt-1 px-4 border rounded w-full h-10"
          />
        );
      case 'select':
        return (
          <select
            name={item.title.toLowerCase().replace(/\s/g, '')}
            value={formData[item.title.toLowerCase().replace(/\s/g, '')] || ''}
            onChange={(e) => handleChange(e, item)}
            className="bg-gray-50 mt-1 px-4 border rounded w-full h-10"
          >
            {item.selectOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center bg-gray-100 p-6 pt-16 min-h-screen">
      <div className="mx-auto max-w-screen-lg container">
        <div className="bg-white shadow-lg mb-6 px-4 p-4 md:p-8 rounded">
          <h2 className="mb-6 font-semibold text-gray-600 text-xl">{title}</h2>
          <form onSubmit={handleSubmit}>
            {items.map((item, index) => (
              <div key={index} className="mb-4">
                <label className="block mb-2 font-medium text-gray-700 text-sm">
                  {item.title}
                </label>
                {renderFormInput(item)}
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomForm;

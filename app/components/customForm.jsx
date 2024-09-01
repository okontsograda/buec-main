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
    fetch(action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
          />
        );
      case 'select':
        return (
          <select
            name={item.title.toLowerCase().replace(/\s/g, '')}
            value={formData[item.title.toLowerCase().replace(/\s/g, '')] || ''}
            onChange={(e) => handleChange(e, item)}
            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
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
    <div className="min-h-screen p-6 bg-gray-100 flex pt-16 justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <h2 className="font-semibold text-xl text-gray-600 mb-6">{title}</h2>
          <form onSubmit={handleSubmit}>
            {items.map((item, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {item.title}
                </label>
                {renderFormInput(item)}
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
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

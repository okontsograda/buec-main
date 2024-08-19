'use client';
import { useEffect, useState } from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const Expense = () => {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    image: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpload = (result) => {
    setFormData({
      ...formData,
      image: result.info.secure_url,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('date', formData.date);
    data.append('image', formData.image);

    const response = await fetch('/api/cloudImg', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Error submitting the form');
    }
  };

  const fetchExpenses = async () => {
    const response = await fetch('/api/cloudImg')
    const expenseData = await response.json();

    if (expenseData.success) {
      setExpenses(expenseData.data)
    } else {
      console.log('Error fetching expenses:', expenseData.error)
    }

    console.log(expenseData)
  }

  useEffect( () => {
    fetchExpenses();
  }, []);

  return (
    <>
      <div className='flex justify-center items-center flex-row'>
        <div className='w-1/2'>
          <div className='text-xl px-12'>Submitted Expenses</div>
          { expenses && expenses.map( (expense) => {
            <div key={expense._id}>
              <div>Expense Name:</div>
              <div className="text-sm">{expense.expName}</div>
            </div>
          })}
        </div>
        <div className='w-1/2'>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input
                type="date"
                id="date"
                name="date"
                className=''
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='p-8 flex justify-center'>
              <CldUploadWidget
                uploadPreset="buec_expense"
                onSuccess={handleUpload}
              >
                {({ open }) => {
                  return (
                    <button type="button" onClick={() => open()}>
                      Upload an Image
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>
            {formData.image && (
              <div className=''>
                <img src={formData.image} alt="Uploaded Image" width="100" />
              </div>
            )}
            <button type="submit" className="py-2 px-8 bg-blue-500 text-white rounded-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Expense;

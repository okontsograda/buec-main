"use client"
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        question1: '',
        question2: '',
        comments: '',
    });

    const [status, setStatus] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false); // Track if the form has been submitted

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const timestamp = new Date().toLocaleString('en-US', {
            weekday: 'long', // e.g., 'Monday'
            year: 'numeric', // e.g., '2024'
            month: 'long', // e.g., 'November'
            day: 'numeric', // e.g., '16'
            hour: 'numeric', // e.g., '3'
            minute: 'numeric', // e.g., '45'
            second: 'numeric', // e.g., '30'
            hour12: true, // 12-hour format
        });

        const dataToSubmit = { ...formData, timestamp };

        try {
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSubmit),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Form submitted successfully!' });
                setFormSubmitted(true); // Hide the form when successful
                setFormData({ question1: '', question2: '', comments: '' });
            } else {
                const errorData = await response.json();
                setStatus({ type: 'error', message: errorData.message || 'Something went wrong.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: error.message || 'Network error occurred.' });
        }
    };

    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-xl mx-auto">
                    <div className="text-center">
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            {/* Introductory text (if needed) */}
                        </p>
                    </div>

                    {!formSubmitted ? (
                        <form className="w-full max-w-lg mt-12" onSubmit={handleSubmit}>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                        htmlFor="question1"
                                    >
                                        Your vision on how we can improve our spiritual state?
                                        <span className='text-gray-400 block mt-1.5'>Ваше бачення як ми можемо покращити наш духовний стан?</span>
                                    </label>
                                    <textarea
                                        className="no-resize appearance-none text-sm block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-32 resize-none"
                                        id="question1"
                                        value={formData.question1}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                        htmlFor="question2"
                                    >
                                        Your vision on how we can improve the quality of our service?
                                        <span className='text-gray-400 block mt-1.5'>Ваше бачення як ми можемо покращити якість нашого служіння?</span>
                                    </label>
                                    <textarea
                                        className="no-resize appearance-none text-sm block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-32 resize-none"
                                        id="question2"
                                        value={formData.question2}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block tracking-wide text-gray-700 text-xs font-semibold mb-2"
                                        htmlFor="comments"
                                    >
                                        Additional comments/questions?
                                        <span className='text-gray-400 block mt-1.5'>Додаткові коментарі/питання</span>
                                    </label>
                                    <textarea
                                        className="no-resize appearance-none text-sm block w-full bg-gray-100 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-32 resize-none"
                                        id="comments"
                                        value={formData.comments}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <button
                                        className="shadow bg-gray-500 hover:bg-gray-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                        type="submit"
                                    >
                                        Send
                                    </button>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded relative mt-4 md:mt-0" role="alert">
                            <strong className="font-bold text-xs md:text-sm">Success!</strong>
                            <span className="text-xs block md:inline md:text-sm md:pl-2">Your submission was sent.</span>
                        </div>
                    )}

                    {status && status.type === 'error' && (
                        <p className="text-sm font-semibold mt-2 text-red-500">
                            {status.message}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;

import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({ type: 'success', message: 'Form submitted successfully!' });
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
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
                        <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                            Ready to hire us?
                        </h1>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">
                            Tell us your story and we will be in touch.
                        </p>
                    </div>

                    <form className="w-full max-w-lg mt-12" onSubmit={handleSubmit}>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="firstName"
                                >
                                    First Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="firstName"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="lastName"
                                >
                                    Last Name
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    id="lastName"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="email"
                                >
                                    E-mail
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <p className="text-gray-600 text-xs italic">Enter email for future notifications</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white h-48 resize-none"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                                <p className="text-gray-600 text-xs italic">
                                    Re-size can be disabled by set by resize-none / resize-y / resize-x / resize
                                </p>
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
                            <div className="md:w-2/3">
                                {status && (
                                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-4" role="alert">
                                        <strong className="font-bold">Success!</strong>
                                        <span className="block sm:inline"> Your submission was sent.</span>
                                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                                        </span>
                                    </div>

                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

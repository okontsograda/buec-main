import React, { useState } from 'react';

const ResultsTable = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');

    if (!data.events || data.events.length === 0) {
        return <div>No data available</div>;
    }

    // Organize contacts by the first letter of their last name
    const contactsByLastNameLetter = {};
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let letter of alphabet) {
        contactsByLastNameLetter[letter] = [];
    }

    // Add the contact data to the corresponding group
    data.events.forEach((contact) => {
        contactsByLastNameLetter[contact.lastName[0]].push(contact);
    });

    // Filter the contacts based on the search query
    const filteredContacts = searchQuery.trim() === ''
        ? contactsByLastNameLetter
        : Object.keys(contactsByLastNameLetter).reduce((acc, letter) => {
            acc[letter] = contactsByLastNameLetter[letter].filter(contact =>
                contact.pickupFullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                contact.children[0].childsLastName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return acc;
        }, {});

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="container p-2 mx-auto text-gray-700">
            <h2 className="mb-4 text-2xl font-semibold">Contacts</h2>
            <div className="overflow-x-auto">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="w-full p-2 mb-4 text-sm rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                <table className="w-full p-6 text-xs text-left whitespace-nowrap">
                    <colgroup>
                        <col className="w-5" />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col />
                        <col className="w-5" />
                    </colgroup>
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3">A-Z</th>
                            <th className="p-3">Last Name</th>
                            <th className="p-3">Children</th>
                            <th className="p-3">Parent's Name</th>
                            <th className="p-3">Contact</th>
                            <th className="p-3">Details</th>
                            <th className="p-3">Address</th>

                        </tr>
                    </thead>
                    <tbody className="border-b border-gray-700">
                        {Object.keys(filteredContacts).map((letter) => (
                            filteredContacts[letter].length > 0 && (
                                <React.Fragment key={letter}>
                                    <tr className=''>
                                        <td className="px-3 text-xl font-medium text-gray-500">{letter}</td>
                                        <td colSpan="7"></td>
                                    </tr>
                                    {filteredContacts[letter].map((contact, index) => (
                                        <tr key={index} className=''>
                                            {/* {console.log(contact)} */}
                                            <td />
                                            <td className="px-3 py-2 border-b-2">
                                                <p>{contact.children[0].childsLastName}</p>
                                            </td>
                                            <td className="px-3 py-2 border-b-2">
                                                {contact.children.map((child, index) => (
                                                    <p key={index} className='pb-1'>{child.childsFirstName}</p>
                                                ))}
                                            </td>
                                            <td className="px-3 py-2 border-b-2">
                                                <p>{contact.fatherFirstName}</p>
                                                <span>{contact.motherFirstName}</span>
                                            </td>
                                            <td className="px-3 py-2 border-b-2">
                                                <p>Email: {contact.email}</p>
                                                <p>Phone #: {contact.pickupPhone}</p>
                                            </td>
                                            <td className="px-3 py-2 border-b-2">
                                                <p className='underline'>Pickup Contact:</p>
                                                <p className='text-gray-500 pl-2'> {contact.pickupFullName}</p>
                                                <p className='text-gray-500 pl-2 mb-2'>{contact.pickupPhone}</p>
                                                <p className='underline text-red-700'>Emergency Contact:</p>
                                                <p className='text-gray-500 pl-2'> {contact.pickupFullName}</p>
                                                <p className='text-gray-500 pl-2 mb-2'>{contact.pickupPhone}</p>
                                            </td>
                                            <td className="px-3 py-2 border-b-2">
                                                <p>{contact.address} <br /> {contact.city} {contact.state}, {contact.zipcode}</p>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            )
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ResultsTable;

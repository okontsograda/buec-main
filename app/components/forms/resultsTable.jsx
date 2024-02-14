import React, { useState } from 'react';

const ResultsTable = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');
    console.log(data.events)
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
                contact.pickupFullName.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return acc;
        }, {});

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="container p-2 mx-auto sm:p-4 text-gray-700">
            <h2 className="mb-4 text-2xl font-semibold">Contacts</h2>
            <div className="overflow-x-auto">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="w-full p-2 mb-4 text-sm rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
                {Object.keys(filteredContacts).map((letter) => (
                    // Only render sections with data
                    filteredContacts[letter].length > 0 && (
                        <div key={letter}>
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
                                    <tr className="">
                                        <th className="p-3">A-Z</th>
                                        <th className="p-3">Child's Name</th>
                                        <th className="p-3">Parent's Name</th>
                                        <th className="p-3">Phone</th>
                                        <th className="p-3">Email</th>
                                        <th className="p-3">Address</th>
                                        <th className="p-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="border-b border-gray-700">
                                    {filteredContacts[letter].map((contact, index) => (
                                        <tr key={index}>
                                            <td className="px-3 text-2xl font-medium">{letter}</td>
                                            <td className="px-3 py-2 min-w-[175px]">
                                                <p>{contact.children[0].childsFirstName}</p>
                                            </td>
                                            <td className="px-3 py-2">
                                                <span>{contact.pickupRelation}</span>
                                            </td>
                                            <td className="px-3 py-2">
                                                <p>{contact.pickupPhone}</p>
                                            </td>
                                            <td className="px-3 py-2">
                                                <p>{contact.email}</p>
                                            </td>
                                            <td className="px-3 py-2">
                                                <p>{contact.address}, {contact.city}, {contact.state}, {contact.zipcode}</p>
                                            </td>
                                            <td className="px-3 py-2">
                                                <button type="button" title="Open details" className="p-1 rounded-full">
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                                                        <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
};

export default ResultsTable;

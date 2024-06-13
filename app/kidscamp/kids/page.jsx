"use client"
import React, { useEffect, useState } from 'react';
import { differenceInYears } from 'date-fns';

const KidsCamp = () => {
    const [childrenData, setChildrenData] = useState(null);
    const [ageGroupsCount, setAgeGroupsCount] = useState({});
    const [sortConfig, setSortConfig] = useState({ key: 'ageInt', direction: 'asc' });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/submitForm', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const eventData = await response.json();

                // Extract and sort children data
                let allChildren = [];
                eventData.events.forEach((event) => {
                    if (event.children && event.children.length > 0) {
                        allChildren = [...allChildren, ...event.children];
                    }
                });

                // Calculate age for each child and create age groups count
                const ageGroups = {};
                allChildren.forEach((child) => {
                    const age = differenceInYears(new Date(), new Date(child.age));
                    if (ageGroups[age]) {
                        ageGroups[age] += 1;
                    } else {
                        ageGroups[age] = 1;
                    }
                });

                setAgeGroupsCount(ageGroups);

                // Calculate age for each child
                const childrenWithAge = allChildren.map((child) => ({
                    ...child,
                    ageInt: differenceInYears(new Date(), new Date(child.age)),
                }));

                // Sort children based on age in ascending order initially
                childrenWithAge.sort((a, b) => a.ageInt - b.ageInt);

                setChildrenData(childrenWithAge);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setChildrenData([]);
            }
        };

        fetchData();
    }, []);

    const handleSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });

        const sortedData = [...childrenData].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setChildrenData(sortedData);
        console.log(childrenData)

    };

    return (
        <>
            <div className="mx-auto lg:max-w-2xl">
                <div className="divide-y divide-gray-100 border rounded-xl m-4 px-4">
                    <details className="group" closed="true">
                        <summary
                            className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                            Age Groups
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </div>
                        </summary>
                        <div className="flex flex-wrap justify-center mb-4">
                            {Object.keys(ageGroupsCount).map((age, idx) => (
                                <div key={idx} className="bg-white rounded-lg text-center p-4 mb-4 w-1/5 sm:w-1/4 md:w-1/5 lg:w-1/6">
                                    <p className="text-lg font-semibold">{age}</p>
                                    <p className="text-xs text-gray-600">{ageGroupsCount[age]}</p>
                                </div>
                            ))}
                        </div>
                    </details>
                    <details className="group" closed="true">
                        <summary
                            className="flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-secondary-900 group-open:text-primary-500">
                            Allergies
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="block h-5 w-5 group-open:hidden">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                    stroke="currentColor" className="hidden h-5 w-5 group-open:block">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                </svg>
                            </div>
                        </summary>
                        <div className="mb-4">
                            <div>
                                {childrenData ? (
                                    childrenData.map((child, idx) => (
                                        <div key={idx}>
                                        <div className='border-b p-2'>{child.childsLastName}, {child.childsFirstName} <span className='float-right'>{child.childsAllergies || "N/A"}</span></div>
                                        </div>
                                    ))
                                ) : (
                                    <div>Loading data...</div>
                                )}
                            </div>
                        </div>
                    </details>
                </div>
            </div>
            <div className="overflow-x-auto">
                <div className='text-xs text-gray-600 p-4'>Sort this table by clicking the underlined headings<br/>The table sorting also updates the allergies sorting</div>
                <table className="min-w-full bg-white border text-sm border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border cursor-pointer underline" onClick={() => handleSort('childsFirstName')}>First Name</th>
                            <th className="px-4 py-2 border cursor-pointer underline" onClick={() => handleSort('childsLastName')}>Last Name</th>
                            <th className="px-4 py-2 border cursor-pointer underline" onClick={() => handleSort('ageInt')}>Age</th>
                            <th className="px-4 py-2 border">Birthdate</th>
                            <th className="px-4 py-2 border">Check-in</th>
                            <th className="px-4 py-2 border">Check-out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {childrenData ? (
                            childrenData.map((child, idx) => (
                                <tr key={idx} className="border-t">
                                    <td className="px-4 py-2 border">{idx + 1}</td>
                                    <td className="px-4 py-2 border">{child.childsFirstName}</td>
                                    <td className="px-4 py-2 border">{child.childsLastName}</td>
                                    <td className="px-4 py-2 border">{child.ageInt}</td>
                                    <td className="px-4 py-2 border">{child.age}</td>
                                    <td className="px-4 py-2 border"></td>
                                    <td className="px-4 py-2 border"></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="px-6 py-8 border text-center">
                                    Loading data...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default KidsCamp;

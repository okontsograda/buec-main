"use client"
import React, { useEffect, useState } from 'react';
import { differenceInYears } from 'date-fns';

const KidsCamp = () => {
    const [childrenData, setChildrenData] = useState(null);
    const [ageGroupsCount, setAgeGroupsCount] = useState({});

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

                // Sort children based on age in ascending order
                childrenWithAge.sort((a, b) => a.ageInt - b.ageInt);

                setChildrenData(childrenWithAge);
            } catch (error) {
                console.error('Error fetching data:', error.message);
                setChildrenData([]);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="flex flex-wrap justify-center mb-4">
                {Object.keys(ageGroupsCount).map((age, idx) => (
                    <div key={idx} className="bg-white rounded-lg text-center p-4 mb-4 w-1/5 sm:w-1/4 md:w-1/5 lg:w-1/6">
                        <p className="text-lg font-semibold">{age}</p>
                        <p className="text-xs text-gray-600">{ageGroupsCount[age]}</p>
                    </div>
                ))}
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border text-sm border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">First Name</th>
                            <th className="px-4 py-2 border">Last Name</th>
                            <th className="px-4 py-2 border">Age</th>
                            <th className="px-4 py-2 border">Birthdate</th>
                            <th className="px-4 py-2 border">Allergies</th>
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
                                    <td className="px-4 py-2 border">{child.childsAllergies}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="px-4 py-2 border text-center">
                                    No children data available
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
"use client"
import React, { useState, useEffect } from 'react';
import ResultsTable from '../../components/forms/resultsTable';

const KidsCamp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/youthCamp', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <>
      {data && <ResultsTable data={data} />}
    </>
  );
};

export default KidsCamp;

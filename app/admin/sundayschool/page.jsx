'use client'

import { useEffect, useState } from 'react';

export default function SundaySchoolTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/sundaySchool');
        const result = await response.json();
        setData(result.events);
        setFilteredData(result.events);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSort = (column) => {
    const order = sortColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortOrder(order);
  
    const sortedData = [...filteredData].sort((a, b) => {
      let valueA = a[column];
      let valueB = b[column];
  
      // Handle sorting by age as an integer
      if (column === 'age') {
        valueA = parseInt(valueA, 10);
        valueB = parseInt(valueB, 10);
      }
  
      if (valueA < valueB) return order === 'asc' ? -1 : 1;
      if (valueA > valueB) return order === 'asc' ? 1 : -1;
      return 0;
    });
  
    setFilteredData(sortedData);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredData(
      data.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(query)
        )
      )
    );
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getColumnHeader = (label, column) => (
    <th
      onClick={() => handleSort(column)}
      className="px-5 py-4 border-b border-gray-200 text-left text-sm font-medium text-gray-700 cursor-pointer hover:bg-gray-200"
    >
      {label}
      {sortColumn === column && (
        <span className="ml-2">{sortOrder === 'asc' ? '↑' : '↓'}</span>
      )}
    </th>
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (loading) {
    return <div className="text-center text-gray-700">Loading...</div>;
  }

  return (
    <div className="pt-12">
      <div className="bg-white rounded-xl p-6 py-8">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className='md:text-2xl font-semibold pb-2 text-gray-700'>Sunday School</div>
            <p className="md:text-lg text-gray-500 pb-4">{data.length} total</p>
          </div>
          <div className='flex gap-4 md:gap-6 items-center text-gray-700'>
            <div className='flex flex-col text-sm items-center'>
              <span className='md:text-2xl'>{data.filter(item => item.langPref === 'Ukrainian / Українська').length}</span>
              Ukrainian
            </div>
            <vr className="w-0.5 h-10 bg-gray-200" />
            <div className='flex flex-col text-sm items-center'>
              <span className='md:text-2xl'>{data.filter(item => item.langPref === 'English / Aнглійська').length}</span>
              English
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex relative ml-5 md:ml-0 text-gray-500 focus-within:text-gray-900 mb-4">
          <div className="absolute inset-y-0 left-1 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 17.5L15.4167 15.4167M15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333C11.0005 15.8333 12.6614 15.0929 13.8667 13.8947C15.0814 12.6872 15.8333 11.0147 15.8333 9.16667Z" stroke="#9CA3AF" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-80 h-11 pr-5 pl-12 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Table Start */}
        <div className="flex flex-col min-h-[700px]">
          <div className="overflow-x-auto">
            <div className="min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <hr />
                <table className="min-w-full rounded-xl bg-white">
                  <thead>
                    <tr>
                      {getColumnHeader('Last Name', 'childLastName')}
                      {getColumnHeader('First Name', 'childFirstName')}
                      {getColumnHeader('Age', 'age')}
                      {getColumnHeader('Grade', 'schoolGrade')}
                      {getColumnHeader('Birth Date', 'birthDate')}
                      {getColumnHeader('Language', 'langPref')}
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.map((event) => (
                      <tr key={event._id} className="bg-white transition-all duration-500 hover:bg-gray-50">
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{event.childLastName}</td>
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{event.childFirstName}</td>
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{event.age}</td>
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{event.schoolGrade}</td>
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{event.birthDate}</td>
                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{event.langPref}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Table End */}

        {/* Pagination Start */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <button
            className={`px-3 py-1 border rounded ${currentPage === 1 ? 'hidden' : 'bg-white hover:bg-gray-200'}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? 'hidden' : 'bg-white hover:bg-gray-200'}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        {/* Pagination End */}
      </div>
    </div>
  );
}

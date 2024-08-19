import Link from 'next/link'
import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-col md:flex-row relative md:gap-6 bg-gray-100 justify-center h-screen'>
                {/* Left panel navigation */}
                {/* <div className='flex items-center justify-center relative md:h-screen md:pl-12 md:w-1/5'>
                    <div className='flex md:flex-col gap-4 border px-4 md:px-4 py-4 md:py-8 rounded-3xl'>
                        <Link href='/admin' className='hover:scale-110 ease-in-out duration-300 flex items-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className='hidden md:flex'>Youth</span>
                        </Link>
                        <Link href='/admin/sundayschool' className='hover:scale-110 ease-in-out duration-300 flex items-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                            <span className='hidden md:flex'>Sunday School</span>
                        </Link>
                        <hr />
                        <Link href='/admin' className='hover:scale-110 ease-in-out duration-300 flex items-center gap-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className='hidden md:flex'>Home</span>
                        </Link>
                    </div>
                </div> */}
                {/* Right panel content */}
                <div className="w-full md:w-4/5 px-2.5 md:px-8">
                    {children}
                </div>
            </div>
        </>

    )
}

export default layout
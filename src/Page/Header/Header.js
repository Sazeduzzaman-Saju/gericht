import React, { useState } from 'react';

const Header = () => {
    const [open, setOpen] = useState(false);
    // const [flyer, setFlyer] = useState(false);
    // const [flyerTwo, setFlyerTwo] = useState(false);

    return (
        <>
            <div className="relative " style={{ backgroundColor: "var(--main-color)" }}>
                <div className="max-w-7xl mx-auto ">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <div className="flex fle-row justify-start lg:w-0 lg:flex-1">
                            <a href="/">

                                <img
                                    className="flex flex-row justify-start p-1"
                                    src="https://i.ibb.co/MkRDmPj/Geri-cht.png"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Heroicon name: outline/menu */}
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                        {/* Desktop Menu */}
                        <nav className="hidden md:flex space-x-10 text-white">
                            <div className="relative">
                                <button className=" btn btn-ghost text-white hover:text-amber-300  hover:scale-110 ease-in duration-300"><span>Home</span></button>
                            </div>
                            <div className="relative">
                                <button className=" btn btn-ghost text-white hover:text-amber-300  hover:scale-110 ease-in duration-300"><span>Page</span></button>
                            </div>
                            <div className="relative">
                                <button className=" btn btn-ghost text-white hover:text-amber-300  hover:scale-110 ease-in duration-300"><span>Contact Us</span></button>
                            </div>
                            <div className="relative">
                                <button className=" btn btn-ghost text-white hover:text-amber-300  hover:scale-110 ease-in duration-300 "><span>Blog</span></button>
                            </div>
                        </nav>
                        {/* Login Details */}

                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 text-white ">
                            <div>
                                <button className="text-white hover:text-amber-300  hover:scale-110 ease-in duration-300"
                                > Login </button><span className='ml-2'>/</span>
                                <button className="btn glass ml-2 text-white hover:text-amber-300  hover:scale-110 ease-in duration-300 "
                                > Registration
                                </button>
                            </div>
                            <span className='ml-3'>|</span>
                            <div className='ml-3'>
                                <button className="text-white hover:text-amber-300  hover:scale-110 ease-in duration-300"
                                > Book Table </button>
                            </div>
                        </div>


                    </div>
                </div>

                <div className={
                    open
                        ? "opacity-100 scale-100  ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                }
                >
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-amber-300 text-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5 " style={{ zIndex: "999" }}>
                            <div className="flex items-center justify-between">
                                <div>
                                    {/* Brand Logo */}
                                    <img
                                        className="h-8 w-auto"
                                        src="https://i.ibb.co/MkRDmPj/Geri-cht.png"
                                        alt="Workflow"
                                    />
                                </div>
                                {/* Main Menu Menu */}
                                <div className="mr-2">
                                    <button
                                        type="button"
                                        className="bg-amber-300 text-black rounded-md p-2 inline-flex items-center justify-center  hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                        onClick={() => setOpen(!open)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Menu Start */}
                            <div className="mt-6">
                                <nav className="grid gap-y-8">
                                    <div className="relative">
                                        <button className=" btn btn-ghost "><span>Home</span></button>
                                    </div>
                                    <div className="relative">
                                        <button className=" btn btn-ghost"><span>Page</span></button>
                                    </div>
                                    <div className="relative">
                                        <button className=" btn btn-ghost"><span>Contact Us</span></button>
                                    </div>
                                    <div className="relative">
                                        <button className=" btn btn-ghost"><span>Blog</span></button>
                                    </div>

                                    <div className=" text-white">
                                        <a href="/" className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900"
                                        > Sign in </a><span className='ml-2'>/</span>
                                        <a href="/" className="btn glass ml-2 text-white"
                                        > Sign up
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
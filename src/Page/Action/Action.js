import React from 'react';

const Action = () => {
    return (
        <div className="w-2/4 bg-red-500 mx-auto " style={{
            background: "#0C0C0C",
            border: "1px solid rgba(220, 202, 135, 0.2)",
            boxShadow: "22px 30px 95px 1px rgba(0, 0, 0, 0.7)"
        }}>
            <div className="container  p-4 py-20  md:p-10">
                <div className='flex flex-col justify-center place-items-center'>
                    <p className="text-white text-2xl font-serif hero-first">Letter</p>
                    <img src="https://i.ibb.co/M9whFk7/Frame-17.png" alt="" className=" w-10 pb-2 animate-pulse" />
                </div>
                <h1 className="lg:text-8xl sm:text-4xl text-center text-amber-500">Subscribe to Our Newsletter</h1>
                <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">Find out about events and other news</p>
                <div className="flex flex-row">
                    <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg bg-black sm:w-2/3" />
                    <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-amber-400 dark:text-gray-900">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Action;
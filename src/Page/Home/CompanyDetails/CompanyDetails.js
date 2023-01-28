import React from 'react';

const CompanyDetails = () => {
    return (
        <section className='details_area mt-24  flex flex-row justify-center items-center'>
            <div className='max-w-7xl mx-auto mt-16 mb-16'>
                <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 details_content'>
                    <div className='text-end '>
                        <h1 className='text-6xl primary-color '>About Us</h1>
                        <p className='text-end about_details pt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, sapiente modi atque praesentium deserunt esse unde iusto doloribus assumenda totam ut non vitae necessitatibus deleniti consequatur reiciendis. Voluptates, repellat incidunt.</p>
                    </div>
                    <div className='flex flex-row justify-center w-3/4'>
                        <img className='w-20' src="https://i.ibb.co/wrn4Cwy/savernake-knives-f4jl2ezowu-M-unsplash-2.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-6xl primary-color'>Our History</h1>
                        <p className='history_details pt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, sapiente modi atque praesentium deserunt esse unde iusto doloribus assumenda totam ut non vitae necessitatibus deleniti consequatur reiciendis. Voluptates, repellat incidunt.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyDetails;
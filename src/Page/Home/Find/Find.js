import React from 'react';
import PrimaryButton from '../../../comps/PrimaryButton';

const Find = () => {
    return (
        <section className='pt-24 pb-24 find_area ' >
            <div className='grid grid-cols-2 max-w-7xl mx-auto special centers'>
                <div>
                    <p className="text-white text-2xl font-serif hero-first">Contact</p>
                    <img src="https://i.ibb.co/M9whFk7/Frame-17.png" alt="" className="flex flex-row justify-start w-10 pb-2 animate-pulse" />
                    <h1 className="lg:text-7xl  sm:text-4xl pt-5 pb-5 " style={{ color: "var(--primary-color)" }}>
                        Find Us
                    </h1>
                    <p className=''>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
                    <h1 className="lg:text-3xl sm:text-4xl pt-5 pb-5 " style={{ color: "var(--primary-color)" }}>
                        Opening Hours
                    </h1>
                    <p>Mon - Fri: 10:00 am - 02:00 am</p>
                    <p>Sat - Sun: 10:00 am - 03:00 am</p>
                    <PrimaryButton>View More</PrimaryButton>
                </div>
                <div>
                    <div>
                        <div className="lg:flex-col sm:flex-col-reverse">
                            <div className="flex flex-row justify-center">
                                <img src='https://i.ibb.co/qyLWV8D/Group-90.png' alt="" className=" w-2/3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Find;
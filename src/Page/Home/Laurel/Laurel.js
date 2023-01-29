import React from 'react';
import LaurelFeature from './LaurelFeature/LaurelFeature';

const Laurel = () => {
    return (
        <section className='laurel_container pt-24 pb-24'>
            <div className='grid grid-cols-2 gap-10 max-w-7xl mx-auto'>
                <div className="p-5 ">
                    <div className="">
                        <p className="text-white text-2xl font-serif hero-first">Awards & recognition</p>
                        <img src="https://i.ibb.co/M9whFk7/Frame-17.png" alt="" className="flex flex-row justify-start w-10 pb-2 animate-pulse" />
                        <h1 className="lg:text-8xl sm:text-4xl pt-5 pb-5 " style={{ color: "var(--primary-color)" }}>
                            Our Laurels
                        </h1>
                        <LaurelFeature></LaurelFeature>
                    </div>
                </div>
                <div>
                    <div className="lg:flex-col sm:flex-col-reverse">
                        <div className="flex flex-row justify-center">
                            <img src='https://i.ibb.co/HPLLBTw/Group-89.png' alt="" className=" w-2/3" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Laurel;
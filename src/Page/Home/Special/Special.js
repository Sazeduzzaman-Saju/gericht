import React from 'react';
import PrimaryButton from '../../../comps/PrimaryButton';

const Special = () => {
    const data = [
        {
            id: 1,
            name: "Chapel Hill Shiraz",
            price: '$ 56',
            country: "AU | Bottle"
        },
        {
            id: 2,
            name: "Catena Malbec",
            price: '$ 59',
            country: "AR | Bottle"
        },
        {
            id: 3,
            name: "Rhino Pale Ale",
            price: '$ 31',
            country: "CA | 750 ml"
        },
        {
            id: 4,
            name: "Irish Guinness",
            price: '$ 26',
            country: "IE | 750 ml"
        },
        {
            id: 5,
            name: "Rhino Pale Ale",
            price: '$ 31',
            country: "CA | 750 ml"
        },
    ]
    return (
        <section>
            <div className='max-w-7xl mx-auto mt-24 mb-15'>
                <div className='flex flex-col justify-center items-center mb-24'>
                    <p>Menu that fits you palate</p>
                    <img src="https://i.ibb.co/M9whFk7/Frame-17.png" alt="" className="flex flex-row justify-start w-10 pb-2 animate-pulse" />
                    <h1 className='text-6xl primary-color'>Today’s Special</h1>
                </div>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='text-white'>
                        <h1 className='text-4xl text-center mb-3'>
                            Win & Beer
                        </h1>
                        {data.map((value) => <div key={value.id} className='pt-14'>
                            <div className='flex flex-row justify-between gap-10'>
                                <h1 className='text-2xl primary-color'>{value.name}</h1>
                                <h1 className='text-2xl primary-color'><span>-------------</span></h1>
                                <h1 className='text-2xl primary-color'><span>{value.price}</span></h1>
                            </div>
                            <p>{value.country}</p>
                        </div>)}
                    </div>
                    <div>
                        <img src="https://i.ibb.co/tHVb0gq/Mask-Group.png" alt="" />
                    </div>
                    <div className='text-white '>
                        <h1 className='text-4xl text-center'>
                            Cocktails
                        </h1>
                        {data.map((value) => <div key={value.id} className='pt-14'>
                            <div className='flex flex-row justify-between gap-10'>
                                <h1 className='text-2xl primary-color'>{value.name}</h1>
                                <h1 className='text-2xl primary-color'><span>-------------</span></h1>
                                <h1 className='text-2xl primary-color'><span>{value.price}</span></h1>
                            </div>
                            <p>{value.country}</p>
                        </div>)}
                    </div>
                </div>
                <div className='flex flex-row justify-center align-middle pt-10 pb-24'><PrimaryButton>View More</PrimaryButton></div>
            </div>
        </section>
    );
};

export default Special;
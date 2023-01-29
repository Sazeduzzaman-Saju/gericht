import React from 'react';

const Chef = () => {
    return (
        <section className='max-w-7xl mx-auto centers'>
            <div className='grid grid-cols-2 gap-10 special '>
                <div>
                    <div className='image-res'>
                        <img className='w-3/4 ' src="https://i.ibb.co/YW5zzrv/Group-88-1.png" alt="" />
                    </div>
                </div>
                <div className="">
                    <p className="text-white text-2xl font-serif hero-first">Chef’s Word</p>
                    <img src="https://i.ibb.co/M9whFk7/Frame-17.png" alt="" className="flex flex-row justify-start w-10 pb-2 animate-pulse" />

                    <h1 className='text-6xl primary-color pt-10' >What we believe in</h1>
                    <div class="text-article pt-16 ">
                        “Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc
                    </div>
                    <div>
                        <h1 className='text-3xl primary-color pt-10' >Kevin Luo</h1>
                        <p>Chef & Founder</p>
                        <p className='pt-16 chef-signature'>Kevin Luo</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Chef;
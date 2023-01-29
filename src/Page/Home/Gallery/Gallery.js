import React from 'react';
import PrimaryButton from '../../../comps/PrimaryButton';
import GalleryCarousel from './GalleryCarousel';

const Gallery = () => {
    return (
        <section className='max-w-7xl mx-auto pt-24 pb-24'>
            <div className='grid grid-cols-2'>
                <div className='w-4/4'>
                    <GalleryCarousel></GalleryCarousel>
                </div>
                <div className="ml-24">
                    <p className="text-white text-2xl font-serif hero-first">Instagram</p>
                    <img src="https://i.ibb.co/M9whFk7/Frame-17.png" alt="" className="flex flex-row justify-start w-10 pb-2 animate-pulse" />
                    <h1 className="lg:text-7xl w-40 sm:text-4xl pt-5 pb-5 " style={{ color: "var(--primary-color)" }}>
                        Photo Gallery
                    </h1>
                    <p className='w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                    <PrimaryButton>View More</PrimaryButton>
                </div>

            </div>
        </section>
    );
};

export default Gallery;
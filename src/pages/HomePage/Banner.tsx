import React from 'react';
import bannerBg from '../../assets/bannerImg.png'

const Banner = () => {
    return (
        <header className='banner-bg min-h-auto'>
            <div className='container mx-auto py-8 px-2'>
                <h2 className='text-white text-4xl md:text-6xl mb-6 font-bold'>
                    Let's make <br />
                    beautiful flowers a <br />
                    part of your life.</h2>
                <p className='text-white w-full md:w-1/2 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <button className='btn'>Shop Now</button>
            </div>
        </header>
    );
};

export default Banner;
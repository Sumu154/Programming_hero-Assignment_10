import React from 'react';

import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';


import check from '../../assets/icons/home_check.svg'
import gift from '../../assets/icons/home_gift.svg'
import buildings from '../../assets/icons/home_buildings.svg'
import globe from '../../assets/icons/home_globe.svg'


const OrganizationSection = () => {
  return (
    <div className='w-[90%] mx-auto mt-16'>
      <h3 className="text-black dark:text-white text-opacity-70 font-semibold text-2xl sm:text-3xl lg:text-3xl text-center m-6">
        <Typewriter 
          words={['Our Organization']}
          loop={1}   // Set how many times it should loop (1 = once)
          typeSpeed={100}   // Speed of typing
          deleteSpeed={50}   // Speed of deletion
          delaySpeed={1000}   // Delay before the typing starts
        />
      </h3>      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center'>
        <div className='bg-white px-4 pb-8 rounded-sm hover:border-[1px] border-jolpai       dark:bg-cardbackground'>
          <div className='h-24 flex justify-center'> <img className='w-14' src={check} alt="" /> </div>
          <p className='opacity-70  text-sm mb-3      dark:text-white'> Empowering nonprofit organizations to achieve their fundraising goals and make a meaningful impact in their communities. </p>
          <Link className='text-jolpai font-semibold'> NONPROFIT </Link>
        </div>
        <div className='bg-white px-4 pb-8 rounded-sm hover:border-[1px] border-orange   dark:bg-cardbackground'>
          <div className='h-24 flex justify-center '> <img className='w-14' src={gift} alt="" /> </div>
          <p className='opacity-70 text-sm mb-3    dark:text-white'> Join as a donor and support innovative projects that align with your passions and values. </p>
          <Link className='text-orange font-semibold'> DONORS </Link>
        </div>
        <div className='bg-white px-4 pb-8 rounded-sm hover:border-[1px] border-sky   dark:bg-cardbackground'>
          <div className='h-24 flex justify-center '> <img className='w-14' src={buildings} alt="" /> </div>
          <p className='opacity-70 text-sm mb-3   dark:text-white'> Collaborate with businesses to create sustainable partnerships that drive social change. </p>
          <Link className='text-sky font-semibold'> COMPANIES </Link>
        </div>
        <div className='bg-white px-4 pb-8 rounded-sm hover:border-[1px] border-yellow   dark:bg-cardbackground'>
          <div className='h-24 flex justify-center '> <img className='w-14' src={globe} alt="" /> </div>
          <p className='opacity-70 text-sm mb-3    dark:text-white'> See how our collective efforts are transforming lives and making a difference worldwide. </p>
          <Link className='text-yellow font-semibold'> OUR IMPACT </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSection;
import React from 'react';

import { Link } from 'react-router-dom';


import check from '../../assets/icons/home_check.svg'
import gift from '../../assets/icons/home_gift.svg'
import buildings from '../../assets/icons/home_buildings.svg'
import globe from '../../assets/icons/home_globe.svg'


const OrganizationSection = () => {
  return (
    <div className='w-[90%] mx-auto mt-16'>
      <h3  className='text-black text-opacity-70 font-semibold text-2xl sm:text-3xl lg:text-3xl text-center m-6'> Our Organization </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-center'>
        <div className='bg-white px-4 pb-8 rounded-sm hover:border-[1px] border-jolpai'>
          <div className='h-24 flex justify-center'> <img className='w-14' src={check} alt="" /> </div>
          <p className='opacity-70 text-sm mb-3'> Empowering nonprofit organizations to achieve their fundraising goals and make a meaningful impact in their communities. </p>
          <Link className='text-jolpai font-semibold'> NONPROFIT </Link>
        </div>
        <div className='bg-white px-4 pb-8 rounded-sm hover:border-[1px] border-orange'>
          <div className='h-24 flex justify-center '> <img className='w-14' src={gift} alt="" /> </div>
          <p className='opacity-70 text-sm mb-3'> Join as a donor and support innovative projects that align with your passions and values. </p>
          <Link className='text-orange font-semibold'> DONORS </Link>
        </div>
        <div className='bg-white px-4 pb-8 rounded-sm hover:border-[1px] border-sky'>
          <div className='h-24 flex justify-center '> <img className='w-14' src={buildings} alt="" /> </div>
          <p className='opacity-70 text-sm mb-3'> Collaborate with businesses to create sustainable partnerships that drive social change. </p>
          <Link className='text-sky font-semibold'> COMPANIES </Link>
        </div>
        <div className='bg-white px-4 pb-8 rounded-sm hover:border-[1px] border-yellow'>
          <div className='h-24 flex justify-center '> <img className='w-14' src={globe} alt="" /> </div>
          <p className='opacity-70 text-sm mb-3'> See how our collective efforts are transforming lives and making a difference worldwide. </p>
          <Link className='text-yellow font-semibold'> OUR IMPACT </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationSection;
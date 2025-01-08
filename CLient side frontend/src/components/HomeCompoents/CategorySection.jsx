import React from 'react';

import campaign from '../../assets/icons/campaign (1).png'
import collection from '../../assets/icons/coin-collecting.png'
import customer from '../../assets/icons/costumer.png'
import volunteer from '../../assets/icons/team.png'

const CategorySection = () => {
  return (
    <div className='bg-sky mt-20 '>
      <div className='w-[90%] mx-auto text-white py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 '>
        <div className='text-center  '>
          <img className='mx-auto mb-4 ' src={campaign} alt="" />
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold '> 690+ </h3>
          <p className='text-lg lg:text-xl font-semibold '> Campaigns Completed </p>
        </div>
        <div className='text-center  '>
          <img className='mx-auto mb-4 ' src={collection} alt="" />
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold '> 111k </h3>
          <p className='text-lg lg:text-xl font-semibold '> Funds collected worldwide </p>
        </div>
        <div className='text-center  '>
          <img className='mx-auto mb-4 ' src={customer} alt="" />
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold '> 99k+ </h3>
          <p className='text-lg lg:text-xl font-semibold '> Happy Customers </p>
        </div>
        <div className='text-center  '>
          <img className='mx-auto mb-4 ' src={volunteer} alt="" />
          <h3 className='text-3xl md:text-4xl lg:text-5xl font-bold '> 90+ </h3>
          <p className='text-lg lg:text-xl font-semibold '> Volunteer teams </p>
        </div>
      </div>
    </div>

  );
};

export default CategorySection;
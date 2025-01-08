import React from 'react';
import { Link } from 'react-router-dom';

const CampaignCard = ( {campaign} ) => {

  const {  _id:id, photo, title, type, minAmount, deadline, description } = campaign;


  return (
    <div className='border-black dark:border-[#444444] border-[1px] border-opacity-15 rounded-md p-3 hover:border-blue hover:border-opacity-50 hover:p-2  dark:bg-cardbackground '>
      <div className='mb-4'> 
        <img className='rounded-lg h-[160px] w-full ' src={photo} alt="" />
      </div>
      <div className='dark:text-white'>
        <h3 className='opacity-95 font-bold text-xl  '> {title} </h3>
        <p className='opacity-90 font-medium text-lg '> {type} </p>
        <p className='opacity-80'> {description} </p>
      </div>
      <div className='mt-3 '> <Link to={`/campaign/${id}`}> <button className='bg-blue opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Details </button> </Link> </div>
    </div>
  );
};

export default CampaignCard;
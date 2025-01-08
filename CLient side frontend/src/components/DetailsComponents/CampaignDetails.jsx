import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import { RiFundsLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2';

import '../../assets/stylesheets/campaign.css'

const CampaignDetails = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);


  const campaign = useLoaderData();
  // console.log(campaign);
  const { _id:id, userName, userEmail, title, type, minAmount, deadline, photo, description } = campaign;

  const [ status, setStatus ] = useState('');

  useEffect(() => {
    const getStatus = () => {
      const currentDate = new Date();
      const campaignDeadline = new Date(deadline);

      if (campaignDeadline > currentDate) {
        setStatus('Ongoing');
      } else {
        setStatus('Closed');
      }
    };

    getStatus();
  }, [deadline]);

  const statusClass = status==='Ongoing' ? 'text-green border-green bg-green' 
                      : 'text-redd border-redd bg-redd';

  
  const handleDonate = async () => {
    // console.log(user.displayName, user.email);
    const donatedUser = {
      name: user.displayName, 
      email: user.email,
      campaign_id: id,
    }
    //console.log(donatedUser);

    const res = await fetch(`https://server-side-backend.vercel.app/api/donatedUsers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donatedUser),
    });
    const data = await res.json();

    Swal.fire({
      title: "Congratulation!",
      text: "Funding added successfully!",
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    });
  };



  return (
    <div className='bg-white my-14 py-12'>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] mx-auto mb-10 flex flex-col sm:flex-row justify-between items-center gap-8'>
        <div> 
          <img className='rounded-lg w-[80%] sm:w-full mx-auto h-[150px] sm:h-[180px] lg:h-[200px] ' src={photo} alt="" />
        </div>
        <div className='text-black text-opacity-60'>
          <div className='flex justify-between items-center'>
            <h3 className='text-xl lg:text-2xl font-bold text-black text-opacity-80 mb-1'> {title} </h3>
            <span className={`text-sm font-semibold border-[1px] bg-opacity-20 rounded-3xl px-3 py-1 mr-4 ${statusClass}`}> {status} </span>
          </div>
          <p className='text-lg lg:text-xl mb-1 '> {type} </p>
          <p className='my-1'> {description} </p>
          <p className='flex items-center gap-1'> <span className='text-xl'> <RiFundsLine /> </span> Minimum funding:  <span className='ml-1'> ${minAmount} </span> </p>
          <div className='flex justify-center sm:justify-start mt-6 sm:mt-3'> <button onClick={handleDonate} className='bg-blue opacity-90 hover:bg-blue hover:opacity-100 text-white px-5 py-[6px] rounded-lg '> Donate now </button> </div>
        </div>
      </div>

      <div className='w-[85%] md:w-[75%] lg:w-[65%] mx-auto text-black text-opacity-75'>
        <p> Added By: </p>
        <p className='flex items-center gap-1'> <span className='text-lg'> <FaRegUserCircle /> </span> Username:  <span className='ml-1'> {userName} </span> </p>
        <p className='flex items-center gap-1'> <span className='text-xl'> <MdEmail /> </span> Email:  <span className='ml-1'> {userEmail} </span> </p>
      </div>
      
    </div>
  );
};

export default CampaignDetails;
import React, { useEffect, useState } from 'react';
import CampaignCard from '../CampaignComponents/CampaignCard';

import { Fade } from 'react-awesome-reveal';
 


const HomeCampaigns = () => {

  const [ campaigns, setCampaigns ] = useState([]);

  useEffect(()=>{
      const fetchCampaigns = async () => {
        const res = await fetch('https://server-side-backend.vercel.app/api/campaigns/');
        const data = await res.json();
  
        setCampaigns(data.slice(0, 6));
        // console.log(data);
      }
  
      fetchCampaigns();
    }, []);  



  return (
    <div id='campaigns' className='w-[90%] mx-auto my-20 '>
      <h3 className='text-black text-opacity-70 font-semibold text-2xl sm:text-3xl lg:text-3xl text-center m-6    dark:text-white'> Our Featured Campaigns </h3>
      {/* Fade effect on the paragraph */}
      <Fade delay={300}>
        <p className='text-center text-gray-600 dark:text-gray-300'> Discover the most impactful campaigns that are changing lives. Join us in supporting a cause that makes a difference. </p>
      </Fade>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3   mt-8'> {campaigns.map((it) => {
        return <CampaignCard campaign={it} ></CampaignCard>
      })}
      </div>
    </div>
  );
};

export default HomeCampaigns;
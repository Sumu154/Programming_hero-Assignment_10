import React, { useEffect, useState } from 'react';
import CampaignCard from '../CampaignComponents/CampaignCard';

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
      <h3 className='text-black text-opacity-70 font-semibold text-2xl sm:text-3xl lg:text-3xl text-center m-6'> Our Featured Campaigns </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'> {campaigns.map((it) => {
        return <CampaignCard campaign={it} ></CampaignCard>
      })}
      </div>
    </div>
  );
};

export default HomeCampaigns;
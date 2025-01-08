import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import CampaignCard from '../CampaignComponents/CampaignCard';

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const [ campaignIds, setCampaignIds ] = useState([]);
  const [ campaigns, setCampaigns ] = useState([]);
  
  useEffect(() => {
    const fetchCampaignIds = async () => {
      const res = await fetch(`https://server-side-backend.vercel.app/api/donatedUserDonations?email=${email}`);
      const data = await res.json();

      //console.log(data);
      // extracts campaign IDs
      const ids = data.map((it) => {
        return it.campaign_id;
      });
      // console.log(ids);
      setCampaignIds(ids);

    }
    fetchCampaignIds();
  }, [email]);


  // get campaigns from campaign ids
  useEffect(() => {
    const fetchCampaigns = async () => {
      const campaignData = await Promise.all(
        campaignIds.map(async (id) => {
          const res = await fetch(`https://server-side-backend.vercel.app/api/campaign/${id}`);
          return res.json();
        })
      );

      // Update state with all campaigns
      setCampaigns(campaignData);
    }
    fetchCampaigns();
  }, [campaignIds]);

  //console.log(campaigns);

  return (
    <div className='w-[90%] mx-auto my-12 '>
      <h3 className='opacity-80 font-medium text-3xl lg:text-4xl mb-4   dark:text-white'> See your donations here </h3>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'> {campaigns.map((it) => {
        return <CampaignCard campaign={it} ></CampaignCard>
      })}
      </div>
    </div>
  );
};

export default MyDonations;
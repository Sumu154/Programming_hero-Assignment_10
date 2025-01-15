import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import CampaignCard from '../CampaignComponents/CampaignCard';
import LoadingPage from '../../pages/LoadingPage';

const MyDonations = () => {
  const { user } = useContext(AuthContext);
  const email = user.email;

  const [ campaignIds, setCampaignIds ] = useState([]);
  const [ campaigns, setCampaigns ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  
  useEffect(() => {
    const fetchCampaignIds = async () => {
      setLoading(true);
      try{
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
      finally{
        setLoading(false);
      }

    }
    fetchCampaignIds();
  }, [email]);


  // get campaigns from campaign ids
  useEffect(() => {
    if(campaignIds.length === 0){
      return;
    }
    const fetchCampaigns = async () => {
      setLoading(true);
      try{
        const campaignData = await Promise.all(
          campaignIds.map(async (id) => {
            const res = await fetch(`https://server-side-backend.vercel.app/api/campaign/${id}`);
            if (res.ok) {
              return res.json();
            }
            return undefined;
          })
        );
  
        // Update state with all campaigns
        setCampaigns(campaignData);
      }
      finally{
        setLoading(false);
      }
    }
    fetchCampaigns();
  }, [campaignIds]);

  //console.log(campaigns);

  return (
    <div className='w-[90%] mx-auto my-12 '>
      <h3 className='opacity-80 font-medium text-3xl lg:text-4xl mb-4   dark:text-white'> See your donations here </h3>
      {loading===true &&  <LoadingPage></LoadingPage> }
      {campaigns.length===0 && <p className='py-8 px-12 text-black dark:text-white opacity-70'> No campaigns for donation </p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'> {campaigns.map((it) => {
        return <CampaignCard campaign={it} ></CampaignCard>
      })}
      </div>
    </div>
  );
};

export default MyDonations;
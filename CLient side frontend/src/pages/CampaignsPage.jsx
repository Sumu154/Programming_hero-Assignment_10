import React from 'react';
import CampaignBanner from '../components/Header/CampaignBanner';
import CampaignTable from '../components/CampaignComponents/CampaignTable';

const CampaignsPage = () => {
  return (
    <div>
      <CampaignBanner></CampaignBanner>
      <CampaignTable></CampaignTable>
    </div>
  );
};

export default CampaignsPage;
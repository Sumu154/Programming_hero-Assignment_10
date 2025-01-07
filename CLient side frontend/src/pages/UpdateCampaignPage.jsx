import React from 'react';
import UpdateCampaignForm from '../components/CampaignComponents/UpdateCampaignForm';
import { useLoaderData } from 'react-router-dom';

const UpdateCampaignPage = () => {
  const campaign = useLoaderData();

  return (
    <div>
      <UpdateCampaignForm campaign={campaign}></UpdateCampaignForm>
    </div>
  );
};

export default UpdateCampaignPage;
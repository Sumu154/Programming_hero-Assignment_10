import React from 'react';
import HomeBanner from '../components/Header/HomeBanner';
import CategorySection from '../components/HomeCompoents/CategorySection';
import OrganizationSection from '../components/HomeCompoents/OrganizationSection';
import HomeCampaigns from '../components/HomeCompoents/HomeCampaigns';

const HomePage = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
        <OrganizationSection></OrganizationSection>
        <CategorySection></CategorySection>
        <HomeCampaigns></HomeCampaigns>
    </div>
  );
};

export default HomePage;
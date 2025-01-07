import React, { useEffect } from 'react';
import '../../assets/stylesheets/campaign.css'
// import crowdfunding from '../../assets/images/crowdfunding.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CampaignBanner = () => {
  useEffect(() => {
      AOS.init({
        duration: 500,   // animation duration
        once: true,       // // Whether animation should happen only once
      })
    }, []);


  return (
    <div id='banner' className='w-full h-[180px] md:h-[220px] lg:h-[280px]  flex items-center' >
      {/* <img className='w-full h-[170px] md:h-[220px] lg:h-[280px] ' src={crowdfunding} alt="" /> */}
      <h3 data-aos="zoom-out" className="text-3xl md:text-4xl lg:text-5xl font-semibold px-12 w-[70%] text-white opacity-95"> Support and Explore Active Campaigns </h3>
    </div>
  );
};

export default CampaignBanner;
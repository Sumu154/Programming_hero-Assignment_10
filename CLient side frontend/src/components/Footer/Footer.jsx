import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white mt-20 text-sm md:text-base      dark:bg-footerbackground dark:text-white">
      <div className="text-blacktext py-12 mt-8 max-w-[680px] mx-auto">
        <h2 className="text-blue font-bold text-center text-base sm:text-2xl"> Crowd Funding </h2>
        <p className="opacity-70 text-center mx-5"> Empowering innovation by connecting great ideas with passionate supporters. </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between pt-10">
          <div className="text-center">
            <h5 className="text-lg font-bold"> Services </h5>
            <ul className="opacity-60">
              <li> <a href="/donate"> How to Donate </a> </li>
              <li> <a href="/locations"> Donation Drop-Off Locations </a> </li>
              <li> <a href="/volunteer"> Volunteer With Us </a> </li>
              <li> <a href="/faq"> FAQs </a> </li>
            </ul>
          </div>
          <div className="text-center">
            <h5 className="text-lg font-bold"> About </h5>
            <ul className="opacity-60">
              <li> <a href="/our-mission"> Our Mission </a> </li>
              <li> <a href="/partners"> Partners & Sponsors </a> </li>
              <li> <a href="/success-stories"> Success Stories </a> </li>
            </ul>
          </div>
          <div className="text-center">
            <h5 className="text-lg font-bold"> Legal </h5>
            <ul className="opacity-60">
              <li> <a href="/terms"> Terms of Service </a> </li>
              <li> <a href="/privacy"> Privacy Policy </a> </li>
              <li> <a href="/donation-policy"> Donation Policy </a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Footer;
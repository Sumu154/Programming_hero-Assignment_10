import React, { useEffect } from 'react';
import { MdOutlineExplore } from "react-icons/md";

import '../../assets/stylesheets/home.css'
// import slider1 from '../../assets/images/slider1.webp'
// import slider2 from '../../assets/images/slider2.jpg'
// import slider3 from '../../assets/images/slider4.jpg'


import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeBanner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,   // animation duration
      once: true,       // // Whether animation should happen only once
    })
  }, []);


  return (
    <div className="carousel w-full">
      {/* slide 1 */}
      <div id="slide1" className="carousel-item relative w-full ">
        <div className='w-[90%] mx-auto py-6 lg:py-0'>
          <div className='w-[85%] py-12 lg:py-24'>
            <p  data-aos="fade-down-right" className='text-white opacity-80 text-lg md:inline-block max-w-[550px] mx-auto font-Roboto '> Invest in Ideas That Inspire You </p>
            <h3 data-aos="zoom-out" className='text-white font-bold text-xl sm:text-4xl md:text-6xl lg:text-7xl max-[80%] '> Crowdfunding Made Simple, Impact Made Powerful </h3>
            <button className='text-white bg-blue py-2 px-4 mt-8 flex items-center gap-1'> <MdOutlineExplore /> Explore Campaigns </button>
          </div>
        </div>
        {/* left right bar */}
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* slide 2 */}
      {/* <div id="slide2" className="carousel-item relative w-full">
        <div className='flex justify-between items-center bg-lightpastel w-[90%] mx-auto py-6 lg:py-0'>
          <div className='w-[65%] text-center pl-4'>
            <h3 className='text-darkpastel font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[600px] mx-auto mb-4 px-2'> Warm Cumilla This Winter spread happiness </h3>
            <p className='text-dark opacity-60 text-sm hidden md:inline-block max-w-[550px] mx-auto mb-4 px-4'> Join us in bringing comfort to families in Cumilla this winter. Your support can help provide warm clothes supplies. </p>
            <p data-aos='flip-left' className='text-pink font-semibold text-base sm:text-xl flex gap-1 justify-center'> Donate Now <span className='text-xl sm:text-2xl'> <BiSolidDonateHeart/>  </span> </p>
          </div>
          <img className='w-[45%] md:w-[40%] h-[220px] md:h-[260px] lg:h-[300px] mr-6 rounded-md' src={slider1} alt="" />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> */}

      {/* slide 3 */}
      {/* <div id="slide3" className="carousel-item relative w-full">
        <div className='flex justify-between items-center bg-lightpastel w-[90%] mx-auto py-6 lg:py-0'>
          <div className='w-[65%] text-center pl-4'>
            <h3 className='text-darkpastel font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[600px] mx-auto mb-4 px-2'> Bring Warmth to Chittagong together </h3>
            <p className='text-dark opacity-60 text-sm hidden md:inline-block max-w-[550px] mx-auto mb-4 px-4'> Keep the warmth alive this winter by making a difference! Your donation can help bring comfort to those in need </p>
            <p data-aos='flip-left' className='text-pink font-semibold text-base sm:text-xl flex gap-1 justify-center'> Donate Now <span className='text-xl sm:text-2xl'> <BiSolidDonateHeart/>  </span> </p>
          </div>
          <img className='w-[45%] md:w-[40%] h-[220px] md:h-[260px] lg:h-[300px] mr-6 rounded-md' src={slider2} alt="" />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div> */}

      {/* slide 4 */}
      {/* <div id="slide4" className="carousel-item relative w-full">
        <div className='flex justify-between items-center bg-lightpastel w-[90%] mx-auto py-6 lg:py-0'>
          <div className='w-[65%] text-center pl-4'>
            <h3 className='text-darkpastel font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl max-w-[600px] mx-auto mb-4 px-2'>  Support Dhaka’s Winter Drive those who need </h3>
            <p className='text-dark opacity-60 text-sm hidden md:inline-block max-w-[550px] mx-auto mb-4 px-4'> Keep the warmth alive this winter by making a difference! Your donation can help bring comfort to those in need </p>
            <p data-aos='flip-left' className='text-pink font-semibold text-base sm:text-xl flex gap-1 justify-center'> Donate Now <span className='text-xl sm:text-2xl'> <BiSolidDonateHeart/>  </span> </p>
          </div>
          <img className='w-[45%] md:w-[40%] h-[220px] md:h-[260px] lg:h-[300px] mr-6 rounded-md' src={slider3} alt="" />
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div> */}
    </div>
  );
};

export default HomeBanner;
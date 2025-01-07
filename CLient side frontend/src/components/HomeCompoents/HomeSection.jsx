import React from 'react';
import campaign from '../../assets/icons/campaign (1).png'
import collect from '../../assets/icons/coin-collecting.png'
import withdraw from '../../assets/icons/cash-withdrawal.png'

const HomeSection = () => {
  return (
    <div className='w-[90%] mx-auto'>
      <h3> The mission of our organization. </h3>
      <p> We provide a trusted platform for peoples of worldwide to support people and organizers. </p>
      <div>
        <div>
          <div>
            <img className='bg-yellow p-2 w-16 rounded-full ' src={campaign} alt="" />
          </div>
          
        </div>
      </div>
      
    </div>
  );
};

export default HomeSection;
import React, { useContext, useEffect } from 'react';
import { CampaignContext } from '../../contexts/CampaignProvider';
import { Link } from 'react-router-dom';

const CampaignTable = () => {

  const { campaigns, setCampaigns } = useContext(CampaignContext);

  useEffect(()=>{
    const fetchCampaigns = async () => {
      const res = await fetch('https://server-side-backend.vercel.app/api/campaigns/');
      const data = await res.json();

      setCampaigns(data);
      // console.log(data);
    }

    fetchCampaigns();
  }, []);



  return (
    <div className='w-[90%] mx-auto bg-white mt-14 '>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-black text-opacity-85 text-sm lg:text-base'>
              <th> userName </th>
              <th> title </th>
              <th> type </th>
              <th> minAmount </th>
              <th> deadline </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { campaigns.map((it) => {
              const { _id:id, userName, title, type, minAmount, deadline } = it;

              return (
                <tr className='text-sm text-black text-opacity-70'>
                  <td> {userName} </td>
                  <td> {title} </td>
                  <td> {type} </td>
                  <td> {minAmount} </td>
                  <td> {deadline} </td>
                  <td> <Link to={`/campaign/${id}`}> <button className='bg-blue opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Details </button> </Link> </td>
                </tr>
              )
            })} 
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;
import React, { useContext, useEffect, useState } from 'react';
import { CampaignContext } from '../../contexts/CampaignProvider';
import { Link } from 'react-router-dom';



const CampaignTable = () => {
  const { campaigns, setCampaigns } = useContext(CampaignContext);
  const [sortOrder, setSortOrder] = useState(""); // State for sorting order


  useEffect(()=>{
    const fetchCampaigns = async () => {
      const res = await fetch('https://server-side-backend.vercel.app/api/campaigns/');
      const data = await res.json();

      setCampaigns(data);
      // console.log(data);
    }

    fetchCampaigns();
  }, []);


  const handleSortCampaigns = () => {
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      if(sortOrder === "asc"){
        return a.minAmount - b.minAmount; // Ascending order
      } 
      else{
        return b.minAmount - a.minAmount; // Descending order
      }
    });

    setCampaigns(sortedCampaigns);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };



  return (
    <div className='w-[90%] mx-auto mt-14     '>
      <div className='flex justify-between items-center   mb-4 '>
        <h3 className='font-semibold text-black opacity-80 text-2xl md:text-3xl   dark:text-white '> See all campaigns here </h3> 
        <button onClick={handleSortCampaigns} className="bg-blue opacity-90 hover:opacity-100  px-4 py-1 rounded-md text-white"> Sort  </button>
      </div>

      {/* campaigns in table format */}
      <div className="overflow-x-auto  bg-white  dark:bg-cardbackground">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-black text-opacity-85 text-sm lg:text-base  dark:text-white'>
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
                <tr className='text-sm text-black text-opacity-70    dark:text-white  dark:text-opacity-70'>
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
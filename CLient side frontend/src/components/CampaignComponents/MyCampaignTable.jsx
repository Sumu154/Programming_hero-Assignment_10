import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCampaignTable = () => {
  const { user } = useContext(AuthContext);
  const email =user.email;
  // console.log(email);

  const [campaigns, setCampaigns] = useState([]);


  useEffect(() => {
    const fetchMyCampaigns = async () => {
      const res = await fetch(`https://server-side-backend.vercel.app/api/myCampaigns?email=${email}`);
      const data = await res.json();

      setCampaigns(data);
      
    }

    fetchMyCampaigns();
  }, [user.email]);


  const handleDeleteCampaign = async (id) => {
    //console.log(id);

    const alert = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });
  
    if(alert.isConfirmed){
      await Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
      // Add your delete logic here, if any

      const res = await fetch(`https://server-side-backend.vercel.app/api/deleteCampaign/${id}`, {
        method: 'DELETE',
      });
    }
  }

  

  return (
    <div className='w-[90%] mx-auto bg-white mt-14 '>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-black text-opacity-85 text-sm lg:text-base'>
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
                  <td> {title} </td>
                  <td> {type} </td>
                  <td> {minAmount} </td>
                  <td> {deadline} </td>
                  <td> <Link to={`/campaign/${id}`}> <button className='bg-blue opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Details </button> </Link> </td>
                  <td> <Link to={`/updateCampaign/${id}`}> <button className='bg-yellow opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Update </button> </Link> </td>
                  <td> <button onClick={()=>handleDeleteCampaign(id)} className='bg-redd opacity-90 hover:opacity-100 px-3 py-1 rounded-md text-white '> Delete </button> </td>
                </tr>
              )
            })} 
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default MyCampaignTable;
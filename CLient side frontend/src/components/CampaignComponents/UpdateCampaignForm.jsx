import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';




const UpdateCampaignForm = ( {campaign} ) => {
  //console.log(campaign);
  const { _id:id } = campaign;

  const navigate = useNavigate();
  const [error, setError] = useState('');


  const handleUpdateCampaign = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const title = form.get('title');
    const type = form.get('type');
    const minAmount = form.get('minAmount');
    const deadline = form.get('deadline');
    const photo = form.get('photo');
    const description = form.get('description');

    const updatedCampaign = { title, type, minAmount, deadline, photo, description };
    
    // database e store korte hbe
    const res = await fetch(`https://server-side-backend.vercel.app/api/updateCampaign/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCampaign),

    })
    const data = await res.json();
   // console.log(data);

    Swal.fire({
      title: "Campaign updated successfully!",
      icon: "success",
      customClass: {
        popup: 'small-modal'
      }
    });

    e.target.reset();
  }



  return (
    <div className='max-w-[600px] mx-auto bg-white mt-14   dark:bg-cardbackground'>
      <h3 className='pt-6 text-center font-semibold opacity-80 text-2xl md:text-3xl  dark:text-white'> Update Campaign </h3>
      <form onSubmit={handleUpdateCampaign} className="card-body">
        {/* second row */}
        <div className='flex justify-between'>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text  dark:text-white"> Campaign title </span> </label>
            <input name='title' type="text" placeholder="title" className="input input-bordered" required />
          </div>
          <div className="form-control w-[49%]">
            <label className="label"> <span className="label-text  dark:text-white">Campaign Type</span>  </label>
            <input name="type"  list="campaign-types" className="input input-bordered" placeholder="Select or type a type" required />
            <datalist id="campaign-types">
              <option value="Personal Issue"></option>
              <option value="Startup"></option>
              <option value="Business"></option>
              <option value="Creative Ideas"></option>
            </datalist>
          </div>

        </div>
        {/* third row */}
        <div className='flex justify-between'>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text  dark:text-white"> Minimum Donation Amount </span> </label>
            <input name='minAmount' type="text" placeholder="minimum amount" className="input input-bordered" required />
          </div>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text  dark:text-white"> Deadline </span> </label>
            <input name='deadline' type="date" placeholder="date" className="input input-bordered" required />
          </div>
        </div>
        {/* rest */}
        <div className="form-control">
          <label className="label"> <span className="label-text  dark:text-white"> Campaign Image URL </span> </label>
          <input name='photo' type="url" placeholder="image url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"> <span className="label-text   dark:text-white"> Description </span> </label>
          <textarea name="description" id="" cols="30" rows="3" className='border-[1px] border-black border-opacity-15 rounded-lg'></textarea>
        </div>

        {/* error showing div */}
        <div className='text-sm text-red-600 pt-3 mr-3'>
          {error}
        </div>

        {/* register button */}
        <div className="form-control mt-6">
          <button className="btn text-white text-base md:text-lg font-medium bg-yellow hover:bg-yellow opacity-90 hover:opacity-100"> Update campaign </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCampaignForm;
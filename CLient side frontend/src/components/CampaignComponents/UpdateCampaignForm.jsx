import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




const UpdateCampaignForm = ( {campaign} ) => {
  console.log(campaign);
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
    const res = await fetch(`http://localhost:3000/api/updateCampaign/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCampaign),

    })
    const data = await res.json();
    console.log(data);

    e.target.reset();

    // show a toast
    toast.success('Successfully updated information!', {
      position: "top-center",
      autoClose: 1000,
      theme: "dark",
    });
  }



  return (
    <div className='max-w-[600px] mx-auto bg-white mt-14'>
      <h3 className='pt-6 text-center font-semibold opacity-80 text-2xl md:text-3xl'> Update Campaign </h3>
      <form onSubmit={handleUpdateCampaign} className="card-body">
        {/* second row */}
        <div className='flex justify-between'>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text"> Campaign title </span> </label>
            <input name='title' type="text" placeholder="title" className="input input-bordered" required />
          </div>
          <div className="form-control w-[49%]">
            <label className="label"> <span className="label-text">Campaign Type</span>  </label>
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
            <label className="label"> <span className="label-text"> Minimum Donation Amount </span> </label>
            <input name='minAmount' type="text" placeholder="minimum amount" className="input input-bordered" required />
          </div>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text"> Deadline </span> </label>
            <input name='deadline' type="date" placeholder="date" className="input input-bordered" required />
          </div>
        </div>
        {/* rest */}
        <div className="form-control">
          <label className="label"> <span className="label-text"> Campaign Image URL </span> </label>
          <input name='photo' type="url" placeholder="image url" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label"> <span className="label-text"> Description </span> </label>
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
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';



const AddCampaignForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');



  const handleAddCampaign = async (e) => {
    e.preventDefault();

    // get the form data
    const form = new FormData(e.target);   
    const userName = form.get('userName');
    const userEmail = form.get('userEmail');
    const title = form.get('title');
    const type = form.get('type');
    const minAmount = form.get('minAmount');
    const deadline = form.get('deadline');
    const photo = form.get('photo');
    const description = form.get('description');
    // console.log(userName, userEmail, title, type, minAmount, deadline, photo, description);
    const campaign = {userName, userEmail, title, type, minAmount, deadline, photo, description};

    
    // database e store korte hbe
    const res = await fetch('http://localhost:3000/api/campaigns/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaign),

    })
    const data = await res.json();
    console.log(data);

    e.target.reset();

  }




  return (
    <div className='max-w-[600px] mx-auto bg-white mt-14'>
      <h3 className='pt-6 text-center font-semibold opacity-80 text-2xl md:text-3xl'> Add New Campaign </h3>
      <form onSubmit={handleAddCampaign} className="card-body">
        {/* first row */}
        <div className='flex justify-between'>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text"> Your Name </span> </label>
            <input name='userName' type="text" placeholder="name" className="input input-bordered" required />
          </div>
          <div className="form-control w-[49%] ">
            <label className="label"> <span className="label-text"> Your Email </span> </label>
            <input name='userEmail' type="email" placeholder="email" className="input input-bordered" required />
          </div>
        </div>
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
          <button className="btn text-white text-base md:text-lg font-medium bg-blue hover:bg-blue opacity-90 hover:opacity-100"> Add campaign </button>
        </div>
      </form>
    </div>
  );
};

export default AddCampaignForm;
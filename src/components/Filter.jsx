import React from 'react';

const Filter = () => {
    return (
        <form className='m-4 bg-white grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-3 p-4 rounded-xl'>
        <div className='w-full' >
        <label htmlFor="name" className="text-xs font-bold text-gray-400">Search By Name</label>
        <div className='my-3 w-full flex'>
     <span className='text-[10px]'> <i class=" fa fa-user mx-[5px] hover:text-white font-bold "></i></span>
      <input
        type="text"
        id="name"
        name="name"
        className=" placeholder-small px-3 border border-gray-300 w-full   focus:outline-none  focus:border-gray-700"
        placeholder="Enter Name Here..."
      />
        </div>
      
            </div>
                   <div className='w-full' >
        <label htmlFor="name" className="text-xs font-bold text-gray-400">Search By Name</label>
        <div className='my-3 w-full flex'>
     <span className='text-[10px]'> <i class=" fa fa-user mx-[5px] hover:text-white font-bold "></i></span>
      <input
        type="text"
        id="name"
        name="name"
        className=" placeholder-small px-3 border border-gray-300 w-full   focus:outline-none  focus:border-gray-700"
        placeholder="Enter Name Here..."
      />
        </div>
      
            </div>

             <div className='w-full' >
        <label htmlFor="id" className="text-xs font-bold text-gray-400">Search By Location</label>
        <div className='my-3 w-full flex '>
     <span className='text-[10px]'> <i class=" fa fa-id-badge mx-[5px] hover:text-white font-bold "></i></span>
        <select
    id="country"
    name="country"
      className="text-[10px] font-bold px-3 py-1 border border-gray-300 w-full  focus:outline-none  focus:border-gray-700"
  >
    <option value="" className='text-[10px]'>-- Choose a country --</option>
    <option value="bd">Bangladesh</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
        </div>
      
            </div>
             <div className='w-full' >
        <label htmlFor="id" className="text-xs font-bold text-gray-400">Search By Location</label>
        <div className='my-3 w-full flex '>
     <span className='text-[10px]'> <i class=" fa fa-id-badge mx-[5px] hover:text-white font-bold "></i></span>
        <select
    id="country"
    name="country"
      className="text-[10px] font-bold px-3 py-1 border border-gray-300 w-full  focus:outline-none  focus:border-gray-700"
  >
    <option value="" className='text-[10px]'>-- Choose a country --</option>
    <option value="bd">Bangladesh</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
        </div>
      
            </div>
            <div className='w-full'>
        <label htmlFor="id" className="text-xs font-bold text-gray-400">Search By Employee ID</label>
        <div className='my-3 w-full flex'>
     <span className='text-[10px]'> <i class=" fa fa-id-badge mx-[5px] hover:text-white font-bold "></i></span>
      <input
        type="text"
        id="id"
        name="id"
        className=" placeholder-small px-3 border border-gray-300  w-full focus:outline-none  focus:border-gray-700"
        placeholder="Enter Employee ID Here..."
      />
        </div>
      
            </div>
             <div className='w-full' >
        <label htmlFor="id" className="text-xs font-bold text-gray-400">Search By Location</label>
        <div className='my-3 w-full flex '>
     <span className='text-[10px]'> <i class=" fa fa-id-badge mx-[5px] hover:text-white font-bold "></i></span>
        <select
    id="country"
    name="country"
      className="text-[10px] font-bold px-3 py-1 border border-gray-300 w-full  focus:outline-none  focus:border-gray-700"
  >
    <option value="" className='text-[10px]'>-- Choose a country --</option>
    <option value="bd">Bangladesh</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
        </div>
      
            </div>
           <div className='w-full' >
        <label htmlFor="id" className="text-xs font-bold text-gray-400">Search By Location</label>
        <div className='my-3 w-full flex '>
     <span className='text-[10px]'> <i class=" fa fa-id-badge mx-[5px] hover:text-white font-bold "></i></span>
        <select
    id="country"
    name="country"
      className="text-[10px] font-bold px-3 py-1 border border-gray-300 w-full  focus:outline-none  focus:border-gray-700"
  >
    <option value="" className='text-[10px]'>-- Choose a country --</option>
    <option value="bd">Bangladesh</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
        </div>
      
            </div>
             <div className='w-full'>
        <label htmlFor="id" className="text-xs font-bold text-gray-400">Search By Employee ID</label>
        <div className='my-3 w-full flex'>
     <span className='text-[10px]'> <i class=" fa fa-id-badge mx-[5px] hover:text-white font-bold "></i></span>
      <input
        type="text"
        id="id"
        name="id"
        className=" placeholder-small px-3 border border-gray-300  w-full focus:outline-none  focus:border-gray-700"
        placeholder="Enter Employee ID Here..."
      />
        </div>
      
            </div>
        </form>
    );
};

export default Filter;
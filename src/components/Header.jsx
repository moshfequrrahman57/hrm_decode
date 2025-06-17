import React from 'react';

const Header = () => {
    return (
        <div >
      <div className='p-4 flex flex-col gap-1 md:flex-row justify-between shadow bg-white'>
     <div>
       <h2 className='text-2xl  font-Quicksand'>Employee Information</h2>
      <h6 className='text-[10px] text-gray-500 font-bold font-Quicksand mt-1'>Info / Employee / Employee Information</h6>
     </div>
     <div className='flex flex-col md:flex-row gap-2 items-start md:items-end'>
      <button className='  outline-1 outline-greenBlue text-[10px] rounded-full px-2 w-fit h-fit py-1
      text-greenBlue hover:bg-greenBlue hover:outline-red-100 hover:text-white transition duration-300'>
           <i class=" fa fa-arrow-up mr-[5px] hover:text-white font-bold "></i>
            | Click To Upload Excel
      </button>

      <button className='  outline-1 outline-greenBlue text-[10px] rounded-full px-2 w-fit h-fit py-1
      text-greenBlue hover:bg-greenBlue hover:outline-red-100 hover:text-white transition duration-300'>
           <i class=" fa fa-plus mr-[5px] hover:text-white font-bold "></i>
            | On Board
      </button>
     </div>
      </div>
    </div>
    );
};

export default Header;
import React from 'react'

const Navbar = ({total, selectedCurrency}) => {
  return (
    <div className='flex justify-between items-center w-screen bg-space text-white h-16 text-center'>
        <h1 className='text-xl pl-5'>Finance Tracker</h1>
        <p className='pr-12'>Your Balance: {total} {selectedCurrency}  </p>
    </div>
  )
}

export default Navbar
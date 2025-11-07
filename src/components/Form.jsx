import React from 'react'

const Form = () => {
  return (
    <div className='bg-white rounded-lg w-full mx-auto max-w-5/12 p-5 mt-10'>
        <h1 className='text-center font-bold '>Registeration Form</h1>
      <form>
        <div className='flex items-center justify-between my-3'>
        <div className='flex flex-col '>
            <label className='text-md font-semibold'>First Name</label>
            <input type="text" className='w-full p-2 outline-none border border-gray-300  rounded-lg' placeholder='Enter your name' />
        </div>
        <div className='flex flex-col '>
            <label className='text-md font-semibold'>Last Name</label>
            <input type="text" className='w-full p-2 outline-none border border-gray-300  rounded-lg' placeholder='Enter your last name' />
        </div>
        </div>
        <div className='flex items-center justify-between '>
        <div className='flex flex-col '>
            <label className='text-md font-semibold'>F'Name</label>
            <input type="text" className='w-full p-2 outline-none border border-gray-300  rounded-lg' placeholder="Enter your f'name" />
        </div>
        <div className='flex flex-col '>
            <label className='text-md font-semibold'>CNIC No</label>
            <input type="number" className='w-full p-2 outline-none border border-gray-300  rounded-lg' placeholder='Enter your cell number' />
        </div>
        </div>
        <div className='flex items-center justify-between my-3'>
        <div className='flex flex-col '>
            <label className='text-md font-semibold'>Email</label>
            <input type="email" className='w-full p-2 outline-none border border-gray-300  rounded-lg' placeholder='Enter your name' />
        </div>
        <div className='flex flex-col '>
            <label className='text-md font-semibold'>Password</label>
            <input type="password" className='w-full p-2 outline-none border border-gray-300  rounded-lg' placeholder='Enter your name' />
        </div>
        </div>
      </form>
    </div>
  )
}

export default Form

import React from 'react'

const Form = () => {
  return (
    <div className='bg-white rounded-lg w-full mx-auto max-w-6/12 p-5'>
      <form>
        <div className='flex items-center justify-between '>
        <div className='flex flex-col '>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder='Enter your name' />
        </div>
        <div className='flex flex-col '>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder='Enter your name' />
        </div>
        </div>
      </form>
    </div>
  )
}

export default Form

import React from 'react'

const AddTopic = () => {
  return (
  <form action="" className='flex flex-col gap-3'>
    <input className='border border-slate-500 px-8 py-2' placeholder='topic title' type="text"/>
    <input className='border border-slate-500 px-8 py-2' placeholder='topic description' type="text"/>
  
  <button className='bg-green-600 font-bold text-white py-3 px-6 w-fit'>Add Topic</button>
  </form>
  )
}

export default AddTopic

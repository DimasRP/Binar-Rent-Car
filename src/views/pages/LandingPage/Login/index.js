import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen bg-green-300 flex '>
    <div className='h-full w-3/4 bg-blue-600 hidden md:block' ></div>
    <div className='bg-white w-2/5 md:w-2/5 h-full flex items-center justify-center'>
    <div className='w-full p-14'>
    <div className='bg-blue-300 w-24 h-8  '>logo</div>
    <h1 className='font-bold text-2xl my-8'>Welcome Admin</h1>
    <form>
      
      <div className='flex flex-col mb-4' >
        <label className='mb-2'>Email</label>
        <input className='border border-gray-300 pl-4 py-2 rounded-md focus:outline-blue-600' type="email" placeholder='Masukkan Email'/>
      </div>
      <div className='flex flex-col mb-8'>
        <label className='mb-2'>Password</label>
        <input className='border border-gray-300 pl-4 py-2 rounded-md  focus:outline-blue-600' type="password" placeholder='6+ Karakter'/>
      </div>
      <button className='bg-blue-700 text-white w-full py-2 rounded-md hover:bg-blue-900'>Sign In</button>
    </form>
    </div>
    </div>
  </div>
  )
}

export default Login
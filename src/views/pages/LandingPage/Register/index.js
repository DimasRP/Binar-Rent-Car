import React, {useState}from 'react'
import axios from 'axios';

const Register = () => {


  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("")
  const[res,setRes]=useState("")
  const[confirmPassword, setConfirmPassword] = useState("")
  // console.log("berhasil");


const handleEmail = (e) =>{
  setEmail(e.target.value)
  console.log(e.target.value)
}
const handlePassword= (e)=>{
  setPassword(e.target.value);
}
const handleConfirmPassword = (e) => {
   
    
    setConfirmPassword(e.target.value)
  
}
const handleRegister = (e) => {
 console.log(email,password)

      const  payload = {
      email : email,
      password : password,
      

      }   
      
      axios 
      .post("https://bootcamp-rent-car.herokuapp.com/customer/auth/register",payload)
      .then(res => setRes(res.data.token))
      .catch(err => console.log(err))
}


  return (
    <div className="  flex min-h-screen ">
      <div className='bg-white w-2/5 md:w-2/5 h-full flex items-center justify-center'>
    <div className='w-full p-14'>
    
    <h1 className='font-bold text-2xl my-8'>Sign Up</h1>
    <form>
      
      <div className='flex flex-col mb-4' >
        <label className='mb-2'>Name*</label>
        <input className='border border-gray-300 pl-4 py-2 rounded-md focus:outline-blue-600' type="text" placeholder='Full Name'/>
      </div>
      <div className='flex flex-col mb-4' >
        <label className='mb-2'>Email*</label>
        <input className='border border-gray-300 pl-4 py-2 rounded-md focus:outline-blue-600' type="email" placeholder='Contoh: johndee@gmail.com' onChange={(e)=> handleEmail(e)}/>
      </div>
      <div className='flex flex-col mb-8'>
        <label className='mb-2'>Create Password</label>
        <input className='border border-gray-300 pl-4 py-2 rounded-md  focus:outline-blue-600' type="password" placeholder='6+ Karakter' onChange={(e)=> handlePassword(e)}/>
      </div>
      <div className='flex flex-col mb-8'>
        <label className='mb-2'>Confirm Password</label>
        <input className='border border-gray-300 pl-4 py-2 rounded-md  focus:outline-blue-600' type="password" placeholder='6+ Karakter' onChange={(e)=> handleConfirmPassword(e)} />
        {
          password !== confirmPassword && <p>Password not match</p>
        }
      </div>
      
      <button onClick={handleRegister} className='bg-blue-700 text-white w-full py-2 rounded-md hover:bg-blue-900 disabled:bg-gray-500 disabled:hover:bg-gray-700 ' disabled={password !== confirmPassword}>Sign Up</button>
      {
       !!res.length && (<h1>Anda sudah terdaftar</h1>) 
      }
    </form>
    <div className=' text-black w-full py-4 text-bold'>
    <h6>Already have an account?</h6>
    </div>
    </div>
    
    </div>
      <div className="relative w-4/6 hidden sm:block"
      
      >
        <div
          className=" absolute w-full h-full bg-cover"
          style={{
            backgroundImage: `url(${window.location.origin}/assets/images/signupcover.png)`,
          }}
        ></div>
      </div>
    
    
  </div>
  )
}

export default Register;
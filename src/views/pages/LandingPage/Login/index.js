import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [res, setRes]= useState("");
 
 
  // console.log("berhasil");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {

    e.preventDefault()
    


    const payload = {
      email: email,
      password: password,
    };
   

    axios
    .post("https://bootcamp-rent-car.herokuapp.com/customer/auth/login",payload)
    .then(res => {
      setRes(res.data.token)
    localStorage.setItem("token",res.data.access_token)
     navigate("/")
    }
    )

    .catch(err => console.log(err))    
  
    
  };

  console.log(res)

  // const redirect = useCallback(
  //   () => navigate("/dasboard", { replace: true }),
  //   [navigate]
  // );

  // useEffect(() => {
  //   const checkIfLogin = () => {
  //     const token = localStorage.getItem("token");
  //     if (!token) return;
  //     redirect();
  //   };
  //   checkIfLogin();
  // }, [redirect]);

  return (
    <div className='w-full h-screen bg-green-300 flex '>
       <div className='bg-white w-2/5 md:w-2/5 h-full flex items-center justify-center'>
    <div className='w-full p-14'>
    <div className='bg-blue-300 w-24 h-8  '></div>
    <h1 className='font-bold text-2xl my-8'>Welcome Back !</h1>
    <form>
      
      <div className='flex flex-col mb-4' >
        <label className='mb-2'>Email</label>
        <input className='border border-gray-300 pl-4 py-2 rounded-md focus:outline-blue-600' type="email" placeholder='Masukkan Email' onChange={(e) => handleEmail(e)}/>
      </div>
      <div className='flex flex-col mb-8'>
        <label className='mb-2'>Password</label>
        <input className='border border-gray-300 pl-4 py-2 rounded-md  focus:outline-blue-600' type="password" placeholder='6+ Karakter' onChange={(e) => handlePassword(e)}/>
      </div>
      <button className='bg-dark-blue-04 text-white w-full py-2 rounded-md hover:bg-dark-blue-05' onClick={handleLogin}>Sign In</button>
    </form>
    </div>
    </div>
    <div className='h-full w-3/4 bg-blue-600 hidden md:block' ></div>
   
  </div>
  )
}

export default Login
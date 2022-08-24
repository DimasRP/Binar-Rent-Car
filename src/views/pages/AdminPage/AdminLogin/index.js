import React, { useState } from "react";
// import { Button } from "views/components";
import axios from "axios";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [res, setRes] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("https://bootcamp-rent-car.herokuapp.com/admin/auth/login", payload)
      .then((res) => {
        setRes(res.data.token);
        localStorage.setItem("token", res.data.token);
        // navigate("/dashboard");
      })
      .catch((err) => console.log(err));
    console.log("ini respon", res);
  };

  return (
    <div className="  flex min-h-screen ">
      <div className="relative w-4/6 hidden sm:block">
        <div className=" absolute w-full h-full bg-blue-600 "></div>
        <div
          className=" absolute w-full h-full bg-cover"
          style={{
            backgroundImage: `url(${window.location.origin}/assets/images/admincar.png)`,
          }}
        ></div>
      </div>
      <div className=" flex flex-col justify-center p-16 mx-auto">
        <div className=" w-28 h-8 bg-dark-blue-01 mb-8"></div>
        <div className=" ">
          <h1 className="text-2xl font-bold mb-8">Welcome, Admin BCR</h1>
          <form>
            <div className="flex flex-col gap-2 mb-4">
              <label className=" text-sm">Email</label>
              <input
                type="email"
                placeholder="Contoh: johndee@gmail.com"
                className="border px-4 py-2 text-xs"
                onChange={handleEmail}
              />
            </div>
            <div className="flex flex-col gap-2 mb-8">
              <label className="  text-sm">Password</label>
              <input
                type="password"
                placeholder="6+ karakter"
                className="border px-4 py-2 text-xs "
                onChange={handlePassword}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-dark-blue-04 py-2 text-center text-white text-sm font-bold rounded-sm hover:bg-dark-blue-05"
              onClick={handleLogin}
            >
              Sign In
            </button>
            {/* <Button fullWidth color="secondary" class="p-2">
              Sign In
            </Button> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

import axios from "axios";
import { AuthContext } from "context/auth/AuthContext";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Spinner } from "views/components";

const Register = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(AuthContext);

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setSpinner] = useState(false);
  const { email, password, name, confirmPassword } = registerForm;

  const nameRef = useRef(null);

  const handleInputChange = (e) => {
    setRegisterForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setResponse("");
    setIsError(false);
    setSpinner(true);
    const data = {
      name,
      email,
      password,
    };
    try {
      const response = await axios.post("https://reqres.in/api/register", data);
      if (response?.data) {
        setRegisterForm({
          name: "",
          email: "",
          password: "",
        });
        nameRef.current.focus();
      }
      setSpinner(false);
      setResponse("Akun berhasil terdaftar, silakan login.");
    } catch (error) {
      setResponse(error?.response?.data?.error);
      setSpinner(false);
      setIsError(true);
    }
  };

  const redirect = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  useEffect(() => {
    const checkIfLogin = () => {
      if (!isLogin) {
        nameRef.current.focus();
      } else {
        redirect();
      }
    };
    checkIfLogin();
  }, [isLogin, redirect]);

  if (isLogin) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <main className="min-h-screen flex items-stretch">
      <section className="md:flex-1 px-4 py-6 md:px-16 md:py-16 w-full md:w-3/6 flex md:justify-center md:items-center ">
        <div className="flex flex-col md:justify-center gap-8 w-full md:max-w-sm">
          <div className="bg-dark-blue-01 w-24 h-8 rounded-sm" />
          <div>
            <h1 className="font-bold text-2xl leading-9 ">Sign Up</h1>
          </div>
          <form onSubmit={handleRegister} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Name*</label>
              <input
                ref={nameRef}
                onChange={handleInputChange}
                className=" px-4 py-2 border rounded-md text-sm  "
                type={"text"}
                name="name"
                id="name"
                placeholder="Nama lengkap"
                value={name}
                disabled={loading}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Email*</label>
              <input
                onChange={handleInputChange}
                className=" px-4 py-2 border rounded-md text-sm  "
                type={"email"}
                name="email"
                id="email"
                placeholder="Contoh: john.doe@gmail.com"
                value={email}
                disabled={loading}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Create Password*</label>
              <input
                onChange={handleInputChange}
                className=" px-4 py-2 border rounded-md text-sm  "
                type={"password"}
                name="password"
                id="password"
                placeholder="6+ karakter"
                value={password}
                disabled={loading}
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm">Confirm Password*</label>
              <input
                onChange={handleInputChange}
                className=" px-4 py-2 border rounded-md text-sm  "
                type={"password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Konfirmasi password"
                value={confirmPassword}
                disabled={loading}
                required
              />
            </div>
            <button
              disabled={loading}
              className="bg-dark-blue-04 text-white rounded-md p-2 hover:bg-dark-blue-05 flex items-center disabled:hover:bg-gray-100 disabled:bg-gray-100 justify-center"
              type="submit"
            >
              {loading ? <Spinner /> : "Sign Up"}
            </button>
          </form>
          {response && (
            <p
              className={`font-semibold text-center ${
                isError ? "text-red-500" : "text-green-600"
              }`}
            >
              {response}
            </p>
          )}
        </div>
      </section>

      <section className=" flex-1 bg-dark-blue-04 hidden md:block relative">
        <div
          style={{
            backgroundImage: `url("${window.location.origin}/assets/images/signupcover.png")`,
          }}
          className="bg-contain h-full w-full bg-no-repeat bg-right"
        />
      </section>
    </main>
  );
};

export default Register;

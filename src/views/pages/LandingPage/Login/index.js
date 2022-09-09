import { AuthContext } from "context/auth/AuthContext";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Api from "services/Api";
import { Spinner } from "views/components";

const Login = () => {
  const navigate = useNavigate();
  const authContextData = useContext(AuthContext);
  const { setIsLogin, isLogin } = authContextData;

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [response, setResponse] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setSpinner] = useState(false);
  const { email, password } = loginForm;

  const emailRef = useRef(null);

  const handleInputChange = (e) => {
    setLoginForm((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setResponse("");
    setIsError(false);
    setSpinner(true);
    const data = {
      email,
      password,
    };
    try {
      const response = await Api.post("/customer/auth/login", data);
      if (response?.data) {
        const token = response?.data?.access_token;
        setLoginForm({
          email: "",
          password: "",
        });
        emailRef.current.focus();
        const profile = {
          role: [response?.data?.role],
          email: response?.data?.email,
        };
        localStorage?.setItem("token", token);
        localStorage.setItem("profile", JSON.stringify(profile));
        setIsLogin(true);
        navigate("/", { replace: true });
      }
      setSpinner(false);
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
        emailRef.current.focus();
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
            <h1 className="font-bold text-2xl leading-9 ">Welcome Back!</h1>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm">Email</label>
              <input
                ref={emailRef}
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
              <label className="text-sm">Password</label>
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
            <button
              disabled={loading}
              className="bg-dark-blue-04 text-white rounded-md p-2 hover:bg-dark-blue-05 flex items-center disabled:hover:bg-gray-100 disabled:bg-gray-100 justify-center"
              type="submit"
            >
              {loading ? <Spinner /> : "Sign In"}
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

export default Login;

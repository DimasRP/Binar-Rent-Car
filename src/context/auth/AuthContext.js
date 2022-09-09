import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SplashScreen } from "views/components";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLogin, setIsLogin] = useState(null);
  const [checkLogin, setCheckLogin] = useState(true);
  const [profile, setProfile] = useState({ email: "", role: [] });
  const navigate = useNavigate();

  useEffect(() => {
    const checkIfLogin = () => {
      const token = localStorage.getItem("token");
      const profile = JSON.parse(localStorage.getItem("profile"));
      if (!token) {
        setIsLogin(false);
        setProfile({ email: "", role: "" });
      } else {
        setProfile({ email: profile?.email, role: profile?.role });
        setIsLogin(true);
      }
    };
    checkIfLogin();
    const splashScreenTimeout = setTimeout(() => {
      setCheckLogin(false);
    }, 1000);

    return () => {
      clearTimeout(splashScreenTimeout);
    };
  }, []);

  const onLogout = (path = "/login") => {
    localStorage.clear();
    navigate(path, { replace: true });
    setIsLogin(false);
  };

  const authData = {
    isLogin,
    profile,
    setIsLogin,
    onLogout,
  };

  if (checkLogin) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authData}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

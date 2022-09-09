import AuthContextProvider from "./auth/AuthContext";
import { CarsProvider } from "./cars/CarsContext";
export * from "./cars/CarsContext";

const ContextProvider = ({ children }) => {
  return (
    <AuthContextProvider>
      <CarsProvider>{children}</CarsProvider>
    </AuthContextProvider>
  );
};

export default ContextProvider;

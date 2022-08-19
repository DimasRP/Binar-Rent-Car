import { CarsProvider } from "./cars/CarsContext";
export * from "./cars/CarsContext";

const ContextProvider = ({ children }) => {
  return <CarsProvider>{children}</CarsProvider>;
};

export default ContextProvider;

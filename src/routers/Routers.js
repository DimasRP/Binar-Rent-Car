import { Route, Routes } from "react-router-dom";
import { CarList } from "views/components";
import {
  AdminLogin, CarDetails,
  CarSearch, Dashboard, EditCar, Home,
  Login, NewCar, Order,
  Page404,
  Page500,
  Register
} from "views/pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cari-mobil" element={<CarSearch />}></Route>
      <Route path="/detail-mobil/:id" element={<CarDetails />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/order:id" element={<Order />}></Route>

      <Route path="/admin" element={<AdminLogin />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/mobil/baru" element={<NewCar />}></Route>
      <Route path="/mobil/edit/:id" element={<EditCar />}></Route>
      <Route path="/daftar-mobil" element={<CarList />}></Route>  

      <Route path="/error/500" element={<Page500 />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
};

export default Routers;

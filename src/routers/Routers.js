import { roles } from "helpers/data";
import { Route, Routes } from "react-router-dom";
import { RequiredRoute } from "views/components";
import {
  AdminLogin,
  CarDetails,
  CarSearch,
  Dashboard,
  EditCar,
  Home,
  Login,
  NewCar,
  Order,
  Page404,
  Page500,
  Register,
  CarListCms,
} from "views/pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="cari-mobil" element={<CarSearch />}></Route>
      <Route path="detail-mobil/:id" element={<CarDetails />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>

      <Route element={<RequiredRoute allowedRoles={[roles.customer]} />}>
        <Route path="order" element={<Order />}></Route>
      </Route>

      <Route path="admin" element={<AdminLogin />}></Route>
      <Route path="dashboard" element={<Dashboard />}></Route>
      <Route path="mobil/baru" element={<NewCar />}></Route>
      <Route path="mobil/edit/:id" element={<EditCar />}></Route>
      <Route path="daftar-mobil" element={<CarListCms />}></Route>

      <Route path="/error/500" element={<Page500 />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
};

export default Routers;

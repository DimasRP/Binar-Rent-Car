import { Route, Routes } from "react-router-dom";
import { CarDetails, CarSearch, Home, Page404, Page500 } from "views/pages";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cari-mobil" element={<CarSearch />}></Route>
      <Route path="/detail-mobil/:id" element={<CarDetails />}></Route>
      <Route path="/error/500" element={<Page500 />}></Route>
      <Route path="*" element={<Page404 />}></Route>
    </Routes>
  );
};

export default Routers;

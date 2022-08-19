import CarsContext from "context/cars/CarsContext";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import CarSearchModalForm from "./CarSearchModalForm";
import "./style.css";
const CarSearchModal = () => {
  const { showResults } = useContext(CarsContext);

  const [onFocus, setOnFocus] = useState(false);

  const { pathname } = useLocation();

  const isNotSearchPage = pathname !== "/cari-mobil" ? true : false;

  const openFormFocus = () => {
    document.getElementById("search-form-container").style.zIndex = 11;
    setOnFocus(true);
    document.getElementById("search-form").scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  };

  const closeFormFocus = () => {
    setOnFocus(false);
    document.getElementById("search-form-container").style.zIndex = 0;
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
  };

  return (
    <>
      <section
        onClick={() => !isNotSearchPage && openFormFocus()}
        tabIndex={0}
        id="search-form-container"
        className="py-6 px-4 bg-white shadow-md w-full max-w-6xl mx-auto -mt-8 xl:-mt-20 mb-24 relative rounded-lg"
      >
        {showResults && (
          <h2 className="text-normal font-bold mb-4">Pencarianmu</h2>
        )}
        <CarSearchModalForm closeFormFocus={closeFormFocus} />
      </section>
      <div className={onFocus ? "overlay" : ""} onClick={closeFormFocus} />
    </>
  );
};

export default CarSearchModal;

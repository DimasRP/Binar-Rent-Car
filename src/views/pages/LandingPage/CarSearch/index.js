import CarsContext from "context/cars/CarsContext";
import { ScrollToTop } from "helpers/utils";
import { useContext, useEffect } from "react";
import {
  CarList,
  CarSearchHeader,
  CarSearchModal,
  Footer,
  Header,
  Navbar,
} from "views/components";

const CarSearch = () => {
  const { getCarList, showResults } = useContext(CarsContext);

  useEffect(() => {
    getCarList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        {showResults ? <CarSearchHeader /> : <Header />}
        <CarSearchModal />
        <CarList />
        <Footer />
      </main>
    </>
  );
};

export default CarSearch;

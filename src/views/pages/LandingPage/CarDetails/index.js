import CarsContext from "context/cars/CarsContext";
import { ScrollToTop } from "helpers/utils";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CarCardDetails,
  CarSearchHeader,
  CarSearchModal,
  Footer,
  Navbar
} from "views/components";

const CarDetails = () => {
  const { getCarDetails } = useContext(CarsContext);

  const { id } = useParams();

  useEffect(() => {
    getCarDetails(id);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <CarSearchHeader />
        <CarSearchModal />
        <CarCardDetails />
        <Footer />
      </main>
    </>
  );
};

export default CarDetails;

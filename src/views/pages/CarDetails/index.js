import CarsContext from "context/cars/CarsContext";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CarCardDetails,
  CarSearchHeader,
  CarSearchModal,
  Footer,
} from "views/components";

const CarDetails = () => {
  const { getCarDetails } = useContext(CarsContext);

  const { id } = useParams();

  useEffect(() => {
    getCarDetails(id);

    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <CarSearchHeader />
      <CarSearchModal />
      <CarCardDetails />
      <Footer />
    </main>
  );
};

export default CarDetails;

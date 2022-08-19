import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const CarRent = () => {
  return (
    <section data-aos="zoom-in" className="container mx-auto mb-24 px-4">
      <div className="bg-dark-blue-04 w-full p-8 md:p-16 rounded-lg flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Sewa Mobil di (Lokasimu) Sekarang
        </h2>
        <p className="text-sm font-light mb-12 text-center text-white max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Link to="/cari-mobil">
          <Button color="primary" variant="contained">
            Mulai Sewa Mobil
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CarRent;

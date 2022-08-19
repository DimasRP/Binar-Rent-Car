import CarsContext from "context/cars/CarsContext";
import { useContext } from "react";
import CarCard from "../CarCard";
import LoadingCard from "../LoadingCard";

const CarList = () => {
  const { loading, carsData, error } = useContext(CarsContext);

  const isEmpty = carsData.length === 0;

  if (loading) {
    return (
      <section className="container mx-auto mb-24 px-4">
        <div className="flex justify-center lg:justify-between flex-col lg:flex-row gap-6 items-center md:items-start">
          {[0, 1, 2].map((item) => (
            <LoadingCard key={item} />
          ))}
        </div>
      </section>
    );
  }

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center justify-center mb-24 px-4">
        <div className=" w-60 md:w-80 -mt-8 rounded-full">
          <img
            src="assets/images/empty-search.png"
            alt="empty-search"
            width={"100%"}
          />
        </div>
        <h1 className="text-lg md:text-3xl mb-2 text-gray-700 text-center">
          Maaf, daftar mobil tidak ditemukan atau tidak tersedia!
        </h1>
        <p className="text-base md:text-lg text-gray-500 text-center">
          Silakan cari dengan kata kunci yang berbeda.
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center mb-24 px-4">
        <div className=" w-60 md:w-80 -mt-8 rounded-full">
          <img src="assets/images/error.png" alt="error" width={"100%"} />
        </div>
        <h1 className="text-lg md:text-3xl mb-2 text-gray-700 text-center">
          Maaf, sedang terjadi kesalahan!
        </h1>
        <p className="text-base md:text-lg text-gray-500 text-center">
          Silakan coba kembali.
        </p>
      </div>
    );
  }

  return (
    <section className="container mx-auto mb-24 px-4">
      <div className="flex justify-center lg:justify-between flex-wrap gap-6 items-center sm:items-stretch flex-grow-0 flex-shrink-0">
        {carsData.map((item) => (
          <CarCard key={item?.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default CarList;

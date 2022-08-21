import CarsContext from "context/cars/CarsContext";
import { currencyFormat } from "helpers/utils";
import { useContext } from "react";
import { FiUsers } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Button from "../Button";

const includesData = [
  "Apa saja yang termasuk dalam paket misal durasi max 12 jam",
  "Sudah termasuk bensin selama 12 jam",
  "Sudah termasuk Tiket Wisata",
  "Sudah termasuk pajak",
];

const excludesData = [
  "Tidak termasuk biaya makan sopir Rp 75.000/hari",
  "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  "Tidak termasuk akomodasi penginapan",
];

const othersData = [
  "Tidak termasuk biaya makan sopir Rp 75.000/hari",
  "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  "Tidak termasuk akomodasi penginapan",
  "Tidak termasuk biaya makan sopir Rp 75.000/hari",
  "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  "Tidak termasuk akomodasi penginapan",
  "Tidak termasuk biaya makan sopir Rp 75.000/hari",
  "Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam",
  "Tidak termasuk akomodasi penginapan",
];

const CarCardDetails = () => {
  const { loading, carDetails: data, isNotFound } = useContext(CarsContext);

  const { id: carId } = useParams();

  if (loading) {
    return (
      <section className="container mx-auto mb-24 w-full max-w-6xl px-4 lg:p-0">
        <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-8 items-start animate-pulse">
          <div className="flex flex-col gap-4 w-full md:w-3/5 border p-6 bg-white shadow-sm">
            <div className="h-4 w-24 bg-slate-400" />
            <div>
              <div className="h-4 w-1/3 bg-slate-400 mb-2"></div>
              <ul className="list-inside">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="h-4 w-1/2 bg-slate-400 mb-2"></div>
                ))}
              </ul>
            </div>
            <div>
              <div className="h-4 w-1/3 bg-slate-400 mb-2"></div>
              <ul className="list-inside">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="h-4 w-1/2 bg-slate-400 mb-2"></div>
                ))}
              </ul>
            </div>
            <div className="h-4 w-24 bg-slate-400" />
          </div>
          <div className="flex flex-col gap-4 w-full md:w-2/5 border p-6 bg-white shadow-sm">
            <div className=" h-36 w-full bg-slate-400"></div>

            <div>
              <div className="h-4 w-1/2 bg-slate-400 mb-2" />
              <div className="flex items-center gap-2 ">
                <FiUsers /> <div className="h-4 w-24 bg-slate-400" />
              </div>
            </div>
            <div className="h-4 w-24 bg-slate-400" />
          </div>
        </div>
      </section>
    );
  }

  if (isNotFound) {
    return (
      <div className="flex flex-col items-center justify-center mb-24 gap-4">
        <div className=" w-60 md:w-80 -mt-8 rounded-full">
          <img
            src={process.env.PUBLIC_URL + "/assets/images/empty-search.png"}
            alt="empty-search"
            width={"100%"}
          />
        </div>
        <h1 className="text-lg md:text-3xl text-gray-700 text-center">
          Maaf, data mobil dengan ID - {carId} tidak ditemukan atau tidak
          tersedia!
        </h1>
        <p className="text-base md:text-lg text-gray-500 text-center">
          Silakan kembali ke halaman pencarian.
        </p>
        <Link to="/cari-mobil">
          <Button color="secondary">Kembali</Button>
        </Link>
      </div>
    );
  }

  return (
    <section className="container mx-auto mb-24 w-full max-w-6xl px-4 lg:p-0">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-8 items-start ">
        <div className="flex flex-col gap-4 w-full md:w-3/5 border p-6 bg-white shadow-sm">
          <h2 className="text-sm font-bold">Tentang Paket</h2>
          <div>
            <h2 className="text-sm font-bold mb-2">Include</h2>
            <ul className="list-inside">
              {includesData.map((item) => (
                <li
                  key={item}
                  className="list-disc text-sm leading-6 text-neutral-03 font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold mb-2">Exclude</h2>
            <ul className="list-inside">
              {excludesData.map((item) => (
                <li
                  key={item}
                  className="list-disc text-sm leading-6 text-neutral-03 font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border-none w-auto -mt-5"
          >
            <input type="checkbox" className="peer p-0" />
            <div className="collapse-title text-sm font-bold flex items-center pl-0 py-0 pr-10">
              Refund, Reschedule, Overtime
            </div>
            <div className="collapse-content p-0 -mt-2">
              <ul className="list-inside">
                {othersData.map((item, index) => (
                  <li
                    key={index}
                    className="list-disc text-sm leading-6 text-neutral-03 font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-2/5 border p-6 bg-white shadow-sm">
          <figure className="lg:w-72 mb-6 mx-auto">
            <img
              src={
                data?.image
                  ? data?.image
                  : process.env.PUBLIC_URL + "/assets/images/no-image-found.png"
              }
              alt="car-details-preview"
              width={"100%"}
            />
          </figure>

          <div>
            <h2 className="text-sm font-bold mb-2">{data?.name || "-"}</h2>
            <p className="flex items-center text-sm gap-2 text-neutral-03 font-bold">
              <FiUsers /> {data?.category || "-"}
            </p>
          </div>
          Test
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold">Total</h2>
            <p className="text-sm font-bold">
              {currencyFormat(data?.price || 0)}
            </p>
          </div>

          <Link to="/cari-mobil">
            <Button fullWidth color="primary">Kembali ke Pencarian Mobil</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CarCardDetails;

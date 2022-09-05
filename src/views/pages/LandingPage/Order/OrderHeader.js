import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
const OrderHeader = () => {
  return (
    <header className="bg-dark-blue-00 relative flex flex-col md:block md:h-52 mb-10">
      <div className="container mx-auto relative md:py-10 px-4 w-full max-w-6xl mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex self-start items-stretch gap-4">
            <Link to="/cari-mobil">
              <FiArrowLeft fontSize={24} />
            </Link>

            <div className="flex flex-col gap-2">
              <p className="font-bold text-sm">Pembayaran</p>
              <p className="text-sm">Order ID: 86754321</p>
            </div>
          </div>
          <div className="overflow-auto flex items-center gap-3 w-full md:w-auto sm:justify-center">
            <div className="shrink-0  flex items-center gap-2">
              <div className=" w-6 h-6 text-sm flex items-center justify-center p-1 border border-dark-blue-04 bg-dark-blue-04 text-white rounded-full ">
                1
              </div>
              <p className="text-sm ">Pilih Metode</p>
            </div>
            <div className="shrink-0 w-8 border-b-2 border-dark-blue-04 " />
            <div className="shrink-0 flex items-center gap-2">
              <div className="w-6 h-6 text-sm flex items-center justify-center p-1 border border-dark-blue-04 bg-white rounded-full ">
                2
              </div>
              <p className="text-sm">Bayar</p>
            </div>
            <div className="shrink-0 w-8 border-b-2 border-dark-blue-04 " />
            <div className="shrink-0 flex items-center gap-2">
              <div className="w-6 h-6 text-sm flex items-center justify-center p-1 border border-dark-blue-04 bg-white rounded-full ">
                3
              </div>
              <p className="text-sm">Tiket</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OrderHeader;

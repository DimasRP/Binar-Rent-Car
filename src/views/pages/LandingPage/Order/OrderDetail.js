import React from "react";

const OrderDetail = () => {
  return (
    <section className="py-6 px-4 bg-white shadow-md w-full max-w-6xl mx-auto md:-mt-32 xl:-mt-20 mb-24 relative rounded-lg">
      <h2 className="text-normal font-bold mb-4">Detail Pesananmu</h2>
      <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
        <div className="flex-1">
          <p className="text-xs font-semibold mb-2">Nama/Tipe Mobil</p>
          <p className="text-xs text-neutral-03 ">Innova</p>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold mb-2">Kategori</p>
          <p className="text-xs text-neutral-03 ">6-8 orang</p>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold mb-2">Tanggal Mulai Sewa</p>
          <p className="text-xs text-neutral-03 ">04/09/2022</p>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold mb-2">Tanggal Akhir Sewa</p>
          <p className="text-xs text-neutral-03 ">09/09/2022</p>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;

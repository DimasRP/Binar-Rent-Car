import { currencyFormat } from "helpers/utils";
import { FiCopy, FiImage, FiTrash } from "react-icons/fi";
import { Button } from "views/components";
import { useDropzone } from "react-dropzone";
import React, { useEffect, useState } from "react";

const OrderPayment = () => {
  const [files, setFiles] = useState([]);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  const handleDeletePhoto = () => {
    setFiles([]);
  };

  return (
    <section className="container mx-auto mb-24 w-full max-w-6xl px-4">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-8 items-start ">
        <div className="flex flex-col gap-4 w-full md:w-3/5 ">
          <div className="border p-6 bg-white shadow-sm flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold mb-4">
                Selesaikan Pembayaran Sebelum
              </h2>
              <p className="text-sm text-neutral-04">
                Rabu, 12 September 2022 pukul 23.59 WIB
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-white text-lg w-8 h-8 rounded-md bg-danger flex justify-center items-center">
                23
              </div>
              <span className="font-bold text-sm">:</span>
              <div className="text-white text-lg w-8 h-8 rounded-md bg-danger flex justify-center items-center">
                00
              </div>
              <span className="font-bold text-sm">:</span>
              <div className="text-white text-lg w-8 h-8 rounded-md bg-danger flex justify-center items-center">
                59
              </div>
            </div>
          </div>
          <div className="border p-6 bg-white shadow-sm">
            <h2 className="text-sm font-bold mb-4">Lakukan Transfer Ke</h2>
            <section className="flex gap-4 items-baseline mb-8">
              <label className="px-4 py-2 border rounded-md bg-white flex items-center justify-center text-sm">
                Mandiri
              </label>
              <div>
                <p className="mb-2 text-sm">BCA Transfer</p>
                <p className="text-sm">a.n Binar Car Rental</p>
              </div>
            </section>
            <section className="flex flex-col gap-4">
              <div>
                <p className="font-light text-neutral-04 text-sm mb-1">
                  Nomor Rekening
                </p>
                <div className="flex items-center justify-between border border-neutral-05 rounded-sm p-2">
                  <p className="text-sm">71827211011</p>
                  <FiCopy
                    className="cursor-pointer text-neutral-04"
                    fontSize={18}
                  />
                </div>
              </div>
              <div>
                <p className="font-light text-neutral-04 text-sm mb-1">
                  Total Bayar
                </p>
                <div className="flex items-center justify-between border border-neutral-05 rounded-sm p-2">
                  <p className="text-sm font-bold">
                    {currencyFormat(500000 * 7)}
                  </p>
                  <FiCopy
                    className="cursor-pointer text-neutral-04"
                    fontSize={18}
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="border p-6 bg-white shadow-sm">
            <h2 className="text-sm font-bold mb-4">Instruksi Pembayaran</h2>
            <div className="flex w-full mb-4">
              <button className="text-sm pb-4 border-b-2 w-36 text-center  border-b-lime-green-04 font-bold">
                ATM BCA
              </button>
              <button className="text-sm pb-4 border-b-2 w-36 text-center">
                M-BCA
              </button>
              <button className="text-sm pb-4 border-b-2 w-36 text-center">
                BCA Klik
              </button>
              <button className="text-sm pb-4 border-b-2 w-36 text-center">
                Internet Banking
              </button>
            </div>
            <div>
              <ul className="list-outside">
                <li className="list-disc text-sm leading-6 text-neutral-03">
                  Masukkan kartu ATM, lalu PIN
                </li>
                <li className="list-disc text-sm leading-6 text-neutral-03">
                  Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA
                  Virtual Account”
                </li>
                <li className="list-disc text-sm leading-6 text-neutral-03">
                  Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No.
                  Peserta: 12345678, maka ditulis 7002012345678
                </li>
                <li className="list-disc text-sm leading-6 text-neutral-03">
                  Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk
                  menyelesaikan transaksi
                </li>
                <li className="list-disc text-sm leading-6 text-neutral-03">
                  Ambil dan simpanlah bukti transaksi tersebut
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-2/5 border p-6 bg-white shadow-sm">
          <div className="flex mb-4 gap-4 justify-between items-stretch">
            <h2 className="text-sm font-bold mb-2">Konfirmasi Pembayaran</h2>
            <div className="flex items-center gap-2">
              <div className="text-white text-lg w-8 h-8 rounded-md bg-danger flex justify-center items-center">
                00
              </div>
              <span className="font-bold text-sm">:</span>
              <div className="text-white text-lg w-8 h-8 rounded-md bg-danger flex justify-center items-center">
                59
              </div>
            </div>
          </div>
          <p className="text-sm mb-6">
            Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
            akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan
            konfirmasi.
          </p>

          <div className="mb-4">
            <p className="mb-2 text-sm font-bold">Upload Bukti Pembayaran</p>
            <p className="text-sm">
              Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
              upload bukti bayarmu
            </p>
          </div>
          <div {...getRootProps({ className: "dropzone" })}>
            {files.length === 0 ? (
              <div className="cursor-pointer hover:bg-gray-300 container mb-6 w-80 h-44 bg-gray-100 mx-auto border-2 border-dashed rounded-md flex justify-center items-center">
                <input {...getInputProps()} />
                {isDragAccept && <p>All files will be accepted</p>}
                {isDragReject && <p>Some files will be rejected</p>}
                {!isDragActive && <FiImage fontSize={24} />}
              </div>
            ) : (
              <div className="cursor-pointer hover:bg-gray-300 container w-80 h-44 bg-gray-100 mx-auto border-2 border-dashed rounded-md flex justify-center items-center">
                {files?.map((file, index) => (
                  <img
                    className="h-full w-full"
                    key={index}
                    src={file.preview}
                    // Revoke data uri after image is loaded
                    onLoad={() => {
                      URL.revokeObjectURL(file.preview);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
          {files.length > 0 && (
            <button
              onClick={handleDeletePhoto}
              className="px-4 py-2 flex items-center justify-center mb-6 gap-2 text-sm hover:text-danger rounded-sm self-center"
            >
              <FiTrash fontSize={18} /> Delete Photo
            </button>
          )}
          <Button fullWidth color="primary">
            {files.length > 0 ? "Konfirmasi" : "Upload"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrderPayment;

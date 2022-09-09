import { currencyFormat, ScrollToTop } from "helpers/utils";
import { useState } from "react";
import { FiCheck, FiUsers } from "react-icons/fi";
import { Button } from "views/components";
import PropTypes from "prop-types";

const bankList = [
  { id: 1, name: "BCA", method: "BCA Transfer" },
  { id: 2, name: "BNI", method: "BNI Transfer" },
  { id: 3, name: "Mandiri", method: "Mandiri Transfer" },
];

const OrderMethod = ({ handleChangeActiveStep }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  return (
    <>
      <ScrollToTop />
      <section className="container mx-auto mb-24 w-full max-w-6xl px-4">
        <div className="w-full flex flex-col md:flex-row justify-between gap-8 items-start ">
          <div className="flex flex-col gap-4 w-full md:w-3/5 border p-6 bg-white shadow-sm">
            <h2 className="text-sm font-bold">Pilih Bank Transfer</h2>
            {bankList.map((item) => (
              <button
                onClick={() => setSelectedPaymentMethod(item)}
                key={item.id}
                className=" pb-4 pr-2 border-b flex items-center hover:bg-lime-green-01"
              >
                <label className="px-4 py-2 border rounded-md bg-white flex items-center justify-center text-sm">
                  {item.name}
                </label>
                <p className="ml-4 text-sm">{item.method}</p>
                {selectedPaymentMethod?.id === item?.id && (
                  <span className="ml-auto text-lime-green-04">
                    <FiCheck fontSize={24} />
                  </span>
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4 w-full md:w-2/5 border p-6 bg-white shadow-sm">
            <div>
              <h2 className="text-sm font-bold mb-2">Innova</h2>
              <p className="flex items-center text-sm gap-2 text-neutral-03 font-bold">
                <FiUsers /> 2-6 Orang
              </p>
            </div>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-none w-auto"
            >
              <input type="checkbox" className="peer p-0" />
              <div className="collapse-title text-sm font-bold pl-0 py-0 items-center flex">
                <p className="font-bold">
                  {/* Total ({currencyFormat(500000 * 7)}) */}
                  Detail
                </p>
              </div>
              <div className="collapse-content p-0 -mt-2">
                <div className="mb-6">
                  <h2 className="text-sm font-bold mb-2">Harga</h2>
                  <div className="flex items-stretch justify-between text-sm leading-6">
                    &bull; Sewa Mobil {currencyFormat(500000)} &times; 7 hari
                    <span>{currencyFormat(500000 * 7)}</span>
                  </div>
                </div>
                <div className="mb-6">
                  <h2 className="text-sm font-bold mb-2">Biaya Lainnya</h2>
                  <div className="flex items-center justify-between text-sm leading-6">
                    &bull; Pajak
                    <span className=" text-lime-green-04">Termasuk</span>
                  </div>
                  <div className="flex items-center justify-between text-sm leading-6">
                    &bull; Biaya Makan Supir
                    <span className=" text-lime-green-04">Termasuk</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-sm font-bold mb-2">Belum Termasuk</h2>
                  <div className="flex items-center justify-between text-sm leading-6">
                    &bull; Bensin
                  </div>
                  <div className="flex items-center justify-between text-sm leading-6">
                    &bull; Tol dan Parkir
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1 border-b shadow-md w-full align-center"></div>
            <div></div>

            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold">Total</h2>
              <p className="text-sm font-bold">{currencyFormat(500000 * 7)}</p>
            </div>
            <Button
              onClick={() => handleChangeActiveStep("payment")}
              disabled={!selectedPaymentMethod}
              fullWidth
              color="primary"
            >
              Bayar
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

OrderMethod.defaultProps = {
  handleChangeActiveStep: () => console.log("Change step handler"),
};

OrderMethod.propTypes = {
  handleChangeActiveStep: PropTypes.func.isRequired,
};

export default OrderMethod;

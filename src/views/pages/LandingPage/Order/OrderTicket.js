import { useState } from "react";
import { FiCheck, FiDownload } from "react-icons/fi";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const OrderTicket = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <section className="container mx-auto mb-24 w-full max-w-6xl px-4">
      <div className="w-full flex flex-col items-center">
        <span className=" w-12 h-12 bg-lime-green-04 rounded-full text-white flex items-center justify-center mb-4 mt-8 md:mt-0">
          <FiCheck fontSize={36} />
        </span>
        <h2 className="text-sm font-bold mb-4">Pembayaran Berhasil</h2>
        <p className="text-sm text-neutral-04 mb-10">
          Tunjukkan invoice ini ke petugas BCR di titik temu.
        </p>

        <div className="w-full max-w-3xl bg-white p-6 border rounded-md">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h2 className="text-sm font-bold mb-4">Invoice</h2>
              <p className="text-sm">821912898</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-dark-blue-04 border-dark-blue-04 rounded-sm border-2 font-bold">
              <FiDownload fontSize={18} strokeWidth={2} />
              <p className="text-sm">Unduh</p>
            </button>
          </div>
          <div className="w-full h-48 bg-gray-100 mx-auto border-2 border-dashed rounded-md flex justify-center items-center">
            <Document
              className={" w-full h-full"}
              file={"http://localhost:3000/assets/files/sample.pdf"}
              onLoadSuccess={onDocumentLoadSuccess}
              options={{ workerSrc: "/pdf.worker.js" }}
            >
              <Page
                className={"w-full h-full overflow-y-auto flex justify-center"}
                pageNumber={pageNumber}
              />
            </Document>

            {/* <div className="flex items-center gap-4 justify-center">
              <FiImage fontSize={24} />
              <p className="text-sm font-light">PDF Viewer</p>
            </div> */}
          </div>
          {numPages > 1 && (
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-4 flex-wrap">
              <p className="text-sm font-semibold">
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </p>
              <div className="flex shrink-0">
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className="text-sm w-20 p-2 border-l border-t border-b rounded-l-md text-neutral-04 disabled:text-neutral-03 focus:bg-dark-blue-01 disabled:bg-neutral-02"
                >
                  Previous
                </button>
                <div className="border-r" />
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                  className="text-sm w-20 p-2  border-r border-t border-b rounded-r-md text-neutral-04 disabled:text-neutral-03 focus:bg-dark-blue-01 disabled:bg-neutral-02"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderTicket;

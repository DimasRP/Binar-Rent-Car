import React from "react";
import { Link } from "react-router-dom";
import { Button } from "views/components";

const Page404 = () => {
  return (
    <main className="container mx-auto px-4">
      <div className="flex my-16 h-96 flex-col items-center justify-center">
        <div className=" w-60 md:w-80 -mt-8 rounded-full">
          <img
            src="/assets/images/error-404.png"
            alt="error-404"
            width={"100%"}
          />
        </div>
        <h1 className="text-lg md:text-3xl mb-2 text-gray-700 text-center">
          404! Halaman tidak ditemukan.
        </h1>
        <Link to="/">
          <Button color="secondary" variant="contained">
            Kembali
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default Page404;

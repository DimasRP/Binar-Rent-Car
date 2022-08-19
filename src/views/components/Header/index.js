import { Link, useLocation } from "react-router-dom";
import Button from "../Button";

const Header = () => {
  const url = useLocation();

  const { pathname } = url;

  return (
    <header className="bg-dark-blue-00 relative h-auto flex flex-col xl:block">
      <div
        data-aos-anchor="#header"
        data-aos="fade-right"
        className="container mx-auto relative xl:pt-32 xl:pb-24 px-4 mb-8">
        <div className="flex flex-col items-start gap-4">
          <h1 className=" text-4xl font-bold max-w-xl leading-normal">
            Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)
          </h1>
          <p className="text-sm font-bold leading-5 max-w-md">
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas{" "}
            terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
            untuk sewa mobil selama 24 jam.
          </p>
          {pathname === "/" ? (
            <Link to="/cari-mobil">
              <Button color="primary" variant="contained">
                Mulai Sewa Mobil
              </Button>
            </Link>
          ) : (
            <div className="mb-12" />
          )}
        </div>
      </div>
      <img
        data-aos-anchor="#parent"
        data-aos="fade-up"
        alt="header-car"
        width={"100%"}
        src="assets/images/header-image.png"
        className="w-full xl:w-auto lg:h-auto xl:absolute xl:bottom-0 xl:right-0 "
      />
    </header>
  );
};

export default Header;

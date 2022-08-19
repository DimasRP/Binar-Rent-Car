import { ourServicesData } from "helpers/data";
import { FiCheck } from "react-icons/fi";

const OurServices = () => {
  return (
    <section id="our-services" data-aos="fade-up" className="px-4 pt-24 my-24 container mx-auto flex flex-col lg:flex-row justify-center gap-14 lg:gap-24 items-center">
      <img
        alt="services-banner"
        src="assets/images/service-image.png"
        width={"460px"}
      />
      <article className="flex flex-col justify-start">
        <h2 className="text-2xl font-bold leading-9 mb-6 max-w-lg">
          Best Car Rental for any kind of trip in (Lokasimu)!
        </h2>
        <p className="text-sm font-bold leading-5 mb-4 max-w-md">
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div className="flex flex-col gap-4">
          {ourServicesData?.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <span className="bg-dark-blue-01 p-2 flex items-center justify-center rounded-full">
                <FiCheck className="text-dark-blue-04" />
              </span>
              <p className="text-sm font-bold leading-5">{item.title}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default OurServices;

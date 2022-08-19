import { whyUsData } from "helpers/data";

const WhyUs = () => {
  return (
    <section id="why-us" className="mb-24 mx-auto px-4 container">
      <h2 data-aos="fade-up" className="text-2xl font-bold mb-4 text-center lg:text-left">
        Why Us?
      </h2>
      <p data-aos="fade-up" className="text-sm font-bold mb-10 text-center lg:text-left">
        Mengapa harus memilih Binar Car Rental?
      </p>
      <div className="flex gap-8 flex-col lg:flex-row justify-between items-stretch">
        {whyUsData?.map((item) => (
          <div
            data-aos="zoom-in"
            key={item.title}
            className="bg-white p-6 flex flex-col gap-4 border-2 rounded-lg lg:w-72 items-baseline"
          >
            <div
              className={` p-2 ${item.iconBackgroundColor} rounded-full text-white`}
            >
              {item.icon}
            </div>
            <h3 className="font-bold text-base">{item.title}</h3>
            <p className="text-sm font-light">{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;

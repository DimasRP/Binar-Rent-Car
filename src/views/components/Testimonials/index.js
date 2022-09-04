import { testimonialsData } from "helpers/data";
import { createStars } from "helpers/utils";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./Testimonials.css";

const Testimonials = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    slidesToShow: 1,
    speed: 500,
    centerPadding: "0px",
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
    adaptiveHeight: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          adaptiveHeight: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section id="testimonials" data-aos="fade-up" className="my-24 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
      <p className="text-sm font-light mb-10 text-center">
        Berbagai review positif dari para pelanggan kami
      </p>
      <div  className="w-full">
        <Slider ref={setSliderRef} {...settings}>
          {testimonialsData.map((item) => (
            <div key={item.id}>
              <div className="mx-0 sm:mx-4 md:mx-12 2xl:mx-16">
                <div className="bg-dark-blue-00 p-4 md:px-8 md:py-16 w-full h-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 rounded-lg">
                  <img
                    src="assets/images/avatar-1.png"
                    alt="avatar"
                    className="w-20 h-20 "
                  />
                  <div className="flex sm:items-start flex-col gap-2">
                    <div className="flex self-center sm:self-start items-center ">
                      {createStars(item.stars)}
                    </div>
                    <p className="text-sm max-w-xs sm:max-w-sm font-bold">
                      {item.review}
                    </p>
                    <p className="text-sm font-normal leading-5">
                      {item?.name || "Unknown"} {item.age || "-"}{" "}
                      {item.place && ", " + item.place}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex items-center justify-center mt-6 gap-6">
          <button
            onClick={sliderRef?.slickPrev}
            className="p-2 bg-white border-gray-400 w-9 h-9 rounded-full border flex justify-center items-center hover:bg-green-500 focus:bg-green-500 focus:text-white hover:text-white focus:border-green-500"
          >
            <FiChevronLeft fontSize={24} className="font-semibold" />
          </button>
          <button
            onClick={sliderRef?.slickNext}
            className="p-2 bg-white border-gray-400 w-9 h-9 rounded-full border flex justify-center items-center hover:bg-green-500 focus:bg-green-500 focus:text-white hover:text-white focus:border-green-500"
          >
            <FiChevronRight fontSize={24} className="font-semibold" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

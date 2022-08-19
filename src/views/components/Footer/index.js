import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiTwitch,
  FiMail,
} from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Logo from "../Logo";

const Footer = () => {
  const url = useLocation();
  const navigate = useNavigate();

  const { pathname } = url;

  const scrollToPage = async (target) => {
    if (pathname !== "/") {
      await navigate("/");
    }
  };

  return (
    <footer className="container mx-auto mb-16 lg:mb-24 px-4">
      <div className="flex flex-col lg:flex-row items-baseline gap-4 lg:gap-20">
        <div className="flex flex-col gap-4 max-w-xs">
          <p className="text-sm font-bold">
            Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000
          </p>
          <p className="text-sm font-bold">binarcarrental@gmail.com</p>
          <p className="text-sm font-bold">081-233-334-808</p>
        </div>
        <div className="flex flex-col gap-4 max-w-xs">
          <Link
            offset={0}
            smooth={true}
            duration={500}
            to="our-services"
            onClick={() => scrollToPage("our-services")}
            className="cursor-pointer hover:text-dark-blue-04 text-sm"
          >
            Our Services
          </Link>
          <Link
            offset={-40}
            smooth={true}
            duration={500}
            to="why-us"
            onClick={() => scrollToPage("why-us")}
            className="cursor-pointer hover:text-dark-blue-04 text-sm"
          >
            Why Us
          </Link>
          <Link
            offset={-60}
            smooth={true}
            duration={500}
            to="testimonials"
            onClick={() => scrollToPage("testimonials")}
            className="cursor-pointer hover:text-dark-blue-04 text-sm"
          >
            Testimonial
          </Link>
          <Link
            offset={-60}
            smooth={true}
            duration={500}
            to="faq"
            onClick={() => scrollToPage("faq")}
            className="cursor-pointer hover:text-dark-blue-04 text-sm"
          >
            FAQ
          </Link>
        </div>
        <div className="flex flex-col gap-4 max-w-xs">
          <p className="text-sm font-bold">Connect with Us</p>
          <div className="flex items-center gap-4">
            <div className="bg-dark-blue-04 text-white p-2 rounded-full w-8 h-8">
              <FiFacebook />
            </div>
            <div className="bg-dark-blue-04 text-white p-2 rounded-full w-8 h-8">
              <FiInstagram />
            </div>
            <div className="bg-dark-blue-04 text-white p-2 rounded-full w-8 h-8">
              <FiTwitter />
            </div>
            <div className="bg-dark-blue-04 text-white p-2 rounded-full w-8 h-8">
              <FiMail />
            </div>
            <div className="bg-dark-blue-04 text-white p-2 rounded-full w-8 h-8">
              <FiTwitch />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-xs">
          <strong className="text-sm font-bold">Copyright Binar 2022</strong>
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import Drawer from "../Drawer";
import Logo from "../Logo";

const Navbar = () => {
  const url = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = url;

  const scrollToPage = async (target) => {
    if (pathname !== "/") {
      await navigate("/");
    }
  };

  useEffect(() => {
    const closeSidebar = () => {
      setIsOpen(false);
    };

    window.addEventListener("resize", closeSidebar);
  }, []);

  return (
    <>
      {/* sticky left-0 top-0 z-10 */}
      <nav className="w-full bg-dark-blue-00">
        <section className="container flex items-center justify-between mx-auto px-4 py-6">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <Link
              onClick={() => scrollToPage("our-services")}
              activeClass="text-dark-blue-04 font-semibold"
              className="cursor-pointer hover:text-dark-blue-04"
              spy={true}
              to="our-services"
              offset={-100}
              smooth={true}
              duration={500}
            >
              Our Services
            </Link>
            <Link
              onClick={() => scrollToPage("why-us")}
              activeClass="text-dark-blue-04 font-semibold"
              className="cursor-pointer hover:text-dark-blue-04"
              spy={true}
              offset={-80}
              to="why-us"
              smooth={true}
              duration={500}
            >
              Why Us
            </Link>
            <Link
              onClick={() => scrollToPage("testimonials")}
              activeClass="text-dark-blue-04 font-semibold"
              className="cursor-pointer hover:text-dark-blue-04"
              spy={true}
              offset={-200}
              to="testimonials"
              smooth={true}
              duration={500}
            >
              Testimonials
            </Link>
            <Link
              onClick={() => scrollToPage("faq")}
              activeClass="text-dark-blue-04 font-semibold"
              className="cursor-pointer hover:text-dark-blue-04"
              spy={true}
              offset={-80}
              to="faq"
              smooth={true}
              duration={500}
            >
              FAQ
            </Link>
            <Link to="/">FAQ</Link>
            <NavLink to={"/register"}>
              <button className="  bg-lime-green-04 hover:bg-lime-green-05 px-4 py-2 rounded-sm text-white font-bold">
                Register
              </button>
            </NavLink>
          </div>
          <button onClick={() => setIsOpen(true)} className="md:hidden w-6 h-6">
            <FiMenu fontSize={24} className="text-black hover:text-gray-600" />
          </button>
        </section>
      </nav>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)} position="right">
        <aside>
          <nav className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold">BCR</h2>
              <button onClick={() => setIsOpen(false)}>
                <FiX fontSize={24} className="text-black hover:text-gray-600" />
              </button>
            </div>
            <div className="flex flex-col gap-4 text-sm">
              <Link
                onClick={() => {
                  setIsOpen(false);
                  scrollToPage("our-services");
                }}
                activeClass="text-dark-blue-04 font-semibold"
                className="cursor-pointer hover:text-dark-blue-04"
                spy={true}
                offset={-60}
                to="our-services"
                smooth={true}
                duration={500}
              >
                Our Services
              </Link>
              <Link
                onClick={() => {
                  setIsOpen(false);
                  scrollToPage("why-us");
                }}
                activeClass="text-dark-blue-04 font-semibold"
                className="cursor-pointer hover:text-dark-blue-04"
                spy={true}
                offset={-80}
                to="why-us"
                smooth={true}
                duration={500}
              >
                Why Us
              </Link>
              <Link
                onClick={() => {
                  setIsOpen(false);
                  scrollToPage("testimonials");
                }}
                activeClass="text-dark-blue-04 font-semibold"
                className="cursor-pointer hover:text-dark-blue-04"
                spy={true}
                offset={-180}
                to="testimonials"
                smooth={true}
                duration={500}
              >
                Testimonials
              </Link>
              <Link
                onClick={() => {
                  setIsOpen(false);
                  scrollToPage("faq");
                }}
                activeClass="text-dark-blue-04 font-semibold"
                className="cursor-pointer hover:text-dark-blue-04"
                spy={true}
                offset={-80}
                to="faq"
                smooth={true}
                duration={500}
              >
                FAQ
              </Link>
              <NavLink to={"/register"}>
                <button className="  bg-lime-green-04 hover:bg-lime-green-05 px-4 py-2 rounded-sm text-white font-bold">
                  Register
                </button>
              </NavLink>
            </div>
          </nav>
        </aside>
      </Drawer>
    </>
  );
};

export default Navbar;

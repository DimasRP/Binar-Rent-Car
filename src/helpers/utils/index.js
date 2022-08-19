import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const createStars = (item) => {
  let stars = [];

  // Outer loop to create parent
  for (let i = 0; i < item; i++) {
    stars.push(<FaStar key={i} className=" text-warning" fontSize={16} />);
  }
  return stars;
};

const currencyFormat = (
  value = 0,
  currency = "IDR",
  format = "id-ID",
  minimumFractionDigits = 0
) => {
  return new Intl.NumberFormat(format, {
    style: "currency",
    currency,
    minimumFractionDigits,
  }).format(value);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export { createStars, ScrollToTop, currencyFormat };


import { currencyFormat } from "helpers/utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button";

const CarCard = ({ item }) => {
  return (
    <div className="p-6 flex flex-col w-full md:w-96 bg-white shadow-sm border rounded-lg mx-auto">
      <figure className="px-4 py-8 mb-4 w-full flex-1">
        <img
          src={item?.image ? item?.image : "assets/images/no-image-found.png"}
          alt="car-data"
          width={"100%"}
        />
      </figure>
      <div className="flex flex-col">
        <h2 className="leading-5 font-normal text-sm">{item.name || "Nama Mobil"}</h2>
        <p className="text-base leading-6 font-bold my-2">
          {currencyFormat(item?.price || 0)}
        </p>
        <p className="text-sm font-bold leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {item?.id && (
          <div className="mt-6">
            <Link to={`/detail-mobil/${item.id}`}>
              <Button variant="contained" color="primary" fullWidth>
                Pilih Mobil
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

CarCard.propTypes = {
  item: PropTypes.object,
};

CarCard.defaultProps = {
  item: {
    name: "",
    image: "",
    id: "",
    price: "",
  },
};

export default CarCard;

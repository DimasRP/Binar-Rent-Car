import CarsContext from "context/cars/CarsContext";
import {
  carCategoryOptions,
  carPriceOptions,
  carStatusOptions
} from "helpers/data";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "views/components";

const CarSearchModalForm = ({ closeFormFocus }) => {
  const { loading, editMode, changeCars, getCarList, carSearchFormData } =
    useContext(CarsContext);

  const { pathname } = useLocation();

  const isNotSearchPage = pathname !== "/cari-mobil" ? true : false;

  const { name, category, status } = carSearchFormData;

  // const initialFormData = {
  //   name: "",
  //   category: "",
  //   price: "",
  //   status: "",
  // };

  // const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    changeCars({
      carSearchFormData: {
        ...carSearchFormData,
        [e.target.id]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCarList();
    closeFormFocus();
    changeCars({ showResults: true });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        id="search-form"
        tabIndex={1}
        className="flex flex-col md:flex-row md:items-end gap-4 justify-between"
      >
        <div className="form-control flex-1">
          <label className="label">
            <span className="text-xs">Nama Mobil</span>
          </label>
          <input
            defaultValue={name}
            onChange={handleChange}
            disabled={loading || !editMode || isNotSearchPage}
            type="text"
            id="name"
            name="name"
            placeholder="Ketik nama/tipe mobil"
            className="input input-bordered w-full text-xs rounded-sm without-ring disabled:text-gray-400"
          />
        </div>

        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Kategori</span>
          </label>
          <select
            defaultValue={category}
            onChange={handleChange}
            id="category"
            name="category"
            disabled={loading || isNotSearchPage}
            className="select select-bordered w-full text-xs font-normal text-black rounded-sm appearance-none without-ring disabled:text-gray-400 "
          >
            {carCategoryOptions?.map((item) => (
              <option
                className={item?.disabled ? "text-gray-400" : "text-black"}
                disabled={item?.disabled}
                value={item.value}
                key={item.label}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Harga</span>
          </label>
          <select
            onChange={handleChange}
            id="price"
            name="price"
            disabled
            className="select select-bordered w-full text-xs font-normal text-black rounded-sm without-ring disabled:text-gray-400"
          >
            {carPriceOptions?.map((item) => (
              <option
                className={item?.disabled ? "text-gray-400" : "text-black"}
                disabled={item?.disabled}
                value={item.value}
                key={item.label}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control  flex-1">
          <label className="label">
            <span className="text-xs">Status</span>
          </label>
          <select
            defaultValue={status}
            onChange={handleChange}
            id="status"
            name="status"
            disabled
            className="select select-bordered w-full text-xs font-normal text-black rounded-sm without-ring disabled:text-gray-400"
          >
            {carStatusOptions?.map((item) => (
              <option
                className={item?.disabled ? "text-gray-400" : "text-black"}
                disabled={item?.disabled}
                value={item.value}
                key={item.label}
              >
                {item.label}
              </option>
            ))}
          </select>
        </div>
        {!isNotSearchPage && (
          <Button
            disabled={loading}
            variant={editMode ? "contained" : "outlined"}
            color={editMode ? "primary" : "secondary"}
            type="submit"
          >
            {editMode ? "Cari Mobil" : "Edit"}
          </Button>
        )}
      </form>
    </>
  );
};

export default CarSearchModalForm;

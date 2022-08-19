import { createContext, useReducer } from "react";
import { ApiGetRequest, ApiPostRequest } from "services/Api";
import { SET_CARS } from "../constants";
import carsReducer from "./CarsReducer";
import { carsState } from "./CarsState";

const CarsContext = createContext();

export const CarsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carsReducer, carsState);

  const setLoading = () => {
    dispatch({
      type: SET_CARS,
      payload: {
        loading: true,
      },
    });
  };

  const getCarList = async () => {
    const { carSearchFormData } = state;
    const { name, category } = carSearchFormData;

    setLoading();

    try {
      const response = await ApiGetRequest(`/admin/car`);

      let carList = response?.data || [];

      if (response?.error) {
        dispatch({
          type: SET_CARS,
          payload: {
            loading: false,
            isNotFound: false,
            error: true,
          },
        });
      } else {
        if (name.trim() === "" && !category) {
          carList = response?.data || [];
          dispatch({
            type: SET_CARS,
            payload: {
              showResults: false,
            },
          });
        } else if (name.trim() !== "" && category !== "") {
          carList = await carList?.filter(
            (item) => item.name?.toLowerCase() === name?.toLowerCase()
          );
          carList = await carList?.filter((item) => item.category === category);
        } else if (name.trim() !== "") {
          carList = await carList?.filter(
            (item) => item.name?.toLowerCase() === name?.toLowerCase()
          );
        } else if (category !== "") {
          carList = await carList?.filter((item) => item.category === category);
        }

        dispatch({
          type: SET_CARS,
          payload: {
            carsData: carList,
            loading: false,
            isNotFound: response?.data?.items?.length === 0 ? true : false,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: SET_CARS,
        payload: {
          loading: false,
          isNotFound: false,
          error: true,
        },
      });
    }
  };

  const getCars = async (data) => {
    setLoading();

    try {
      const response = await ApiPostRequest(`/admin/car`, data);
      if (response?.error) {
        dispatch({
          type: SET_CARS,
          payload: {
            loading: false,
            isNotFound: false,
            error: true,
          },
        });
      } else {
        dispatch({
          type: SET_CARS,
          payload: {
            carsData: response?.data || [],
            loading: false,
            isNotFound: response?.data?.items?.length === 0 ? true : false,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: SET_CARS,
        payload: {
          loading: false,
          isNotFound: false,
          error: true,
        },
      });
    }
  };

  const getCarDetails = async (id) => {
    setLoading();

    try {
      const response = await ApiGetRequest(`/admin/car/${id}`);
      if (response?.error) {
        dispatch({
          type: SET_CARS,
          payload: {
            loading: false,
            isNotFound: false,
            error: true,
          },
        });
      } else {
        const data = (await response?.data) || {};
        dispatch({
          type: SET_CARS,
          payload: {
            carDetails: data || {},
            loading: false,
            isNotFound: Object.keys(data).length === 0,
            error: false,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: SET_CARS,
        payload: {
          loading: false,
          isNotFound: false,
          error: true,
        },
      });
    }
  };

  const clearCarsState = () => {
    dispatch({
      type: SET_CARS,
      payload: carsState,
    });
  };

  const changeCars = (data) => {
    dispatch({
      type: SET_CARS,
      payload: data,
    });
  };

  return (
    <CarsContext.Provider
      value={{
        ...state,
        clearCarsState,
        changeCars,
        getCars,
        getCarDetails,
        getCarList,
      }}
    >
      {children}
    </CarsContext.Provider>
  );
};

export default CarsContext;

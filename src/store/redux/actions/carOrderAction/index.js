import axios from "axios"
import TYPES from "store/redux/types";

export const handleOrder = (payload) => (dispatch) => {
    dispatch({type:TYPES.CAR_ORDER_LOADING})
    axios
    .post("https://bootcamp-rent-car.herokuapp.com/customer/order", payload)
    .then((res) => {
    //   setResult(res.data)
    
        dispatch({type:TYPES.CAR_ORDER_SUCCESS, payload:res.data})
        return true;
    })
    .catch((err) => {
        dispatch({type:TYPES.CAR_ORDER_FAILED, payload:err.message})
        return false;
    })
}
const { default: TYPES } = require("store/redux/types");

const initialState = {
    loading: false,
    carOrderData: null,
    error: null,
}

const carOrderReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.CAR_ORDER_LOADING:
            return{
                ...state,
                loading: true,
                error: null,
            }
        case TYPES.CAR_ORDER_SUCCESS:
            return{
                ...state,
                loading: false,
                carOrderData: action.payload,
            }
        case TYPES.CAR_ORDER_FAILED:
            return{
                ...state,
                loading: false,
                error:action.payload
            }
    
        default:
            return state;
    }
}

export default carOrderReducer;
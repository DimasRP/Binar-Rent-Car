import { SET_CARS } from "context/constants";

const carsReducer = (state, action) => {
    switch (action.type) {
		case SET_CARS:
			return Object.assign({}, state, action.payload);
		default:
			return state;
	}
}

export default carsReducer
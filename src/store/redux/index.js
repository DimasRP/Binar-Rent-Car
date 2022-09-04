import { combineReducers } from 'redux';
import carOrderReducer from './reducers/carOrderReducer';

const rootReducers = combineReducers({
    carOrderReducer
});

export default rootReducers;
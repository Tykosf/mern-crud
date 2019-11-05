import { combineReducers } from 'redux';
import employee from './employee';
import edit from './edit';

export default combineReducers({
	employee,
	edit
});
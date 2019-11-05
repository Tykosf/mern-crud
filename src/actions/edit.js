import { employeeAPI } from '../api/api'; 
import { setTotalCount } from './employees';

export const setEditEmployee = obj =>({
	type: 'SET_EMPLOYEE',
	payload: obj
}) 

export const setAddEmployee = val => ({
	type: 'SET_ADD_EMPLOYEE',
	payload: val
})

export const getEmployee = (empId) => (dispatch) => {
	return employeeAPI.getEmployee(empId)
	.then(response => {
		const { data } = response;  
		dispatch(setEditEmployee({...data[0],departments: [...data.departments]}));
	})
}

export const createEmployee = (empName, empActive, dpId) => (dispatch) => {
	return employeeAPI.createEmployee(empName, empActive, dpId)
	.then(response => {
		const { data } = response;
		dispatch(setAddEmployee(false));
		dispatch(setTotalCount(data));
	}) 
}

export const updateEmployee = (empId, empName, empActive, dpId) => (dispatch) => {
	return employeeAPI.updateEmployee(empId, empName, empActive, dpId)
	.then(() => {
		dispatch(setAddEmployee(false));
	}) 
}
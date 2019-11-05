import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://127.0.0.1:2221',
	headers: {
		'Content-Type': 'application/json'
	}
});

export const employeeAPI = {
	
	getEmployees(currentPage, pageSize) {
		return instance.get(`/db?page=${currentPage}&count=${pageSize}`);
	},

	getEmployee(empId) {
		return instance.get(`/db/${empId}`);
	},

	searchEmployee(empName) {
		return instance.get(`/db/search/${empName}`);
	},

	createEmployee(empName, empActive, dpID) {
		return instance.post('/db', 
		{ 
			name: empName, 
			active: empActive,
			dpId: dpID  
		});	
	},

	updateEmployee(empId, empName, empActive, dpID) {
		return instance.put(`/db/${empId}`,
		{ 
			name: empName, 
			active: empActive,
			dpId: dpID  
		});
	},

	deleteEmployee(empId) {
		return instance.delete(`/db/${empId}`);
	}

}
const conn = require('../config/connection');
module.exports = class EmployeesService {
	constructor() {}

	async GetEmployees(count, offset) {
		return new Promise(function(resolve, reject){
			conn.query(
				`SELECT 
				tblemployees.empID,
				tblemployees.empName,
				tblemployees.empActive,
				tbldepartments.dpName
				FROM 
				(
					tblemployees 
					INNER JOIN tbldepartments 
					ON tblemployees.emp_dpID = tbldepartments.dpID
				) 
				ORDER BY empID LIMIT ? OFFSET ?`, [count, offset], 
				function(err, result){ 
					if(err) throw err;                                               
					if(result === undefined){
						reject(new Error("Error rows is undefined"));
					}else{
						resolve(result);
					}
				}
			)}
		)
	}
	
	async GetEmployee(empId) {
		return new Promise(function(resolve, reject){
			conn.query(
				`SELECT
				empID,
				empName,
				empActive,
				dpName,
				dpID 
				FROM
				(
					tblemployees 
					INNER JOIN tbldepartments 
					ON tblemployees.emp_dpid = tbldepartments.dpID
				)
				WHERE empID = ?`, empId, 
				function(err, result){ 
					if(err) throw err;                                               
					if(result === undefined){
						reject(new Error("Error rows is undefined"));
					}else{
						resolve(result);
					}
				}
			)}
		)
	}

	async GetDepartMents() { 
		return new Promise(function(resolve, reject){
			conn.query(`SELECT * FROM tbldepartments`, 
				function(err, result){ 
					if(err) throw err;                                               
					if(result === undefined){
						reject(new Error("Error rows is undefined"));
					}else{
						resolve(result);
					}
				}
			)}
		)
	}

	async SearchEmployee(name) {
		return new Promise(function(resolve, reject){
			conn.query(`SELECT 
			empID,
			empName,
			empActive,
			dpName 
			FROM 
			(
				tblemployees 
				INNER JOIN tbldepartments 
				ON tblemployees.emp_dpID = tbldepartments.dpID
			) 
			WHERE tblemployees.empName LIKE ?`,'%'+name+'%',
				function(err, result){ 
					if(err) throw err;                                               
					if(result === undefined){
						reject(new Error("Error rows is undefined"));
					}else{
						resolve(result);
					}
				}
			)}
		)
	}

	async CreateEmployee(name, active, dpId) {
		return new Promise(function(resolve, reject){
			conn.query(`INSERT 
			INTO tblemployees (empName,empActive,emp_dpID) 
			VALUES(?,?,?)`,[name, active, dpId], 
				function(err, result){ 
					if(err) throw err;                                               
					if(result === undefined){
						reject(new Error("Error rows is undefined"));
					}else{
						resolve(result);
					}
				}
			)}
		)
	}

	async UpdateEmployee(name, active, dpId, empId) {		
		return new Promise(function(resolve, reject){
			conn.query(`UPDATE 
			tblemployees 
			SET 
				empName=?, 
				empActive=?, 
				emp_dpID=? 
			WHERE empID=?`, [name, active, dpId, empId], 
				function(err, result){ 
					if(err) throw err;                                               
					result === undefined ? reject(new Error("Error rows is undefined")) : resolve(result);
				}
			)}
		)

	}

	async DeleteEmployee(empId) {
		return new Promise(function(resolve, reject){
			conn.query(`DELETE 
			FROM tblemployees 
			WHERE empID = ?`, empId, 
				function(err, result){ 
					if(err) throw err;                                               
					result === undefined ? reject(new Error("Error rows is undefined")) : resolve(result);
				}
			)}
		)
	}
}
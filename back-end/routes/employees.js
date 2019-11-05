const EmployeesService = require('../services/employees');
const EmployeesServiceInstance = new EmployeesService();
const GetTotalCount = require('../helper/pagination');

module.exports = (app) => {

	app.get('/db', async (req,res) => {  
		const { page, count } = req.query;
		const offset = (page * count) - count;
		const total = await GetTotalCount();
		const result = await EmployeesServiceInstance.GetEmployees(Number(count), Number(offset));
		return res.status(200).json({items: result, totalCount: total}).end();
	});

	app.get('/db/:id', async (req,res) => {	
		if(isNaN(Number(Object(req.params.id)[0]))) return res.status(500).end();
		const depart = await EmployeesServiceInstance.GetDepartMents();
		const employee = await EmployeesServiceInstance.GetEmployee(req.params.id);
		return res.status(200).json({...employee, departments: depart}).end();	
	});

	app.get('/db/search/:name', async (req,res) => {
		const result = await	EmployeesServiceInstance.SearchEmployee(req.params.name);
		return res.status(200).json(result).end();
	});	

	app.post('/db',async (req,res) => {
		const { name, active, dpId } = req.body;
		const result = await EmployeesServiceInstance.CreateEmployee(name, active, dpId);
		if(result) return res.status(200).json(await GetTotalCount(res)).end();
	});

	app.put('/db/:id', async (req,res) => {
		let { name, active, dpId } = req.body;
		const updatedResult = await EmployeesServiceInstance.UpdateEmployee(name, active, dpId, req.params.id);
		if(updatedResult) return res.status(200).end();
	});

	app.delete('/db/:id', async (req,res) => {
		const DeletedResult = await EmployeesServiceInstance.DeleteEmployee(req.params.id);
		let NewTotal = 0;
		if(DeletedResult) NewTotal = await GetTotalCount(res);
		return res.status(200).json(NewTotal).end();
	});

}
const conn = require('../config/connection');

let total = 0;

async function GetTotalCount() {
	return new Promise(function(resolve, reject){
		conn.query(`SELECT COUNT(*) FROM tblemployees`, 
			function(err, result){ 
				if(err) throw err;                                               
				if(result === undefined){
					reject(new Error("Error rows is undefined"));
				}else{
					total = result[0]["COUNT(*)"];
					resolve(total);
				}
			}
		)}
	)
}

module.exports = GetTotalCount

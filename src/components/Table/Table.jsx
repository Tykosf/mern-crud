import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import './table.scss';

const Table = ({ items, onDeleteElement }) => (
	<table>
		<thead>
			<tr>
				<th></th>
				<th></th>
				<th>empID</th>
				<th>empName</th>
				<th>empActive</th>
				<th>empDepartment</th>
				<th></th>
			</tr>                 
		</thead>
		<tbody>
			{ 
				items.map((item) => <tr key={item.empID}>
				<td><Link to={`/employeers/view/${item.empID}`}>View</Link></td>
				<td><Link to={`/employeers/edit/${item.empID}`}>Edit</Link></td>
				<td>{item.empID}</td>
				<td>{item.empName}</td>
				<td>{item.empActive}</td>
				<td>{item.dpName}</td>                      
				<td><span onClick={onDeleteElement.bind(this,item.empID)}>Delete</span></td>
				</tr>)
			} 
		</tbody>
	</table>
)

Table.propTypes = {
	items: PropTypes.array.isRequired,
	onDeleteElement: PropTypes.func.isRequired
};

export default Table
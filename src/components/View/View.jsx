import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import './view.scss';

const View = ({ empName, empID, empActive, dpName }) => {
	return (
		<div className='view'>
			<table>
				<thead>
					<tr>
						<th>empID</th>
						<th>empName</th>
						<th>empActive</th>
						<th>dpName</th>
						<th></th>
					</tr>
				</thead>
			<tbody>
				<tr>
					<td>{empID}</td>
					<td>{empName}</td>
					<td>{empActive}</td>
					<td>{dpName}</td>
					<td><Link to='/employeers'>Back</Link></td>
				</tr>
			</tbody>
			</table>
		</div>
	)
}

View.propTypes = {
	empName: PropTypes.string,
	empID: PropTypes.number,
	empActive: PropTypes.string,
	dpName: PropTypes.string
};

export default View;
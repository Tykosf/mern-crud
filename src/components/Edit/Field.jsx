import React from 'react';
import PropTypes from 'prop-types'; 

const Field = ({ text, children }) => (
	<div>
		<span>{text}</span>
		{children}
	</div>
) 

Field.propTypes = {
	children: PropTypes.node,
	text: PropTypes.string.isRequired,
};

export default Field
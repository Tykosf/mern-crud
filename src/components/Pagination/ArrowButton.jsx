import React from 'react';
import PropTypes from 'prop-types'; 

const ArrowButton = ({ onClick, path, altText }) => {
	return ( 
		<span onClick={onClick}>		
			<img src={path} alt={altText}/>
		</span>			
	)
}

ArrowButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	path: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};

export default ArrowButton
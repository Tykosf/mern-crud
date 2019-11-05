import React from 'react';
import PropTypes from 'prop-types'; 
import './header.scss';

const Header = ({ onPageSizeChanged, setSearchQuery, onSearchElement, pageSize, searchQuery }) => (
	<header>
		<select value={pageSize} onChange={(e)=>{
				onPageSizeChanged(Number(e.target.value));
			}} >
			<option value="2">2</option>
			<option value="5">5</option>
		</select>
		<div>
			<input 
				type="text" 
				name="search"
				placeholder="Enter employer name" 
				onChange={(e)=>{setSearchQuery(e.target.value)}}
			/> 
		</div>
		<button onClick={()=>{onSearchElement(searchQuery)}}>SEARCH</button>
	</header>
)

Header.propTypes = {
	onPageSizeChanged: PropTypes.func.isRequired,
	setSearchQuery: PropTypes.func.isRequired,
	onSearchElement: PropTypes.func.isRequired,
	pageSize: PropTypes.number.isRequired,
	searchQuery: PropTypes.string
};



export default Header
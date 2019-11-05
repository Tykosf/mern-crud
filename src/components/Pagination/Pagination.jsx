import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 
import ArrowButton from './ArrowButton';
import next from '../../assets/images/next.png';
import end from '../../assets/images/end.png';
import './pagination.scss';

const UpdatePages = (totalEmployeersCount, pageSize) => {
	let pages = [];
	const pagesCount = Math.ceil(totalEmployeersCount / pageSize);
	for(let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return pages;
}

const Pagination = ({ onPageChanged, currentPage, totalEmployeersCount, pageSize }) => {
	let [pages, setPages] = useState([]);
	useEffect(()=> {
		const newPages = UpdatePages(totalEmployeersCount, pageSize);
		setPages(newPages)
	}, [totalEmployeersCount, pageSize])

	return <div className='pagination'>
		<ArrowButton 
			onClick={onPageChanged.bind(this,pages[0],undefined,true)} 
			path={end} 
			alt={'backToStart'} 
			currentPage={pages[0]}
			count={pageSize}
		/>
		<ArrowButton 
			onClick={onPageChanged.bind(this,currentPage-1,undefined,true)} 
			path={next} 
			alt={'previous'} 
			currentPage={currentPage === 1 ? 1 : currentPage-1}
			count={pageSize}
		/>
		{pages.map(item => 
			<span 
				key={item} 
				className={currentPage === item ? 'selectedPage' : 'unselected'} 
				onClick={onPageChanged.bind(this,item,undefined,true)}>
				{item}
			</span>)
		}
		<ArrowButton 
			onClick={onPageChanged.bind(this,currentPage+1,undefined,true)} 
			path={next} 
			alt={'next'} 
			currentPage={currentPage >= pages.length ? currentPage : currentPage+1}
			count={pageSize}
		/>
		<ArrowButton 
			onClick={onPageChanged.bind(this,pages.length,undefined,true)} 
			path={end} 
			alt={'toEnd'}
			currentPage={pages.length}
			count={pageSize} 
		/>
	</div>
} 

Pagination.propTypes = {
	onPageChanged: PropTypes.func.isRequired,
	currentPage: PropTypes.number.isRequired,
	totalEmployeersCount: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
};


export default Pagination
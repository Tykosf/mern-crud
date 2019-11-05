import React from 'react';
import Pagination from '../Pagination/Pagination';
import Table from '../Table/Table';
import Header from '../Header/Header';
import PropTypes from 'prop-types'; 
import './grid.scss';

const Grid = (props) => {
  return (
    <div className='grid'>
      <Header 
        onPageSizeChanged={props.onPageSizeChanged} 
        onSearchElement={props.onSearchElement}
        setSearchQuery={props.setSearchQuery} 
        pageSize={props.pageSize}
        searchQuery={props.searchQuery}
      />
      <Table 
        items={props.items} 
        onDeleteElement={props.onDeleteElement}
      />
      <Pagination 
        currentPage={props.currentPage} 
        onPageChanged={props.onPageChanged} 
        totalEmployeersCount={props.totalEmployeersCount}
        pageSize={props.pageSize}
      />
    </div>
  );
}

Grid.propTypes = {
	currentPage: PropTypes.number.isRequired,
	items: PropTypes.array.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
  searchQuery: PropTypes.string,
  pageSize: PropTypes.number.isRequired,
};

export default Grid
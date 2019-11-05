import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as employeersActions from '../actions/employees';
import * as editActions from '../actions/edit';
import Grid from '../components/Grid/Grid';

const mapStateToProps = ({ employee, edit }) => ({
	items: employee.items,
	pageSize: employee.pageSize,
	totalEmployeersCount: employee.totalEmployeersCount,
	currentPage: employee.currentPage,
	searchQuery: employee.searchQuery,
	setEmployee: edit.setEditEmployee
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(employeersActions,dispatch),
	...bindActionCreators(editActions,dispatch)
})

class GridContainer extends React.Component {
	componentDidMount(){
    this.props.getEmployees(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber, size=this.props.pageSize, notRefresh=false) => {      
    if(this.props.currentPage === pageNumber && size === this.props.pageSize && notRefresh) return;
    let pNum = Math.ceil(this.props.totalEmployeersCount / size);
    if(pageNumber > pNum || pageNumber < 1) return;
    this.props.setCurrentPage(pageNumber);
    this.props.getEmployees(pageNumber, size);
  }

  onPageSizeChanged = (size) => {
    this.props.setPageSize(size);
    this.onPageChanged(1,size);
  }

  onDeleteElement = (id) => {
    this.props.deleteEmployee(id)
    .then(() => {
      if(this.props.totalEmployeersCount % 2 === 0)
        this.onPageChanged(this.props.currentPage-1);
      else
        this.onPageChanged(this.props.currentPage);
    })
  }

  onSearchElement = (name='') => {
    if(name.trim().length === 0) return;
    this.props.searchEmployee(name);
	}
	
	render() {
		return (
			<Grid 
				{...this.props}
				onPageChanged={this.onPageChanged}
				onPageSizeChanged={this.onPageSizeChanged}
				onDeleteElement={this.onDeleteElement}
				onSearchElement={this.onSearchElement}
			/>
		)
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(GridContainer);
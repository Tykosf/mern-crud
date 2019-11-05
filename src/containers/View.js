import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as editActions from '../actions/edit';
import View from '../components/View/View';

const mapStateToProps = ({ edit }) => (
	edit.editEmployee
)

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(editActions,dispatch)
})

class ViewContainer extends React.Component {
	componentDidMount() {
		this.props.getEmployee(this.props.match.params.id);
	}
	render() {
		return (
			<View 
				empName={this.props.empName}
				empID={this.props.empID}
				dpName={this.props.dpName} 
				empActive={this.props.empActive} 
			/>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewContainer);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as editActions from '../actions/edit';
import Edit from '../components/Edit/Edit';

const mapStateToProps = ({ edit }) => ({
	editEmployee: edit.editEmployee,
	addEmployee: edit.addEmployee
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(editActions,dispatch)
})

class EditContainer extends React.Component {
	constructor(props) {
    super(props);
    this.state = { eName: ""}
  }

  componentDidMount(){
    this.props.getEmployee(this.props.match.params.id)
    .then(() =>  this.setState({ eName: this.props.editEmployee.empName}));
  }

  onSaveChanges = (methodName) => {
    const { empName, empActive, dpID} = this.props.editEmployee;
    if(methodName === 'PUT')
      this.props.updateEmployee(this.props.match.params.id, empName, empActive, dpID);
    else 
      this.props.createEmployee(empName, empActive, dpID);
  }

  onOptionChanged = (option) => {
    this.props.setEditEmployee({...this.props.editEmployee, dpID: Number(option)})
  }

  onChangeName = (name) => {
    this.props.setEditEmployee({...this.props.editEmployee, empName: name})
    this.setState({ eName: name });
  }

  ToString = (value) => {
    return value ? "YES" : "NO"; 
  }

  onChangeCheckBox = (active) => {
    this.props.setEditEmployee({...this.props.editEmployee, empActive: this.ToString(active)})
	}
	render() {
		return (
			<Edit 
				{...this.props}
				onChangeCheckBox={this.onChangeCheckBox}
				onSaveChanges={this.onSaveChanges}
				onChangeName={this.onChangeName}
				onOptionChanged={this.onOptionChanged}
				eName={this.state.eName}
			/>
		)
	}

}

export default connect(mapStateToProps,mapDispatchToProps)(EditContainer);
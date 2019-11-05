import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import Field from './Field';
import './edit.scss';

// class Edit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { eName: ""}
//   }

//   componentDidMount(){
//     this.props.getEmployee(this.props.match.params.id)
//     .then(() =>  this.setState({ eName: this.props.editEmployee.empName}));
//   }

//   onSaveChanges = (methodName) => {
//     const { empName, empActive, dpID} = this.props.editEmployee;
//     if(methodName === 'PUT')
//       this.props.updateEmployee(this.props.match.params.id, empName, empActive, dpID);
//     else 
//       this.props.createEmployee(empName, empActive, dpID);
//   }

//   onOptionChanged = (departmentId) => {
//     this.props.setEditEmployee({...this.props.editEmployee, dpID: Number(departmentId)})
//   }

//   onChangeName = (name) => {
//     this.props.setEditEmployee({...this.props.editEmployee, empName: name})
//     this.setState({ eName: name });
//   }

//   ToString = (value) => {
//     return value ? "YES" : "NO"; 
//   }

//   onChangeCheckBox = (active) => {
//     this.props.setEditEmployee({...this.props.editEmployee, empActive: this.ToString(active)})
//   }

//   render() {
//     const { empActive, dpID, departments } = this.props.editEmployee;
//     const methodName = this.props.addEmployee ? 'POST' : 'PUT';
//     return (        
//       <div className='edit'>
//         <Field text={'empName:'}>
//           <input type="text" value={this.state.eName} onChange={(e)=>this.onChangeName(e.target.value)}/>
//         </Field>
//         <Field text={'empActive:'}>
//           <input type='checkbox' onChange={(e)=>{this.onChangeCheckBox(e.target.checked)}}  
//             checked={empActive === 'YES' ? true : false }
//           />
//           <em style={{marginLeft: '10px'}}>Want add employee?</em> 
//           <input type='checkbox' 
//             onChange={(e)=>{this.props.setAddEmployee(Boolean(e.target.checked))}}
//           />
//         </Field>     
//         <Field text={'empDepartment:'}>
//           <select value={dpID} onChange={(e)=>{this.onOptionChanged(e.target.value)}}>
//             {departments && departments.map(item => 
//               <option key={item.dpID} value={item.dpID}>{item.dpName}</option>
//             )}
//           </select>
//         </Field>   
//         <div>
//           <a href='/employeers' onClick={()=>this.onSaveChanges(methodName)}>
//             Save
//           </a>
//           <Link to='/employeers'>Cancel</Link> 
//         </div>
//       </div>
//     )
//   }
// }



const Edit = (props) => {
  const { empActive, dpID, departments } = props.editEmployee;
  const { 
    setAddEmployee, 
    addEmployee, 
    onChangeName, 
    onChangeCheckBox, 
    onOptionChanged, 
    onSaveChanges, 
    eName 
  } = props;
  const methodName = addEmployee ? 'POST' : 'PUT';
  return (        
    <div className='edit'>
      <Field text={'empName:'}>
        <input type="text" value={eName} onChange={(e)=>onChangeName(e.target.value)}/>
      </Field>
      <Field text={'empActive:'}>
        <input type='checkbox' onChange={(e)=>{onChangeCheckBox(e.target.checked)}}  
          checked={empActive === 'YES' ? true : false }
        />
      </Field>
      <div className='add'>
          <em>Want add employee?</em> 
          <label>
          <input type='checkbox' 
            onChange={(e)=>{setAddEmployee(Boolean(e.target.checked))}}
          /> 
          </label>

        </div>    
      <Field text={'empDepartment:'}>
        <select value={dpID} onChange={(e)=>{onOptionChanged(e.target.value)}}>
          {departments && departments.map(item => 
            <option key={item.dpID} value={item.dpID}>{item.dpName}</option>
          )}
        </select>
      </Field>   
      <div>
        <a href='/employeers' onClick={onSaveChanges.bind(this,methodName)}>
          Save
        </a>
        <Link to='/employeers'>Cancel</Link> 
      </div>
    </div>
  )
}

Edit.propTypes = {
	empActive: PropTypes.bool,
	dpID: PropTypes.number,
  departments: PropTypes.array,
  setAddEmployee: PropTypes.func.isRequired, 
  addEmployee: PropTypes.bool.isRequired, 
  onChangeName: PropTypes.func.isRequired, 
  onChangeCheckBox: PropTypes.func.isRequired, 
  onOptionChanged: PropTypes.func.isRequired, 
  onSaveChanges: PropTypes.func.isRequired, 
  eName: PropTypes.string.isRequired 
};

export default Edit;
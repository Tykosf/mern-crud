import { employeeAPI } from "../api/api";

export const setEmployeers = employees => ({
  type: 'SET_EMPLOYEES',
  payload: employees 
});

export const setCurrentPage = currentPage => ({
  type: 'SET_CURRENT_PAGE',
  currentPage
})

export const setTotalCount = total => ({
  type: 'SET_TOTAL_COUNT',
  payload: total
})

export const setSearchQuery = str => ({
  type: 'SET_SEARCH_QUERY',
  payload: str
})

export const setPageSize = num => ({
  type: 'SET_PAGE_SIZE',
  payload: num
})

export const getEmployees = (currentPage, pageSize) => (dispatch) => {
  return employeeAPI.getEmployees(currentPage, pageSize)
  .then(response => {
    const { data } = response;
    dispatch(setEmployeers(data.items));
    dispatch(setTotalCount(data.totalCount)); 
  })
}

export const deleteEmployee = (empId) => (dispatch) => {
  return employeeAPI.deleteEmployee(empId)
  .then(response => {
    const { data } = response;
    dispatch(setTotalCount(data)); 
  })
}

export const searchEmployee = (empName) => (dispatch) => {
  employeeAPI.searchEmployee(empName)
  .then(response => {
    const { data } = response;
    dispatch(setEmployeers(data));
  })
  .catch(e => console.log(e))
}
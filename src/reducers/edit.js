const initialState = {
	editEmployee: {},
	addEmployee: false
};

export default (state = initialState, action) => {
    
	switch (action.type) {
		case 'SET_EMPLOYEE':
			return {
				...state,
				editEmployee: action.payload,
			}
		case 'SET_ADD_EMPLOYEE':
			return {
				...state,
				addEmployee: action.payload
			}
		default:
			return state;
	}
}

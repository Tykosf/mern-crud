const initialState = {
	items: [],
	pageSize: 2,
	totalEmployeersCount: 0,
	currentPage: 1
};

export default (state = initialState, action) => {
    
	switch (action.type) {
		case 'SET_EMPLOYEES':
			return {
				...state,
				items: action.payload
			}
			
		case 'SET_CURRENT_PAGE':
			return {
				...state,
				currentPage: action.currentPage
			}
		
		case 'SET_TOTAL_COUNT':
			return {
				...state,
				totalEmployeersCount: action.payload
			}
		
		case 'SET_SEARCH_QUERY': 
			return {
				...state,
				searchQuery: action.payload
			}
		
		case 'SET_PAGE_SIZE': 
			return {
				...state,
				pageSize: action.payload
			}
		
		default:
			return state;
	}
}
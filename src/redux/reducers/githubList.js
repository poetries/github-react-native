import * as ActionTypes from '../actions/'

export default (state = {
	fetching : false,
	error 	 : false,
	data 	 : []
}, action) => {

	if (action.type === ActionTypes.FETCH_GITHUB_LIST_SUCCESS) {
        const {githubList} = action.response
		return {
            ...state,
			fetching : false,
			error 	 : false,
			data 	 : githubList.items
		}
	}else if(action.type === ActionTypes.FETCH_GITHUB_LIST_REQUEST){
		return {
            ...state,
			fetching : true,
			error 	 : false
		}
	}

	return state
}
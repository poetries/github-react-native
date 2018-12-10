import {CALL_API} from '../middleware/api'

export const FETCH_GITHUB_LIST_REQUEST = ' FETCH_GITHUB_LIST_REQUEST'
export const  FETCH_GITHUB_LIST_SUCCESS = ' FETCH_GITHUB_LIST_SUCCESS'
export const  FETCH_GITHUB_LIST_FAILURE = ' FETCH_GITHUB_LIST_FAILURE'
export const fetchGithubList = (searchKey,onSuccess) => (dispatch,getState) => {
	
	return dispatch( {
		[CALL_API] : {
			types : [FETCH_GITHUB_LIST_REQUEST, FETCH_GITHUB_LIST_SUCCESS, FETCH_GITHUB_LIST_FAILURE],
			endpoint: `/search/repositories?q=${searchKey}&sort=stars`,
			schema : 'githubList',
			query:{
				method: 'get',
                data:{
                    
                }
			}
		}
	}).then(onSuccess)
}
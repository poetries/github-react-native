import { combineReducers } from 'redux';
import routes from './routes';
import githubList from './githubList'

const rootReducer = combineReducers({
    routes,
    githubList
  });

  export default rootReducer;

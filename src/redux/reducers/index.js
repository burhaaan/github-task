import { combineReducers } from 'redux';
import repositories from './repositoryReducer';

const rootReducer = combineReducers({
  repositories,
});

export default rootReducer;

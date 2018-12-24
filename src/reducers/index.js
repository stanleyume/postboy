import {combineReducers} from 'redux'
import PostReducer from './PostReducer';

const allReducers = combineReducers({
     posts: PostReducer,
});

export default allReducers;

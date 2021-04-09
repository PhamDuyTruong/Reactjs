// reducer tổng quản lý tất cả reducer con
import { combineReducers } from "redux";

// Import các reducer con
import countReducer from './countReducer';
import colorReducer from './colorReducer';
import todoReducer from './todoReducer';
import coursesReducer from './coursesReducer';

const rootReducer = combineReducers({
    // Đây là nơi khai báo các reducer con
    count : countReducer,
    color : colorReducer, 
    todo: todoReducer,
    courses: coursesReducer,
})

export default rootReducer;
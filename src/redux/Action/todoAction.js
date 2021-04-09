//Move các action về 1 file riêng để có thể tái sử dụng và chỉnh sửa dễ dàng
import {ADD_TODO, DELETE_TODO, CHANGE_STATUS, FILTER_TODO} from "../constants/todoConstant"
export const filterTodo = (status) =>{
    return {
        type: FILTER_TODO,
        payload:{
            status,
        }
    }
};

export const addTodo = (todo) =>{
    return{
        type: ADD_TODO,
        payload:{
            todo,
        }
    }
};

export const deleteTodo = (id) =>{
    return {
        type: DELETE_TODO,
        payload:{
            id,
        }
    }
};

export const changeStatus = (id) =>{
    return{
        type: CHANGE_STATUS,
        payload:{
            id
        }
    }
}
import React from 'react';
import {Button} from "reactstrap";
import {useDispatch} from "react-redux";
import {filterTodo} from "../redux/Action/todoAction"

export default function FilterTodo() {
    const dispatch = useDispatch();
    const handleFilterTodo = (status) =>{
        // const action ={
        //     type: "FILTER_TODO",
        //     payload: {
        //         status,
        //     }
        // }
        dispatch(filterTodo(status));
    }
    return (
        <div className="d-flex mt-2">
            <Button color="primary" className="mr-2" onClick={() => handleFilterTodo("all")}>All</Button>
            <Button color="warning" className="mr-2" onClick={() => handleFilterTodo("completed")}>Completed</Button>
            <Button color="secondary" onClick={() => handleFilterTodo("uncompleted")}>Uncompleted</Button>
        </div>
    )
}

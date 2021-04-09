import React, {useState} from 'react';
import {Input, Button} from "reactstrap";
import {useDispatch} from "react-redux";
import {addTodo} from "../redux/Action/todoAction"

export default function AddTodo() {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const handleChange =(evt)=>{
        setTodo(evt.target.value)
    }
    const handleAddTodo =()=>{
        // const action = {
        //     type: "ADD_TODO",
        //     payload: {
        //         todo
        //     }

        // };
        dispatch(addTodo(todo));
    }


    return (
        <div className="w-50 d-flex mb-3">
            <Input className="mr-2" value={todo} onChange={handleChange} />
            <Button color="primary" onClick={handleAddTodo}> Add </Button>
        </div>
    )
}

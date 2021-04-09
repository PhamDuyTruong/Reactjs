import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function DemoRedux() {

    const dispatch = useDispatch()
    // Lấy state từ store, sử dụng useSelector
    const count = useSelector((state) => state.count);
    const color = useSelector((state) => state.color);
    

    const tangBienDem = () =>{
        // Để thay đổi biến đếm trong store ta cần gọi tới một action
        const action = {
            type: "TANG_BIEN_DEM"
        }

        // Đẩy action vào store để thay đổi state sử dụng useDispatch
        dispatch(action)
    }
     
    const changeColor = (evt) =>{
        const action = {
            type: "CHANGE_COLOR",
            payload: evt.target.value
        }

        dispatch(action)
    }
    return (
        <div>
            <h1>Demo Redux</h1>
            <p>Count : {count} </p>
            <button className="btn btn-secondary" onClick={tangBienDem}> Tăng biến đếm</button>
            <p>Color: {color}</p>
            <select value = {color} onChange={changeColor}>
                <option value ="blue">Blue</option>
                <option value ="red">Red</option>
                <option value ="green">Green</option>
            </select>
        </div>
    )
}

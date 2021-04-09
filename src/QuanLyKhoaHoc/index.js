import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useSelector, useDispatch} from "react-redux";
import {getCourses} from '../redux/Action/coursesAction'

// Lấy danh sách khoá học từ API và hiến thị ra giao diện

export default function QuanLyKhoaHoc() {

    // const [course, setCourse] = useState([]);
    const { data } = useSelector((state) => state.courses);
    const dispatch = useDispatch();

    useEffect(()=>{

        // async function handleGetCourse(){
        //     const {data} = await axios({
        //         method:"GET",
        //         url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
        //     });
        //     dispatch(getCourses(data))
        // }
        
        // handleGetCourse();
        // dispatch middleware action
        dispatch(getCourses());
    }, [])
    return (
        <div className="container">
            <div className="row">
                {data.map((item)=>(
                    <div key={item.maKhoaHoc} className="col-sm-4 card">
                        <img className="card-img-top" src={item.hinhAnh} alt="khoa hoc"></img>
                        <div className="card-body">
                            <h4 className="card-title">{item.khoaHoc}</h4>
                            <p className="card-text">{item.moTa}</p>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

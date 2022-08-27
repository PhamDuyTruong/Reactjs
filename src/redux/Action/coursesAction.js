import {GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE} from "../constants/coursesConstant";
import axios from 'axios';

export const getCourses = () =>{
    // Xử lý logic gọi API
    return async (dispatch) =>{

        // dispatch action request trước khi gọi api
        dispatch({type: GET_COURSES_REQUEST});
        try{
        const {data} = await axios({
            method: 'GET', 
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
        });
        dispatch({type: GET_COURSES_SUCCESS, payload: {data}})
    }catch(error){
        dispatch({type: GET_COURSES_FAILURE, 
            payload:{
                error: error.response.data
            }
        })
    }
        // dispatch({
        //     type: GET_COURSES,
        //        payload:{
        //             data,
        //         },
        //      }
        // )
    }
    // return {
    //     type: GET_COURSES,
    //     payload:{
    //         data,
    //     }
    // }
}
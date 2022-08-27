import React from 'react';
import {useHistory, useLocation, useParams} from 'react-router-dom'

export default function DemoRouter(props) {
    // Khi component không có cung cấp cho các props nhưng muốn sử dungk
    const history =useHistory();
    console.log(history);
    const location = useLocation();
    console.log(location);
    const param = useParams();
    console.log(param)




    // Khi component có cung cấp cho các props của router
    // console.log("Props DemoRouter:", props)
    // // Các props mặc định được cung cấp khi component được gắn trong route
    // const {history, location, match} = props;
    // // history: cung cấp các hàm điều hướng routing
    // // Location: cung cấp path name là url của component, cung cấp search là giá trị querry params
    // // Querry params có dạng: ?page=1&sort=asc, dùng cho các trang danh sách để filter
    // // Có 3 cách lưu trữ url, localStorage
    // // Match: Cung cấp params là giá trị động trên url, bắt buộc phải xài param để lấy chi tiết sản phẩm
    // // Params: /movie/movieId
     const goToCourses =() =>{
         // Điều hướng tới trang courses nhưng vẫn giữ lịch sư trang hiện tại
         history.push("/courses")
     }

     const goToDoList = () =>{
         //Điều hướng tới trang to do list nhưng Thay thế lịch sử trang hiện tại
         history.replace("/todo-list")
     };


    return (
        <div>
            <button className="btn btn-primary" onClick={goToCourses}>Goto Courses</button>
            <button className="btn btn-secondary" onClick={goToDoList}>Go to do list</button>
            <button className="btn btn-secondary" onClick={() => history.goBack()}>Go Back</button>
        </div>
    )
}

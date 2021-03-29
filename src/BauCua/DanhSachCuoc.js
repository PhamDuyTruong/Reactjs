import React from 'react'

export default function DanhSachCuoc({tienThuong, danhSachCuoc, xuLyDatCuoc}) {
    const thayDoiCuoc = (item, status)=>{
        xuLyDatCuoc(item,status)
    }

    return (
        <div className="container">
            <div className="row">
            {danhSachCuoc.map((item)=>(
               <div key ={item.ten} className="my-2 col-sm-4">
                   <img width="100%" src={item.hinhAnh} alt="Hinh ảnh"></img>
                   <div className="mt-4 bg-warning text-center p-2 ">
                       <span className="mr-2">Cược: </span>
                       <button className="btn btn-success" disabled={!tienThuong} onClick ={()=> thayDoiCuoc(item, true)}>+</button>
                       <span className="text-success mx-2">{item.diemCuoc}</span>
                       <button className="btn btn-success" disabled={!item.diemCuoc} onClick = {()=> thayDoiCuoc(item, false)}>-</button>
                   </div>
               </div>
            ))}
            </div>
        </div>
    )
}

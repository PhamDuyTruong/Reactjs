import React, { Component } from 'react'
import DanhSachSanPhamGioHang from './DanhSachSanPhamGioHang'
import ModalGioHang from './ModalGioHang';
import PhoneData from '../Data/PhoneData.json';


export default class BaiTapGioHang extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            gioHang: [{   
            "maSP": 1,
            "tenSP": "Vivo 850",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "soLuong" : 1,
            "giaBan": 5700000,
            "hinhAnh": "./img/sp_vivo850.png"}]
        }
    }
    
    themGioHang = (sanPhamChon) =>{
        let spGioHang= {
            maSP: sanPhamChon.maSP,
            tenSP: sanPhamChon.tenSP,
            soLuong : 1,
            giaBan: sanPhamChon.giaBan,
            hinhAnh: sanPhamChon.hinhAnh,
        }
        var gioHangCapNhat = [... this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP);
        if(index !== -1){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            gioHangCapNhat.push(spGioHang);
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
       
    }

    xoaGioHang = (maSP) =>{
        var gioHangCapNhat = [... this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        if(index !== -1){
            gioHangCapNhat.splice(index,1);
        }
        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP,tangGiam) =>{
        let gioHangCapNhat = [... this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        if(tangGiam){
            gioHangCapNhat[index].soLuong += 1;
        }else{
            if(gioHangCapNhat[index].soLuong > 1){
                gioHangCapNhat[index].soLuong -= 1;
            }
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }
    render() {
        let tongSoLuong =   this.state.gioHang.reduce((tsl,spGH,index) =>{
            return tsl += spGH.soLuong;
        }, 0);

        return (

            <div className="container">
                <h3 className="text-center text-danger">Bài tập giỏ hàng</h3>
                <ModalGioHang tangGiamSoLuong={this.tangGiamSoLuong} gioHang={this.state.gioHang} xoaGioHang={this.xoaGioHang}/>
                <div className="text-right"><span className="text-danger" style ={{cursor: "pointer", fontSize:"17px", fontWeight:"bold"}}  data-toggle="modal" data-target="#modelId">giỏ hàng ({tongSoLuong})</span></div>
                <DanhSachSanPhamGioHang themGioHang = {this.themGioHang} mangSanPham ={PhoneData} xemChiTiet ={this.xemChiTiet}/>
            </div>
        )
    }
}

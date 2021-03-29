import React, { Children, Component } from "react";
import ChiTietSanPham from "./ChiTietSanPham";
import SanPhamGioHang from "./SanPhamGioHang";
import PhoneData from '../Data/PhoneData.json';

export default class DanhSachSanPhamGioHang extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             productDetail: PhoneData[0]
        }
    }
    xemChiTiet = (sanPham) =>{
        this.setState({
            productDetail: sanPham
        })
    }
    
  render() {
    const { mangSanPham, themGioHang } = this.props;

    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sanPham, index) => {

            return(
                <div className="col-4" key={index}>
                     <SanPhamGioHang  themGioHang={themGioHang} sanPham = {sanPham} xemChiTiet={this.xemChiTiet}/>
                </div>
               
            )
          })}

        </div>
        <div>
            <ChiTietSanPham sanPham = {this.state.productDetail}/>
        </div>
       
      </div>
    );
  }
}

import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
    xemChiTiet = () =>{
        this.props.xemChiTiet(this.props.sanPham)
    }
  render() {
    const { sanPham, themGioHang } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={sanPham.hinhAnh} alt={sanPham.hinhAnh} width={200} height={300}/>
        <div className="card-body">
          <h4 className="card-title">
            {sanPham.tenSP}
          </h4>
          <button className="btn btn-primary mr-3" onClick={this.xemChiTiet} data-toggle="collapse"
            href="#contentId"
            aria-expanded="false"
            aria-controls="contentId">Xem chi tiết</button>
          <button className="btn btn-danger" onClick={() => themGioHang(sanPham)}>Thêm giỏ hàng</button>

        </div>
      </div>
    );
  }
}

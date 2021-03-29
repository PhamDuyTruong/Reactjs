import React, { Component } from "react";

export default class ChiTietSanPham extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="container">
        <div className="collapse" id="contentId">
          <div className="row">
            <div className="col-5">
              <h2>{sanPham.tenSP}</h2>
              <img
                src={sanPham.hinhAnh}
                width={310}
                height={330}
                alt="Hình ảnh"
              />
            </div>
            <div className="col-7">
              <h2>Thông số kỹ thuật</h2>
              <table className="table">
                <tr>
                  <th>Hệ điều hành: </th>
                  <th>{sanPham.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Màn hình: </th>
                  <th>{sanPham.manHinh}</th>
                </tr>
                <tr>
                  <th>Camera Sau: </th>
                  <th>{sanPham.cameraSau}</th>
                </tr>
                <tr>
                  <th>Camera Trước: </th>
                  <th>{sanPham.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Ram: </th>
                  <th>{sanPham.ram}</th>
                </tr>
                <tr>
                  <th>Rom: </th>
                  <th>{sanPham.rom}</th>
                </tr>
                <tr>
                  <th>Gía bán: </th>
                  <th>{sanPham.giaBan.toLocaleString()}</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

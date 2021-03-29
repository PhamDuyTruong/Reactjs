import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { product } = this.props;

    if (!product) return null;
    return (
      <div className="row">
        <div className="col-sm-5">
          <h3 className="text-center">{product.tenSP}</h3>
          <img src={product.hinhAnh} width="100%" height="100%"></img>
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tr>
              <th>Hệ điều hành: </th>
              <th>{product.heDieuHanh}</th>
            </tr>
            <tr>
              <th>Màn hình: </th>
              <th>{product.manHinh}</th>
            </tr>
            <tr>
              <th>Camera Sau: </th>
              <th>{product.cameraSau}</th>
            </tr>
            <tr>
              <th>Camera Trước: </th>
              <th>{product.cameraTruoc}</th>
            </tr>
            <tr>
              <th>Ram: </th>
              <th>{product.ram}</th>
            </tr>
            <tr>
              <th>Rom: </th>
              <th>{product.rom}</th>
            </tr>
            <tr>
              <th>Gía bán: </th>
              <th>{product.giaBan.toLocaleString()}</th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

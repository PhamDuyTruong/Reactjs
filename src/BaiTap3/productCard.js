import React, { Component } from "react";

export default class productCard extends Component {
  render() {
      const tongTien =() =>{
          
      }
    return (

      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Gio hang</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
                <table className="table">
                      <thead>
                        <th>Mã SP</th>
                        <th>Tên SP</th>
                        <th>Hình ảnh</th>
                        <th>số lượng</th>
                        <th>Gía bán</th>
                        <th>Thành tiền</th>
                    </thead> 
                    <tbody>
                        {this.props.carts.map((item,index) =>{
                            return (
                                <tr key ={index}>
                                    <td>{item.maSP}</td>
                                    <td>{item.tenSP}</td>
                                    <td><img src ={item.hinhAnh} alt ="Hình ảnh" width={50} height={75}></img></td>
                                    <td>{item.soLuong}</td>
                                    <td>{item.giaBan.toLocaleString()}</td>
                                    <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                                </tr>
                            )
                        })}
                    </tbody> 
                    <tfoot>
                        <tr>
                            <td colSpan = "5"></td>
                            <td>Tổng tiền</td>
                            <td>{
                                this.props.carts.reduce((tongTien,spGioHang,index) =>{
                                    return tongTien += spGioHang.soLuong * spGioHang.giaBan
                                },0).toLocaleString()
                            }</td>
                        </tr>
                    </tfoot>          
                </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

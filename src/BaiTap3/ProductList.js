import React, { Component } from "react";
import ProductItem from "./ProductItem";
import ProductDetail from "./ProductDetail";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: null,
    };
  }

  getProduct= (product) => {
    // Lấy được product từ component productItem
    // setState lại cho productDetail bằng product mình vừa nhận
    console.log(product);
    this.setState({ productDetail: product });
  }

  addToCart =(product) => {
    // Trung gian để tiếp tục truyền product lên trên bài tập 3
    // console.log(product);
    this.props.addToCart(product);
  }

  render() {
    const { products } = this.props;
    return (
      <>
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-sm-4" key={product.maSP}>
                <ProductItem addToCart ={this.addToCart} product={product} getProduct={this.getProduct} />
              </div>
            );
          })}
        </div>
        <ProductDetail product={this.state.productDetail} />
      </>
    );
  }
}

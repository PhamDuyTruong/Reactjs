import React, { Component } from 'react'
import ProductCard from './productCard'
import ProductList from './ProductList'

export default class BaiTap3 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             products :[
                {
                  "maSP": 1,
                  "tenSP": "Vivo 850",
                  "manHinh": "AMOLED, 6.2\", Full HD+",
                  "heDieuHanh": "Android 9.0 (Pie)",
                  "cameraTruoc": "20 MP",
                  "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                  "ram": "4 GB",
                  "rom": "64 GB",
                  "giaBan": 5700000,
                  "hinhAnh": "./img/sp_vivo850.png"
                },
              
                {
                  "maSP": 2,
                  "tenSP": "SamSung Note 7",
                  "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
                  "heDieuHanh": "Android 9.0 (Pie); Flyme",
                  "cameraTruoc": "20 MP",
                  "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                  "ram": "4 GB",
                  "rom": "64 GB",
                  "giaBan": 7600000,
                  "hinhAnh": "./img/sp_note7.png"
                },
              
                {
                  "maSP": 3,
                  "tenSP": "Iphone XS Max",
                  "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
                  "heDieuHanh": "iOS 12",
                  "cameraSau": "Chính 12 MP & Phụ 12 MP",
                  "cameraTruoc": "7 MP",
                  "ram": "4 GB",
                  "rom": "64 GB",
                  "giaBan": 27000000,
                  "hinhAnh": "./img/sp_iphoneX.png"
                }
              ],
              carts:[]
        }
    }


    addToCart =(product) =>{
      console.log(product)
      // Khi setState với array hoặc object, ta cần truyền vào 1 array hoạc obj khác địa chỉ

      // Kiểm tra sản phẩm đã tồn tại hay chưa
      const index= this.state.carts.findIndex(sp => sp.maSP === product.maSP)

      if(index === -1){
        const carts = [...this.state.carts, {...product, soLuong : 1}]
        this.setState({carts})
      }else{
        // const carts = this.state.carts.map((item,idx) =>{
        //     if(index === idx){
        //       return {...item, soLuong:item.soLuong + 1}
        //     }
        //     return item
        // });

        const carts = [...this.state.carts];
        carts[index].soLuong += 1;
        this.setState({carts})
      }

     
    }

    componentDidUpdate(prevProps,prevState) {
      // Kiểm tra state giỏ hàng co thay đổi hay không
      if(this.state.carts !== prevState.carts){ // So sánh array là so sánh địa chỉ vùng nhớ
        localStorage.setItem("carts", JSON.stringify(this.state.carts))

      }
    }

    componentDidMount(){
      const carts = localStorage.getItem("carts");
      if(carts){
        this.setState({carts: JSON.parse(carts)})
      }
    }

    render() {
        return (
            <div className="container">
                 <div className="text-right"><button className="btn btn-success" style ={{cursor: "pointer", fontSize:"17px", fontWeight:"bold"}}  data-toggle="modal" data-target="#modelId">giỏ hàng</button></div>
                <ProductList addToCart={this.addToCart} products ={this.state.products}/>
                <ProductCard carts = {this.state.carts}/>
            </div>
        )
    }
}

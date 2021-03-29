import React, { Component } from 'react'

export default class StateClass extends Component {
    // State là object
    state ={
        // Demo 1
        isLogin: false,
        // Demo 2
        count : 0,
        doubleCount : 0
    };

    toggleLogin = () =>{

        // Không đươc thay đổi state trực tiếp 
        // this.state.isLogin = !this.state.isLogin;

        // Phải thay đổi state thông qua hàm setState
        this.setState({
            isLogin: !this.state.isLogin
        }, () =>{
            console.log(this.state.isLogin);
        })
        // Không thể lấy kết quả mới sau khi setState ngay đây, vì setState là hàm bất đồng bộ
    }

    handleIncrement =() =>{
        // Cách 1: Dùng callback ở tham số thứ 2
        // this.setState ({
        //     count: this.state.count + 1,
        // }, () =>{
        //     this.setState({
        //         doubleCount: this.state.count *2
        //     })
        // })

        //Cách 2: Nhận vào callback, đảm bảo state nhận vào luôn là mới nhất

        this.setState((state) =>{
            return {
                count: state.count + 1,
            }
        });

        this.setState((state) =>{
            return {
                doubleCount: state.count*2,
            }
        })
    }

    render() {
        // Demo 1
        // if(this.state.isLogin){
        //     return <div>
        //         <p>Đã Login</p>
        //         <button onClick ={this.toggleLogin}>Đăng xuất</button>
        //     </div>
        // }

        // return <div>
        //     <p>Chưa Login</p>
        //     <button onClick ={this.toggleLogin}>Đăng nhập</button>
        // </div>

        // Demo 2
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <p>doubleCount : {this.state.doubleCount}</p>

                <button onClick={this.handleIncrement}>Click</button>
            </div>
        )
    }
}

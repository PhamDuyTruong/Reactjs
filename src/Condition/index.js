import React, { Component } from 'react'

export default class ConditionClass extends Component {

    isLogin = false;

     toggleLogin =() =>{
        this.isLogin = !this.isLogin;
        console.log(this.isLogin)
     }


    render() {
        if(this.isLogin){
            return <div>
                <p>Đã Login</p>
                <button onClick ={this.toggleLogin}>Đăng xuất</button>
            </div>
        }

        return <div>
            <p>Chưa Login</p>
            <button onClick ={this.toggleLogin}>Đăng nhập</button>
        </div>
        // Sử dụng toán tử ba ngôi
        // return (
        //     <div>
        //         {this.isLogin ? <p>Đã Login</p> : <p>Chưa Login</p>}
        //     </div>
        // )
    }
}


function Condition (){
    let isLogin = false;

    return (
        <div>
            {isLogin ? <p>Đã Login</p> : <p>Chưa Login</p>}
        </div>
    )
}
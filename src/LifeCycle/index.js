import React, { Component } from 'react'
import Child from './Child'
export default class index extends Component {

    constructor(props) {
        super(props)
    
      console.log('Run constructor')
      this.state = {
          count: 0
      }
    }
    // Gọi API hoạc tương tác với DOM
    // setTimeout , setInterval và những tác vụ bất đồng bộ
    // Chỉ chạy một lần duy nhất sau khi render lần đầu 
    componentDidMount() {
        document.getElementById("demo").addEventListener("click",()=>{})


        console.log("Run componentDidMount")
    }
    //Khi state thay đổi, props thay đổi => component render lại => chạy componentDidupdate
    // Gọi API
    // tƯƠNG tác với DOM 
    // setState
    // Có thể lấy giá trị trước khi thay đổi của props,state
    componentDidUpdate(prevProps, prevState){
        console.log("Run componentDidUpdate", prevProps);
        console.log('Gía trị trước đó: ',prevState,prevProps)
        console.log('Gía trị hiện tại: ', this.state, this.props)
        // Khi setState trong componentDidUpdate cần phải cài đặt điều kiện dừng dựa vào việc so sánh props cũ với props mới hoặc state cũ vói state mới
        // ví dụ if(), tránh trường hơp bị lặp vô tận.
    }
    increase=() => {
        this.setState(state =>{
            return{
                count: state.count +1
            }
            
        })
    }
    // Chạy trước khi component bị huỷ, làm những tác vụ dọn dẹp chạy một lần
    componentWillUnmount(){
        document.getElementById("demo").removeEventListener("click", ()=>{})
    }
    render() {
        console.log("Run Render")
        return (
            <div>
                <h1 id="demo">Lifecycle</h1>
                <button onClick ={this.increase}>Click</button>
                <Child count ={this.state.count}/>
            </div>
        )
    }
}

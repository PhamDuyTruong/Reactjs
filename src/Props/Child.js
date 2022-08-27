import React, { Component } from 'react'
// Dữ liệu từ component cha truyền xuống sẽ nàm this.props
// Props là read-only, chỉ dùng để render ra giao diện, không được thay đôi
// Props thay đổi, component render lại
export default class Child extends Component {
    

    render() {
        console.log(this.props)
        return (
            <div>
                <p>
                    Message : {this.props.message}
                </p>
            </div>
        )
    }
}

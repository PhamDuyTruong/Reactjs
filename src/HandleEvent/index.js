import React, { Component } from 'react'

export default class EventClass extends Component {


    
    showMessage= () => {
        // Để có thể sử dụng this ở đây, thì phải sử dụng arrow function
        console.log(this)
        alert("Hello")
    }

    showFullName = (name) =>{
        alert(`Hello ${name}`)
    }

    handleChange =(event) =>{
        alert(event.target.value)
    }

    render() {
        return (
            <div>
                <button onClick={this.showMessage}>Click</button>
                <button onClick={() => this.showFullName("Trường")}>Click Name</button>
                <button onClick={this.showFullName.bind(null, "Trường")}>Click Name 2</button>

                <input onChange ={this.handleChange}/>

            </div>
        )
    }
}

import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             total : props.count *1000
        }
    }
    // Trường hợp state của component con phụ thuộc vào component cha
    componentDidUpdate(prevProps,prevState) {
        console.log("PrevProps: ", prevProps)
        console.log("prevstate: ",prevState)
        if(prevProps.count !==this.props.count){
            this.setState({total: this.props.count*1000})
        }
    }
    
    render() {
        return (
            <div>
                <p>Total: {this.state.total}</p>
            </div>
        )
    }
}

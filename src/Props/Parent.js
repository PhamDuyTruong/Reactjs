import React, { Component } from 'react'
import Child from './Child'
import Student from './Student'
import Card from './Card'
import SuperCard from './SuperCard'

export default class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             student :[
                 {id :1, name : "Trường", age: 18, score: 9},
                 {id :2, name : "Trí", age: 18, score: 8},
                 {id :3, name : "Thịnh", age: 20, score: 8.5},
                 {id :4, name : "Nghi", age: 13, score: 9}
             ],
             products:[
                {id :1, name : "Iphone 12", price: 30000000},
                {id :1, name : "Samsung S21", price : 25000000},
                {id :1, name : "Xiaomi W 11", price: 21000000},
             ]
           
        }
    }
    
    render() {
        return (
            <div className="container">
                {/** props-name = "value" */}
                <Child message ="Cybersoft"/>
                <Child message ="FE-62"/>
                <Child message = "Reactjs"/>
                <h1>Props Class</h1>
                {this.state.student.map(student =>{
                    return (
                        <Student  key={student.id} student ={student}/>
                    )
                })}

                <h1>Props Function</h1>
                <div className="row">
                 {this.state.student.map(student =>{
                    return (
                        <div className="col-sm-3" key={student.id}>
                            <Card  student ={student}/>
                        </div>
                    )
                })}
                </div>

                {/* Demo với props children */}

                <h1>Props Children</h1>
                <div className="row">
                {this.state.student.map(student =>{
                    return (
                        <div className="col-sm-3" key={student.id}>
                            <SuperCard title="Student" footer ={()=>(<button className="btn btn-primary">Chi tiết</button>)}>
                                <h3 className="text-secondary">{student.name}</h3>
                                <p className="text-success">{student.score}</p>
                                
                            </SuperCard>
                        </div>
                    )
                })}
                </div>

                <h1>Props Children (Product)</h1>
                <div className="row">
                {this.state.products.map(product =>{
                    return (
                        <div className="col-sm-4" key={product.id}>
                            {/* Kỹ thuật footer: render props ra giao diện */}
                            <SuperCard title="Product" footer ={()=>( <button className="btn btn-primary">Mua</button>)}>
                                <h3 className="text-secondary">{product.name}</h3>
                                <p className="text-success">{product.price}</p>
                               
                            </SuperCard>
                        </div>
                    )
                })}
                </div>

            </div>
        )
    }
}

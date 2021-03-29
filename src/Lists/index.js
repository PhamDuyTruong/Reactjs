import React, { Component } from 'react'

export default class ListClass extends Component {
    products = [
        {id:1, name:"Iphone 12" ,price: 30000000},
        {id:2, name:"Samsung S21" ,price: 25000000},
        {id:3, name:"Xiaomi" ,price: 11000000}
    ];


    render() {
        return (
            <div id="demo">
                {this.products.map((item,index) =>(
                  

                        //Hạn chế sứ dụng index làm key
                        <p key={item.id}>
                            {item.id} - {item.name} - {item.price}
                        </p>
                ))}
            </div>
        )
    }
}

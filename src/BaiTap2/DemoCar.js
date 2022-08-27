import React, { Component } from 'react'

export default class DemoCar extends Component {

    state = {
        imgUrl :"./img/imgRedCar.jpg",
    };

    changeCar = (color) =>{
        // switch (color){
        //     case 'red':
        //         this.setState({imgUrl :"./img/imgRedCar.jpg"})
        //         break;
        //     case 'silver':
        //         this.setState ({imgUrl :"./img/imgSilverCar.jpg"})
        //         break;
        //     case 'black':
        //         this.setState ({imgUrl :"./img/imgBlackCar.jpg"})
        //         break;
        //     default :
        //          break;
        // }

        const mapping = {
            red : "./img/imgRedCar.jpg",
            silver : "./img/imgSilverCar.jpg",
            black : "./img/imgBlackCar.jpg"
        }

        this.setState({
            imgUrl : mapping[color]
        })
        
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    
                    <div className="col-sm-6">
                        <h3>Please choose your favorite car's color</h3>
                        <img src ={this.state.imgUrl} width="450"  height="300" alt="Car"></img>
                    </div>
                    <div className="col-sm-6">
                        <h3>Change color</h3>
                        <div className="d-flex">
                            <button className="btn btn-danger mr-2 " onClick ={()=> this.changeCar('red')}>Red Color</button>
                            <button className="btn btn-secondary mr-2"  onClick ={()=> this.changeCar('silver')}>Silver color</button>
                            <button className="btn btn-dark " onClick ={()=> this.changeCar('black')}>Black color</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

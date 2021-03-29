import React from 'react'
import Header from './Header'
import Footer from './Footer'
import LaptopList from './LaptopList'
import PhoneList from './PhoneList'
import Slider from './Slider'


export default function DemoReact() {
    return (
        <div>
            <Header />
            <Slider />
            <PhoneList />
            <LaptopList />
            <Footer />
        </div>
    )
}

import React from 'react'

export default function DataBindingFunction() {

    let a = "Hello";
    let content ="Hello Cybersoft";

    const xuatThongTin = (name, age) =>{
        return(
            <div>
                <p>{name}</p>
                <p>{age}</p>
            </div>
        )
    }


    return (
        <div>
            <p>{a}</p>
            <p>{content}</p>
            {xuatThongTin('Trường', 18)}
        </div>
    )
}

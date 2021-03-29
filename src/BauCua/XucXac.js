import React from 'react'

export default function XucXac({xucXac, xuLyXucXac}) {
    
    return (
        <div className="p-5">
            {xucXac.map((item)=>(
                <img className="mx-2" width="100px" height ="100%" src={item.hinhAnh} alt="Xuc Xac"></img>
            ))}
            <img className="mt-5" width="100%" src="./img_baucua/soc.png" alt="Soc" style ={{cursor: "pointer"}} onClick={xuLyXucXac}></img>
        </div>
    )
}

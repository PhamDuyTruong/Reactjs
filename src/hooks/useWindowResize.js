import React, {useState, useEffect} from 'react'

export default function useWindowResize() {
    // Nếu useState nhận vào tham số là một function thì chỉ chạy 1 lần duy nhất sau khi render đỡ hao bộ nhớ
    const [size, setSize] = useState(() => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    });

    useEffect(() =>{
        window.addEventListener("resize",handleResize)
    }, [])

    const handleResize = () =>{
        const {innerWidth, innerHeight} = window;
        console.log(innerWidth, innerHeight);
        setSize({
            width: innerWidth,
            height: innerHeight
        })
    }
    // Custom hook sẽ return về data thay vì jsx
//     return [size.width, size.height] // return về array
     return {width: size.width, height: size.height} // return về object
}

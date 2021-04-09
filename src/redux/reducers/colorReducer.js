/**
 
 */


function colorReducer ( state = "red", action){
    switch (action.type){
        // Thường đặt thêm prefix tránh bị trùng lặp
        case "CHANGE_COLOR":{
            return action.payload
        }
        default:
            return state
     
    }
}


export default colorReducer
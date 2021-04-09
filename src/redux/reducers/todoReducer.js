 // Object chứa các state mặc định, LƯU địa chỉ của object
 import {ADD_TODO, DELETE_TODO, CHANGE_STATUS, FILTER_TODO} from "../constants/todoConstant"
 const initialState = {
    data: [
        {id: 1, name: "Play football", isCompleted: false},
        {id: 2, name: "do homework", isCompleted: false}
    ], 
    filter: "all",
    isLoading: false
 }
 
 function todoReducer (state = initialState, action){
        switch(action.type){
            case DELETE_TODO:{
                const {id} = action.payload;
                //C1: Dùng slices
                // const data = [... state.data] // clone array data
                // const index = data.findIndex(item => item.id === id);
                // data.slice(index,1);

                // return {... state, data} // Clone object state

                // C2: dùng filter
                const data = state.data.filter(item => item.id !== id); // Filter về một array hoàn toàn mới
                return {...state, data}
            };
            case CHANGE_STATUS:{
                const {id} = action.payload; // Lấy ra id của todo cần thay đổi

                // Cách 1:
                // const data = [...state.data] // Clone data array
                // const index = data.findIndex(item => item.id === id)

                // data[index].isCompleted = !data[index].isCompleted

                // return {...state, data}

                // Cách 2:
                const data = state.data.map(item =>{
                    if(item.id === id){
                        return {...item, isCompleted: !item.isCompleted}
                    }
                    return item;
                });

                return {...state, data}
            };
            case ADD_TODO:{
                const id = Math.floor(Math.random()*100);
                const todo ={name: action.payload.todo, isCompleted: false, id}
                const data = [...state.data, todo];
                return {...state, data}

            };
            case FILTER_TODO:{
                const { status } = action.payload;
                return {...state, filter : status}

            };

            default: 
            return state

        }
 }


 export default todoReducer
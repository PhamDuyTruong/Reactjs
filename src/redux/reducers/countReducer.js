// Nhận vào hai tham số
// Tham số thứ nhất là state và
// Tham số thứ hai là action để thay đổi state
// Action là 1 object và 1 property bắt buộc là type
// Type là hành động để reducer biết được cần phải thay đổi state
// Ex: action = {type: "TANG_BIEN_DEM"}
function countReducer(state = 0, action) {
    console.log(action)
    switch (action.type){
      case "TANG_BIEN_DEM":
        return state + 1;
      case "GIAM_BIEN_DEM":
        return state - 1;
      default:
        return state;
    }
  }

  export default countReducer
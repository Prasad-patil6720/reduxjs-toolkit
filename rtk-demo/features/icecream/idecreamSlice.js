const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    numOfIceCream:500
    
}


const iceCreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        orderIceCream:(state)=>{
            state.numOfIceCream--;
        },
        restockIceCream:(state,action)=>{
            state.numOfIceCream+=action.payload
        }
    }
})



module.exports.iceCreamReduce=iceCreamSlice.reducer
module.exports.iceCreamActions=iceCreamSlice.actions
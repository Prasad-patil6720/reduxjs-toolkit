const { createSlice } = require("@reduxjs/toolkit");

const initialState={
    count:0
}

const numSlice=createSlice({
    name:'number',
    initialState,
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        incrementByValue:(state,action)=>{
            state.count+=action.payload
        }
    }
})


module.exports.numberReducer=numSlice.reducer;
module.exports.numberActions=numSlice.actions;
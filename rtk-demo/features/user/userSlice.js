const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const initialState={
    loding:false,
    users:[],
    error:''
}
//*generated pending ,fulfilled and rejected action types
const fetchUsers=createAsyncThunk('user/fetchUsersNo',()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{ response.data.map((user)=> user.id)})
})

const userSlice=createSlice({
    name:'user',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loding=true;
        }),
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loding=false,
            state.users=action.payload,
            state.error='';
        }),
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loding=false;
            state.users=[];
            state.error=action.error.message
        })
    }
})

module.exports.userReducer=userSlice.reducer,
module.exports.fetchUsers=fetchUsers
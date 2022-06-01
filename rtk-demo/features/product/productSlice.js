const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");


const initialState={
    loding:false,
    products:[],
    error:''
}

const fetchProducts=createAsyncThunk('product/fetchProducts',()=>{
    axios.get('https://jsonplaceholder.typicode.com/postsfsd').then((response)=>response.data.map((product)=>product.title))
})

const productSlice=createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loding=true
        }),
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loding=false,
            state.products=action.payload,
            state.error=''
        }),
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loding=false,
            state.products=[],
            state.error=action.error.message
        })
    }
})



module.exports.productReducer=productSlice.reducer;
module.exports.fetchProducts=fetchProducts;
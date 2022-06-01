const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit');
const { default: logger } = require('redux-logger');
const { cakeReducer } = require('../features/cake/cakeSlice');
const { iceCreamReduce } = require('../features/icecream/idecreamSlice');
const { numberReducer } = require('../features/increment/incrementSlice');
const { productReducer } = require('../features/product/productSlice');
const { userReducer } = require('../features/user/userSlice');


const store=configureStore({
    reducer:{
        // cake:cakeReducer,
        // number:numberReducer,
        // icecream:iceCreamReduce,
        // user:userReducer
        product:productReducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(logger)
    }
})


module.exports=store;
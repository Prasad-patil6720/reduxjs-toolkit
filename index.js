const store = require("./rtk-demo/app/store");
const { iceCreamActions } = require("./rtk-demo/features/icecream/idecreamSlice");
const { numberActions } = require("./rtk-demo/features/increment/incrementSlice");
const { fetchProducts } = require("./rtk-demo/features/product/productSlice");
// const { fetchUsers } = require("./rtk-demo/features/user/userSlice");
// const { cakeActions } = require("./rtk-demo/features/cake/cakeSlice");




// console.log('initial state',store.getState());
// const unsubscirbe=store.subscribe(()=>{
//     console.log('update state',store.getState());
// })

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.restockCake(3000));



// store.dispatch(numberActions.increment());
// store.dispatch(numberActions.increment());
// store.dispatch(numberActions.increment());



// store.dispatch(numberActions.decrement());
// store.dispatch(numberActions.decrement());


// store.dispatch(iceCreamActions.orderIceCream());
// store.dispatch(iceCreamActions.orderIceCream());


// store.dispatch(iceCreamActions.restockIceCream(56));


// store.dispatch(fetchUsers())
store.dispatch(fetchProducts())

// store.dispatch(numberActions.incrementByValue(4999));
// unsubscirbe();
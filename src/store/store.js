import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter.js";
import cartReducer from "./slices/Card.js";
import language from "./slices/language.js";


export default configureStore({
    reducer:{
        counter: counter,
        cart: cartReducer,
        language
    }
})

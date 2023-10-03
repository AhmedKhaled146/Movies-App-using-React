import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/Card.js";
import language from "./slices/language.js";


export default configureStore({
    reducer:{
        cart: cartReducer,
        language
    }
})

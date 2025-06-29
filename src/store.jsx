import { configureStore } from "@reduxjs/toolkit";
import sliceReducers from './userSlice'

const store = configureStore({
    reducer: {
        todo: sliceReducers
    }
})

export default store;
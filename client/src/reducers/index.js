import {combineReducers, configureStore} from "@reduxjs/toolkit"
import fileSlice from "./fileSlice"
import userSlice from "./userSlice"


const rootReducer = combineReducers({
    file: fileSlice,
    user: userSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})
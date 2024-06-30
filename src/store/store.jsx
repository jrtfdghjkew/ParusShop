import {combineReducers, configureStore} from "@reduxjs/toolkit";




const rooutReducer = combineReducers({
})

export const setupStore = () => {
    return configureStore({
        reducer: rooutReducer
    })
}


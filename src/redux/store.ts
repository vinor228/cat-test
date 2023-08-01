import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk';
import counterReducer from "./cats/catSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: [thunkMiddleware],

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
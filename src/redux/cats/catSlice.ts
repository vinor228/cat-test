import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import catsOperation from "./catsOperation";

interface CounterState {
    cats: []
    breedName: string
}

const initialState: CounterState = {
    cats: [],
    breedName: ''
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    extraReducers : (builder) =>  {
        builder.addCase(catsOperation.getCatsByBreed.pending , (state, action) =>{
            return state
        })
        builder.addCase(catsOperation.getCatsByBreed.fulfilled , (state, action) =>{
            console.log(action.payload)
            state.cats = action.payload
            return state
        })
        builder.addCase(catsOperation.getCatsByBreed.rejected , (state, action) =>{
            return state
        })
    },
    reducers: {
    },
})


export const selectCount = (state: RootState) => state.counter.cats

export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: (state, action) => {
            return state + 1
        },
        decrement: (state, action) => {
            return state - 1
        }
    }
    
})
console.log(CounterSlice.actions)
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer; 
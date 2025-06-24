import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value: {
        name: "Scott",
        age:  "17" 
    }
}

const slice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {
    setUserValues: (state, action) => {
        state.value = action.payload
    }}
})

export default slice.reducer;
export const {setUserValues} = slice.actions; 
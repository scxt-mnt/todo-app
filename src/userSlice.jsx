import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: []
}

const slice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const lastUser = state.value[state.value.length - 1]
            const newid = lastUser ? lastUser.id + 1 : 1

            const newUser = {
                id: newid,
                ...action.payload
            }
            state.value.push(newUser)
        },
        deleteUser: (state, action) => {
            state.value = state.value.filter(users => users.id !== action.payload)
        },
        updateEmail: (state, action) => {
            const { id, email } = action.payload
            state.value = state.value.map(user =>
                user.id === id ? { ...user, email } : False)
        }
    }
})

export default slice.reducer;
export const { addUser, deleteUser, updateEmail } = slice.actions; 
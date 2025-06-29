import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: []
}

const slice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const lastTodos = state.value[state.value.length - 1];
            const check = lastTodos ? lastTodos.id + 1 : 1;

            const newTodos = {
                id: check,
                ...action.payload
            }


            state.value.push(newTodos)
        },
        deleteTodos: (state, action) => {
          state.value = state.value.filter(state => state.id !== action.payload.id)
        },
        updateTodos: (state, action) => {
            const {id, todo} = action.payload
            state.value = state.value.map((update) =>
                 update.id === id ? {...update, todo} : update )
        }
    }
})

export default slice.reducer;
export const { addTodos, deleteTodos, updateTodos } = slice.actions;
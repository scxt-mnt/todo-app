import { createSlice } from '@reduxjs/toolkit'
const saveData = localStorage.getItem('todos');
const translate = JSON.parse(saveData);

const initialState = {
    value: translate || []
}

const slice = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const count = state.value[state.value.length - 1];
            const check = count ? count.id + 1 : 1 
            
            const binds = {
                id : check,
                ...action.payload 
            }

            state.value.push(binds)

            localStorage.setItem("todos", JSON.stringify(state.value));
        },
        deleteTodos: (state, action) => {
          state.value = state.value.filter(state => state.id !== action.payload.id)
          localStorage.setItem("todos", JSON.stringify(state.value))
        },
        updateTodos: (state, action) => {
            const {id, todo} = action.payload
            state.value = state.value.map((update) =>
                 update.id === id ? {...update, todo} : update )
            localStorage.setItem("todos", JSON.stringify(state.value));
        }
    }
})

export default slice.reducer;
export const { addTodos, deleteTodos, updateTodos } = slice.actions;
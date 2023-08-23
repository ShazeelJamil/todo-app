import { createSlice } from "@reduxjs/toolkit";



export const TodoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: []
    },
    reducers: {
        setTodos: (state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {

            const title = (JSON.stringify(action.payload['title'])).trim()
            const description = (JSON.stringify(action.payload['description'])).trim()

            var tem = [];
            for (let i = 0; i < state.todos.length; i++) {
                const todo = state.todos[i];
                const tempTodo = todo.filter(todoItem => {
                    return JSON.stringify(todoItem.title) !== title || JSON.stringify(todoItem.description) !== description;
                })
                if (tempTodo.length !== 0) tem.push(tempTodo)                
            }
            state.todos = tem;
        }
    }
})

export const { setTodos, deleteTodo } = TodoSlice.actions
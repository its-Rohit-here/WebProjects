import {createContext,useContext} from 'react';
// usecontext use for smaller project
export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: 'Learn React',
        completed: false
    }],
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});



export const useTodo = () => {
    return useContext(TodoContext);
    }

export const TodoProvider = TodoContext.Provider;
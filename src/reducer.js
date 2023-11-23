

export const importData = {
    todos: []
}

export const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload.form]
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: [...state.todos.filter(item=>item.id !== action.payload.id)]
            }

        default:
            break;
    }
}
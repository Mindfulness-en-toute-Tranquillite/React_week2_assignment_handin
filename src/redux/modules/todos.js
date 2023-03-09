// Action value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const ISDONE_TODO = "ISDONE_TODO";
const NOTDONE_TODO = "NOTDONE_TODO";
const GET_TODO_BY_ID = "getTodoByID";

// Action Creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload };
};

export const deleteTodo = (id) => {
    return { type: DELETE_TODO, payload: id };
};

export const isDoneTodo = (isDone) => {
    return { type: ISDONE_TODO, payload: isDone };
};

export const notDoneTodo = (isDone) => {
    return { type: NOTDONE_TODO, payload: isDone};
};

export const getTodoById = (payload) => {
    return {type: GET_TODO_BY_ID, payload};
};
// 초기값
const initialState = {
    todos: [
        {
            id:0,
            title: "제목",
            content: "내용",
            isDone: false,
        },
        {
            id:1,
            title: "제목",
            content: "내용",
            isDone: true,
        },

        
    ],

    todo: {
        id:0,
        title: "", 
        content: "",
        isDone: true,
    }
};

// Reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
            ...state,
            todos: [...state.todos, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload)
            };
        case ISDONE_TODO:
            return {
            ...state,
            todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    };
                }
                return todo;
                })
            };
        case NOTDONE_TODO:
            return {
            ...state,
            todos: state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isDone: !todo.isDone
                    };
                }
                return todo;
                })
            };
        case GET_TODO_BY_ID: 
            return {
                ...state,
                todo: state.todos.find((todo) => {
                    return todo.id == action.payload;
                })
            };
        default:
            return state;
    }
};




export default todos;
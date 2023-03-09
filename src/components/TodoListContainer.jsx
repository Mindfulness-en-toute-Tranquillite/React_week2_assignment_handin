import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteTodo } from '../redux/modules/todos';
import { isDoneTodo } from '../redux/modules/todos';
import { Link } from 'react-router-dom';

function TodoListContainer() {
    const { todos } = useSelector((state)=>state.todos)

    const dispatch = useDispatch();

    const DeleteTodoListButtonHandler = (id) => {
        dispatch(deleteTodo(id));
    };

    const isDoneButtonHandler = (id) => {
        dispatch(isDoneTodo(id));
    };



    return (
        <StTodos>
            {todos.map((todo)=> {
                if (todo.isDone === false) {
                    return (
                        <StTodo key={todo.id}>
                            <StDetailButton>
                            <StLink to={`/${todo.id}`} key={todo.id}>
                                <div>상세보기</div>
                            </StLink>
                            </StDetailButton>
                            
                            <h3>
                                {todo.title}
                            </h3>
                            <div>
                                {todo.content}
                            </div>
                        <StButtonWrapper>
                            <StButton 
                            onClick={() => 
                                DeleteTodoListButtonHandler(todo.id)
                            }>
                            삭제</StButton>
                            <StButton onClick={() => 
                                isDoneButtonHandler(todo.id)
                            }>
                            완료
                            </StButton>
                        </StButtonWrapper>
                    </StTodo>
                    )
                }

            })}
        </StTodos>
    );
};

export default TodoListContainer

const StTodos = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    max-width: 100%;
`;

const StTodo = styled.div`
    border: 1px solid black;
    border-radius: 12px;
    width: 20%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
`;

const StButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 12px;
`

const StButton = styled.button`
    border: 1px solid black;
    border-radius: 12px;
    background-color: LavenderBlush;
    width: 70px;
    height: 25px;
    cursor: pointer;
    margin-left: 4px;
`
const StDetailButton = styled.button`
    border: 1px solid MintCream;
    border-radius: 12px;
    background-color: WhiteSmoke;
    cursor: pointer;
`
const StLink = styled(Link)`
  text-decoration: none;
`;
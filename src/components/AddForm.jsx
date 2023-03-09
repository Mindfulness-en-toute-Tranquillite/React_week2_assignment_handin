import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/modules/todos';
import styled from 'styled-components';

function AddForm() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (title === "") return;
        dispatch(
            addTodo({
                id: todos.length + 1,
                title,
                content,
                isDone: false
            })
        );
        setTitle("");
        setContent("");
    };
    
    return (
        <StFormContainer>
            <form onSubmit={onSubmitHandler}>
                <label>제목</label>
                <StInput
                type="text"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
                />
            </form>
            <form onSubmit={onSubmitHandler}>
                <label>내용</label>
                <StInput
                type="text"
                value={content}
                onChange={(event)=>{
                    setContent(event.target.value)
                }}
                />
                <StButton>추가하기</StButton>
            </form>
        </StFormContainer>
    );
};

export default AddForm

const StFormContainer = styled.div`
    display: felx;
    gap: 24px;
    padding: 30px;
    border: 1px solid lightgray;
    border-radius: 12px;
    background-color: AliceBlue;
`;

const StInput = styled.input`
    border: 1px solid black;
    border-radius: 12px;
    margin: 0 24px;
    width: 250px;
    height: 35px;
    outline: none;
    padding:0 10px;
`;

const StButton = styled.button`
    border: 1px solid black;
    border-radius: 12px;
    background-color: lavender;
    width: 120px;
    height: 25px;
    cursor: pointer;
`
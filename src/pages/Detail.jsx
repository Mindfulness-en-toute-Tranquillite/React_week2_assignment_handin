import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getTodoById } from '../redux/modules/todos';
import { useEffect } from 'react';
import styled from 'styled-components';

function Detail() {
        const navigate = useNavigate();
        const todo = useSelector((state)=> state.todos.todo)
        console.log(todo)
        const dispatch = useDispatch();
        const { id } = useParams();
        console.log(typeof id)

        useEffect(()=> {
            dispatch(getTodoById(id))
        }, [id]);
        
    return (
    <div>
        <div>
            <StWrapper>
                <div>
                    ID : {id}
                </div>
                <StHomeButton 
                onClick={() => {
                    navigate('/');
                }}>
                이전으로
                </StHomeButton>
            <br />
                <h3>
                {todo?.title}
                </h3>
                <br />
                {todo?.content}
            </StWrapper>
        </div>
        
    </div>
    )
}

export default Detail

const StWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 12px;
    margin: auto;
`;

const StHomeButton = styled.button`
    border: 1px solid MintCream;
    border-radius: 12px;
    background-color: WhiteSmoke;
    cursor: pointer;
`
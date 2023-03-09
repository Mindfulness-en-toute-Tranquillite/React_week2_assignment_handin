import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
    <>
        <StHeader>
            My Todo List 
            <StSpan>react</StSpan>
        </StHeader>
    </>
    )
}

export default Header

const StHeader = styled.h1`
`
const StSpan = styled.span`
    display: flex;
    align-items: right;
    justify-content: right;
    font-size: smaller;
`
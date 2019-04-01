import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    background: #f50057;
    outline: none;
    border: none;
    color: #fff;
    width: 440px;
    height: 51px;
    font-family: Arial, Helvetica, sans-serif
    font-size: 10.1016pt;
    cursor: pointer;
`

const Button = ({ onClick, name = 'CLICK ME' }) => {
    return (
        <React.Fragment>
            <Btn onClick={() => console.log(123)}>{name}</Btn>
        </React.Fragment>
    )
}

export default Button;
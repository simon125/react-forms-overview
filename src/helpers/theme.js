import styled from 'styled-components';

export const AppContainer = styled.div`
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;


export const SubmitButton = styled.button`
    background: #f50057;
    outline: none;
    border: none;
    color: #fff;
    min-width: 440px;
    width: auto;
    height: 51px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10.1016pt;
    cursor: pointer;
    text-transform: uppercase;
    margin-bottom: 40px;
`;
export const FormInput = styled.input`
    margin-bottom: 40px;
    outline: none; 
    width: 440px;
    height: 42px;
    font-family: Arial, Helvetica, sans-serif;
    color: #666666;
    padding-left: 10px;
    &::-webkit-input-placeholder {
        color: #999;
        text-transform: uppercase;
    }
`;

export const Label = styled.label`
    display: block;
    text-transform: uppercase;
    margin-bottom: 25px;
`;

export const Title = styled.h2`
    margin-bottom: 30px;
    font-family: 'Assistant', sans-serif;
    font-weight: 300;
    letter-spacing: 1px;
    font-size: 40px;
    color: rgba(255, 255, 255, 255);
    text-align: center;  
    text-transform: uppercase;
`;
export const LinkButton = styled.button`
    background: transparent;
    margin-bottom: 20px;
    border: none;
    font-size: 16px;
    color: rgba(255, 152, 0, 255);
    cursor: pointer;
    outline: none;
    &:hover {
        text-decoration: underline;
    }
`;
export const Checkbox = styled.input`
    margin-right: 5px;
    transform: scale(1.15);
`;

export const SpacingContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
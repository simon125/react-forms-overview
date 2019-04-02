import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 200px; //develop
    background: #322832;
    width: min-content;
    padding: 25px;
    -webkit-box-shadow: 15px 20px 52px -4px rgba(0,0,0,0.75);
    -moz-box-shadow: 15px 20px 52px -4px rgba(0,0,0,0.75);
    box-shadow: 15px 20px 52px -4px rgba(0,0,0,0.75);
`

const FormContainer = (WrappedForm) => {

    return (props) => {
        return (
            <Container>
                <WrappedForm {...props} />
            </Container>
        )
    }
}

export default FormContainer;
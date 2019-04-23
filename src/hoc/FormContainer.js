import React from 'react';
import { Container } from '../helpers/theme'


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
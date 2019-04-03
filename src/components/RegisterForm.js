import React, { useState } from 'react';
import FormContainer from '../hoc/FormContainer';
import { SubmitButton, FormInput, Label, Title, LinkButton, Checkbox } from '../helpers/theme';


const RegisterForm = () => {
    return (
        <React.Fragment>
            <Title>
                Register Form
             </Title>
            <Label>
                Your Name
             </Label>
            <FormInput placeholder="Name" />
            <Label>
                Your Email address
             </Label>
            <FormInput placeholder="Email address" />
            <Label>
                Create Your password
             </Label>
            <FormInput placeholder="password" />

            <SubmitButton type="submit">Sign up</SubmitButton>
            <Checkbox type="checkbox" name="termsOfService" id="termsOfService" />
            I agree to the&nbsp;
            <LinkButton type="button">Terms of Service</LinkButton>
        </React.Fragment>
    )
}


export default FormContainer(RegisterForm);

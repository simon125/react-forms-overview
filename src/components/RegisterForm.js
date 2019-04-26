import React, { useState } from 'react';
import { Formik } from 'formik';
import FormContainer from '../hoc/FormContainer';
import { SubmitButton, FormInput, Label, Title, LinkButton, Checkbox, CheckboxLabel } from '../helpers/theme';


const RegisterForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: ''
    });

    return (
        <React.Fragment>
            <Title>
                Register Form
             </Title>
            <Formik
                initialValues={formState}
                onSubmit={(values) => {
                    const newFormState = { ...values }
                    setFormState(newFormState);
                }}
                render={
                    ({ values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting, }) => (
                            <form onSubmit={handleSubmit}>
                                <Label>Your Name</Label>
                                <FormInput
                                    autoComplete="off"
                                    value={values.name}
                                    onChange={handleChange}
                                    name="name"
                                    placeholder="Name" />
                                <Label>Your Email address</Label>
                                <FormInput
                                    autoComplete="off"
                                    value={values.email}
                                    onChange={handleChange}
                                    name="email"
                                    placeholder="Email address" />
                                <Label>Create Your password</Label>
                                <FormInput
                                    autoComplete="off"
                                    value={values.password}
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    placeholder="password" />

                                <SubmitButton type="submit">Sign up</SubmitButton>
                            </form>
                        )
                } />
            <Checkbox type="checkbox" name="termsOfService" id="termsOfService" />
            <CheckboxLabel htmlFor="termsOfService"> I agree to the</CheckboxLabel>&nbsp;
            <LinkButton
                type="button">Terms of Service</LinkButton>
        </React.Fragment>
    )
}

export default FormContainer(RegisterForm);

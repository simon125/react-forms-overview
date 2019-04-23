import React, { useState } from 'react';
import { Formik } from 'formik';
import FormContainer from '../hoc/FormContainer';
import { SubmitButton, FormInput, Label, Title, LinkButton, Checkbox, SpacingContainer } from '../helpers/theme';


const LoginForm = () => {

    const [formState, setFormState] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    return (
        <React.Fragment>
            <Title>
                LOGIN FORM
            </Title>
            <Formik
                initialValues={formState}
                onSubmit={(values) => {
                    setFormState({ ...values });
                }}
                render={({
                    values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting
                }) => (
                        <form onSubmit={handleSubmit}>
                            <Label htmlFor="email">USER NAME OR EMAIL</Label>
                            <FormInput
                                id="email"
                                placeholder="EMAIL"
                                autoComplete="off"
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                            <Label htmlFor="password">PASSWORD</Label>
                            <FormInput
                                id="password"
                                placeholder="PASSWORD"
                                autoComplete="off"
                                name="password"
                                type='password'
                                onChange={handleChange}
                                value={values.password}
                            />
                            <SubmitButton type="submit">LOGIN IN</SubmitButton>
                            <SpacingContainer>
                                <span>
                                    <Checkbox type="checkbox" name="rememberMe" id="rememberMe" value={values.rememberMe} />
                                    <label htmlFor="rememberMe"> Remember Me</label>
                                </span>
                                <LinkButton type="button">
                                    Forgot Password?
                            </LinkButton>
                            </SpacingContainer>
                        </form>

                    )}
            />

        </React.Fragment>
    )
}

export default FormContainer(LoginForm);

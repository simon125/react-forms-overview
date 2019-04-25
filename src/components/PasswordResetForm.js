import React, { useState } from 'react';
import { Formik } from 'formik';
import FormContainer from '../hoc/FormContainer';
import { SubmitButton, FormInput, Label, Title, LinkButton } from '../helpers/theme';


const PasswordResetForm = () => {

    const [formState, setFormState] = useState({
        email: ''
    })

    return (
        <React.Fragment>
            <Title>PASSWORD RESET</Title>
            <Formik
                initialValues={formState}
                onSubmit={values => {
                    setFormState({ ...values });
                }}
                validate={values => {
                    const errors = {};
                    if(values.email.trim() === ''){
                        errors.content = 'Required!'
                    }
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
                            <Label htmlFor="email">Email</Label>
                            <FormInput
                                id="email"
                                placeholder="YOUR EMAIL"
                                autoComplete="off"
                                name="email"
                                onChange={handleChange}
                                value={values.content}
                            />
                            <SubmitButton type="submit">Reset Password</SubmitButton>
                        </form>

                    )}
            />
            <LinkButton type="button">
                Other problems logging in?
            </LinkButton>
        </React.Fragment>
    )

}


export default FormContainer(PasswordResetForm);
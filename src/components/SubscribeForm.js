import React, { useState } from 'react';
import { Formik } from 'formik';
import { Title, SpacingContainer, FormInputLarge, SubmitButtonLarge, SubscribeContainer } from '../helpers/theme';




const SubscribeForm = () => {

    const [formState, setFormState] = useState({ email: '' })

    return (
        <SubscribeContainer>
            <Title>SUBSCRIBE FORM</Title>
            <Formik
                initialValues={formState}
                onSubmit={(values) => setFormState({ ...values })}
                render={({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting, }) => (
                        <form onSubmit={handleSubmit}>
                            <SpacingContainer>
                                <FormInputLarge
                                    autoComplete="off"
                                    value={values.email}
                                    onChange={handleChange}
                                    name="email"
                                    placeholder="YOUR EMAIL HERE" />

                                <SubmitButtonLarge type="submit">SUBSCRIBE ME</SubmitButtonLarge>
                            </SpacingContainer>
                        </form>
                    )}
            />
        </SubscribeContainer>
    )
}


export default SubscribeForm;
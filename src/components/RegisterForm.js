import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormContainer from "../hoc/FormContainer";
import {
  SubmitButton,
  FormInput,
  Label,
  Title,
  LinkButton,
  Checkbox,
  CheckboxLabel
} from "../helpers/theme";

const RegisterForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: ""
  });

  return (
    <React.Fragment>
      <Title>Register Form</Title>
      <Formik
        initialValues={{ ...formState }}
        onSubmit={values => {
          //   const newFormState = { ...values };
          //   setFormState(newFormState);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .min(2, "Too Short!")
            .max(15, "Too Long!")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Required"),
          password: Yup.string()
            .min(2, "Too Short!")
            .max(15, "Too Long!")
            .required("Required")
        })}
        render={({ values, errors, touched, handleChange }) => (
          <Form>
            <Label>Your Name</Label>
            <FormInput
              isInvalid={errors.name && touched.name ? true : false}
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              name="name"
              placeholder="Name"
            />
            <Label>Your Email address</Label>
            <FormInput
              isInvalid={touched.email && errors.email ? true : false}
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              name="email"
              placeholder="Email address"
            />
            <Label>Create Your password</Label>
            <FormInput
              isInvalid={errors.password && touched.password ? true : false}
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="password"
            />

            <SubmitButton type="submit">Sign up</SubmitButton>
          </Form>
        )}
      />
      <Checkbox type="checkbox" name="termsOfService" id="termsOfService" />
      <CheckboxLabel htmlFor="termsOfService"> I agree to the</CheckboxLabel>
      &nbsp;
      <LinkButton type="button">Terms of Service</LinkButton>
    </React.Fragment>
  );
};

export default FormContainer(RegisterForm);

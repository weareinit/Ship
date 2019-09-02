import * as yup from "yup";

const LoginValidation = yup.object().shape({
  email: yup
    .string("Email must be a string!")
    .email("Email is not Valid!")
    .required("Email is required!"),
  password: yup
    .string("Password must be a string!")
    .min(6, "Password is too short!")
    .required("Password is required!")
});

const LoginInitialValues = {
  email: "",
  password: ""
};

export default { LoginValidation, LoginInitialValues };

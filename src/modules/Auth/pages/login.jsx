import React from "react";
import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { toast } from "react-toastify";
import { object, string } from "yup";
import axiosInstance from "../../../axios/Axios";
import { useNavigate } from "react-router-dom";

const loginSchema = object({
  email: string().email().required(),
  password: string().min(8).max(20).required(),
});
const LoginPage = () => {
  const navigate = useNavigate();
  const loginAdminCall = async (data) => {
    return axiosInstance.post("/login/login", data);
  };
  const handleAdminLogin = async (data) => {
    try {
      const response = await loginAdminCall(data);
      toast.success(response.data.message);
      console.log(response);
      if (response.status==200) {
        navigate("/login/dashboard");
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => handleAdminLogin(values),
  });
 

  return (
    <>
      <FormikProvider value={formik}>
        <form action="">
          <Field name="email" />
          <ErrorMessage name="email" />
          <br />
          <br />
          <Field name="password" />
          <ErrorMessage name="password" />
          <br />
          <br />
          <button type="submit" onClick={formik.handleSubmit}>
            login
          </button>
        </form>
      </FormikProvider>
    </>
  );
};

export default LoginPage;

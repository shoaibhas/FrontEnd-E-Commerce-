import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import axiosInstance from "../../../axios/Axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const AdminUpdateSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  password: string().min(8).max(200),
});
const UpdateAdminPage = () => {
  const { admin_id } = useParams();
  const getAdmin = async (id) => {
    return axiosInstance.get("/login/register/" + id);
  };

  const fetchData = async () => {
    try {
      const response = await getAdmin(admin_id);
      //   console.log(admin_id);
      console.log(response.data.data);
      //   delete response.data.data.password;
      formik.setValues(response.data.data);
      //   formik.setValues('');
      //   toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message);
      //   console.log(error.response?.data?.message);
    }
  };
  const UpdateAdmin = async (data) => {
    return axiosInstance.put("/login/register/" + admin_id, data);
  };
  const handleAdminUpdate = async (data) => {
    try {
      const response = await UpdateAdmin(data);
      console.log(response.data.message);
      toast.success(response.data.message);
      formik.resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error.response?.data?.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: AdminUpdateSchema,
    onSubmit: (values) => handleAdminUpdate(values),
  });

  useEffect(() => {
    fetchData();
  }, [admin_id]);
  // formik.resetForm()
  return (
    <>
      <FormikProvider value={formik}>
        <form>
          {/* <label>first Name</label> */}
          <Field name="firstName" placeholder="first name" />
          <ErrorMessage name="firstName" />
          <br />
          <br />
          {/* <label>last Name</label> */}
          <Field name="lastName" placeholder="last name" />
          <ErrorMessage name="lastName" />
          <br />
          <br />
          {/* <label>email</label> */}
          <Field name="email" placeholder="email" />
          <ErrorMessage name="email" />
          <br />
          <br />
          {/* <label>password</label> */}
          <Field name="password" placeholder="password" />
          <ErrorMessage name="password" />
          <br />
          <br />
          <button type="submit" onClick={formik.handleSubmit}>
            Update
          </button>
        </form>
      </FormikProvider>
    </>
  );
};
export default UpdateAdminPage;

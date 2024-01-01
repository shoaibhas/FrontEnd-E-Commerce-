import { ErrorMessage, Field, FormikProvider, useFormik } from "formik";
import { object, string } from "yup";
import axiosInstance from "../../../axios/Axios";
import { toast } from "react-toastify";

const AdminSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email().required(),
  password: string().required().min(8).max(20),
});
const CreateAdminPage = () => {
  const createAdmin = async (shoaib) => {
    return axiosInstance.post("/login/register", shoaib);
  };
  const handleAdmin = async (hassan) => {
    try {
      const response = await createAdmin(hassan);
      console.log(response.data.message);
      toast.success(response.data.message);
      formik.resetForm();
    } catch (error) {
      toast.error(error.response?.data?.message);
      // formik.resetForm()
    }
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: AdminSchema,
    onSubmit: (values) => handleAdmin(values),
  });
  // formik.resetForm()
  return (
    <>
      <FormikProvider value={formik}>
        <br /><br />
        <form >
          {/* <label>First Name</label> */}
          <Field name="firstName" placeholder="First Name" />
          <ErrorMessage name="firstName" />
          <br />
          <br />
          {/* <label>Last Name</label> */}
          <Field name="lastName" placeholder="Last Name"/>
          <ErrorMessage name="lastName" />
          <br />
          <br />
          {/* <label>Email</label> */}
          <Field name="email" placeholder="Email"/>
          <ErrorMessage name="email" />
          <br />
          <br />
          {/* <label>Password</label> */}
          <Field name="password" placeholder="Password"/>
          <ErrorMessage name="password" />
          <br />
          <br />
          <button type="submit" onClick={formik.handleSubmit}>
            Create
          </button>
        </form>
      </FormikProvider>
    </>
  );
};
export default CreateAdminPage;

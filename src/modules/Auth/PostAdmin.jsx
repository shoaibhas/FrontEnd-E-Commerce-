import React, { useState } from "react";
import axiosInstance from "../../axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PostAdmin = () => {
  const data = { firstName: ``, lastName: ``, email: ``, password: `` };
  const [inputData1, setInputData] = useState(data);
  const [message, setMessage] = useState("");
  const handleData = (e) => {
    setInputData({ ...inputData1, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login/register", inputData1);
      console.log(response);
      if (response.status == 200) {
        setMessage(response.data.message);
        // console.log(response.data.error);
        setInputData({ firstName: ``, lastName: "", email: ``, password: `` });
        toast.info("Admin Add");
      }
      
    //   console.log(response.error);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
        toast.info(` not Register`);
      }
    }
  };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post(
//         "/login/register",
//         inputData1
//       );
//       console.log(response);
//       if (response.status == 200) {
//         setMessage(response.data.message);
//         setInputData({ firstName: "", lastName: "", email: "", password: "" });
//         toast.info('User Registered')
//       }
//     } catch (error) {
//       if (error.response) {
//         setMessage(error.response.data.message);
//         toast.info('User not Registered')

//       }
//     //   else if (error.request) {
//     //     setMessage('No response received from the server.');
//     //   } else {
//     //     setMessage('An unexpected error occurred.');
//     //   }
//     }
 
//   };
  return (
    <>
      <div><h2>{message}</h2></div>
      <label>fName</label>
      <input
        type="text"
        name="firstName"
        value={inputData1.firstName}
        onChange={handleData}
      />
      <br />
      <label>lName</label>
      <input
        type="text"
        name="lastName"
        value={inputData1.lastName}
        onChange={handleData}
      />
      <br />
      <label>email</label>
      <input
        type="text"
        name="email"
        value={inputData1.email}
        onChange={handleData}
      />
      <br />
      <label>password</label>
      <input
        type="text"
        name="password"
        value={inputData1.password}
        onChange={handleData}
      />
      {/* <br /> */}
      <button onClick={handleSubmit}>Add</button>
      <ToastContainer />
    </>
  );
};

export default PostAdmin;

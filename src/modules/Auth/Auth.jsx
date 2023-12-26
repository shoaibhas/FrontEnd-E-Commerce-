import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostAdmin from "./PostAdmin";

//all admin
function GetAllAdmin() {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState([]);

  const getData = async () => {
    try {
      const res = await axiosInstance.get("/login/register");
      setUserData(res.data.a);
      // console.log(res.data);
      setMessage(res.data.message);
      toast.info("Data Fetch");
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <h2>{message}</h2>
      <table>
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}

export default GetAllAdmin;
//create admin

// const PostAdmin = () => {
//   const data = { firstName: ``, lastName: ``, email: ``, password: `` };
//   const [inputData, setInputData] = useState(data);
//   const [message, setMessage] = useState("");
//   const handleData = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axiosInstance.post("/login/register", inputData);
//       console.log(response);
//       if (response.status == 200) {
//         setMessage(response.data.message);
//         setInputData({ firstName: ``, lastName: "", email: ``, password: `` });
//         toast.info('Admin Add')
//       }
//     } catch (error) {
//       if(error.response){
//         setMessage(error.response.data.message)
//         toast.info(`Admin not Register`)
//       }
//     }
//   };
//   return (
//     <>
//       <label>fName</label>
//       <input
//         type="text"
//         name="firstName"
//         value={inputData.firstName}
//         onChange={handleData}
//       />
//       <br />
//       <label>lName</label>
//       <input
//         type="text"
//         name="lastName"
//         value={inputData.lastName}
//         onChange={handleData}
//       />
//       <br />
//       <label>Name</label>
//       <input
//         type="text"
//         name="email"
//         value={inputData.email}
//         onChange={handleData}
//       />
//       <br />
//       <label>Name</label>
//       <input
//         type="text"
//         name="password"
//         value={inputData.password}
//         onChange={handleData}
//       />
//       {/* <br /> */}
//       <button onClick={handleSubmit}>Add</button>
//       <ToastContainer/>
//     </>
//   );
// };

// export { PostAdmin };

// import React, { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axiosInstance from "../../../axios/Axios";
// import { useNavigate, useParams } from "react-router-dom";

// function GetAllAdmin() {
//   const [userData, setUserData] = useState([]);

//   const { admin_id } = useParams();

//   const UpdateAdmin = async (data) => {
//     return axiosInstance.put("/login/register/" + admin_id, data);
//   };
//   const handleAdminUpdate = async (data) => {
//     try {
//       const response = await UpdateAdmin(data);
//       console.log(response.data.message);
//       toast.success(response.data.message);
//       // formik.resetForm();
//     } catch (error) {
//       toast.error(error.response?.data?.message);
//       console.log(error.response?.data?.message);
//     }
//   };
//   // useEffect(() => {
//   //   getData();
//   // }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           {/* <th>count</th> */}
//           {/* <th>ID</th> */}
//           <th>FName</th>
//           <th>LName</th>
//           <th>Email</th>
//           <th>Actions</th>
//           <th>Delete</th>
//         </tr>
//       </thead>
//       <tbody>
//         {userData.map((user, index) => (
//           <tr key={index}>
//             {/* <td>{userData.length}</td> */}
//             {/* <td>{userData.sort}</td> */}

//             <td>{user.id}</td>
//             <td>{user.firstName}</td>
//             <td>{user.lastName}</td>
//             <td>{user.email}</td>
//             <td>
//               {/* <button
//                 onClick={() =>
//                   navigate("/login/register/" + user.id + "/update")
//                 }
//               >
//                 edit
//               </button>
//             </td>
//             <td>
//               <button
//                 onClick={() =>
//                   navigate("/login/register/" + user.id + "/delete")
//                 }
//               >
//                 Delete
//               </button> */}
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default GetAllAdmin;

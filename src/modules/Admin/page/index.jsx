import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../../axios/Axios";
import { useNavigate } from "react-router-dom";

function GetAllAdmin() {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      const res = await axiosInstance.get("/login/register");
      setUserData(res.data.a);
      // toast.success(res.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
  const DeleteAdmin = async (data) => {
    return axiosInstance.delete("/login/register/" + data);
  };
  const handleAdminDelete = async (data) => {
    try {
      const response = await DeleteAdmin(data);
      console.log(response.data.message);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data?.message);
      console.log(error.response?.data?.message);
    }
  };
  useEffect(() => {
    getData();
  }, [handleAdminDelete]);

  return (
    <table>
      <thead>
        <tr>
          {/* <th>count</th> */}
          {/* <th>ID</th> */}
          <th>FName</th>
          <th>LName</th>
          <th>Email</th>
          <th>Actions</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>
              <button
                onClick={() =>
                  navigate("/login/register/" + user.id + "/update")
                }
              >
                edit
              </button>
            </td>
            <td>
              <button onClick={() => handleAdminDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GetAllAdmin;

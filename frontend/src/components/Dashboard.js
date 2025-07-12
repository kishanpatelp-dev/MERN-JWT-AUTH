import React, { useEffect, useState } from "react";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/auth/protected");
        setMessage(res.data.message);
      } catch (err) {
        setMessage("Unauthorized");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{message}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;

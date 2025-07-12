import React, { useState } from "react";
import axios from "../axiosInstance";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("auth/login", {email, password});  
            localStorage.setItem("token", res.data.token);
            navigate("/");
        } catch (error) {
            alert(error.response.data.message);
        }
    };

    return(
        <form onSubmit={handleLogin}> 
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={(e) =>setEmail(e.target.value)} /> 
            <input type="password" onChange={(e) => setPassword(e.target.value)} /> 
            <button type="submit">Login</button>
        </form>
    )
} 

export default Login;

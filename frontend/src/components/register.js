import React, { useState } from "react";
import axios from "../axiosInstance ";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("auth/register", {email, password});
            alert("Registration successful");
        } catch (error) {
            alert(error.response.data.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}> 
            <h2>Register</h2>
            <input type="email" placeholder="Email" onChange={(e) =>setEmail(e.target.value)} /> 
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from  "./components/register";
import Login from "./components/login";
import Dashboard from "./components/Dashboard";

function App() {
    return(
        <BrowserRouter>
            <nav style={({ display: 'flex', gap: '1rem' })}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
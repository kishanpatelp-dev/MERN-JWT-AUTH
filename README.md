# MERN JWT Authentication System

A full-stack authentication system built using MongoDB, Express.js, React, and Node.js. It features secure user login, registration, bcrypt password hashing, JWT-based authentication, and protected routes.

---

## 🔐 Features

- User registration and login
- Secure password hashing with bcrypt
- JWT token-based authentication
- Protected backend routes using middleware
- React frontend with Axios for requests
- Frontend route protection (dashboard)
- Logout functionality

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Axios, React Router DOM
- **Backend**: Node.js, Express.js, MongoDB (Mongoose), bcryptjs, jsonwebtoken

---

## 📦 Project Structure

```
mern-jwt-auth/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
└── frontend/
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── axiosInstance.js
        └── components/
            ├── Login.jsx
            ├── Register.jsx
            └── Dashboard.jsx
```

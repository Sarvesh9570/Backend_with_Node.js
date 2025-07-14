# 🏨 Backend_with_Node.js

This is a Node.js-based backend API for managing hotel-related data such as users (persons) and menus. It uses MongoDB for the database and includes features like user authentication, secure token generation, and route-level access.

---

## 🚀 Features

- 🔒 Local Authentication using Passport.js
- 🔐 JWT-based token authentication
- 🧾 CRUD operations for **Persons** and **Menus**
- 🔄 MongoDB integration using Mongoose
- 📦 Environment variable support via `.env`
- 🧰 Clean project structure with modular routes
- 🛠 Middleware for logging and body parsing

---

## 🛠 Technologies Used

| Area            | Tech Stack                      |
|-----------------|----------------------------------|
| Server          | Node.js, Express.js              |
| Authentication  | Passport.js, JWT, bcrypt         |
| Database        | MongoDB with Mongoose ORM        |
| Configuration   | dotenv                           |
| Dev Tools       | nodemon                          |

---

## 🔧 Installation

git clone https://github.com/Sarvesh9570/Backend_with_Node.js.git
cd Backend_with_Node.js
npm install


# Start server
npm start

# Or using nodemon (dev mode)
nodemon server.js

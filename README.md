### GoSwift Assignment ###

# Node.js TypeScript API

This is a **Node.js + TypeScript** REST API using **Express** and **MongoDB**.

# GoSwift API

## 📌 Project Overview
GoSwift is a **Node.js** and **TypeScript**-based REST API that provides user and post management. It connects to external APIs to fetch and manage data, supports CRUD operations, and is built using **Express.js**.

## 🚀 Features
- Fetch users and posts from an external API.
- Fetch a single user by ID.
- Delete a user by ID.
- Uses TypeScript for type safety.
- Modular routing with Express.js.
- CORS enabled for cross-origin requests.
- User management (CRUD operations)
- Post and comment management
- MongoDB integration with Mongoose
- Modular routing and controllers
- TypeScript for type safety

## 🛠 Tech Stack
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB (if integrated)
- **Environment Variables:** dotenv
- **Middleware:** CORS, Body-parser

---

## 📁 Project Structure
```
node_assignment/
│── src/
│   ├── config/
│   │   ├── db.ts  (MongoDB connection)
│   ├── models/
│   │   ├── user.ts (User Schema)
│   │   ├── post.ts (Post Schema)
│   │   ├── comment.ts (Comment Schema)
│   ├── routes/
│   │   ├── userRoutes.ts (User-related routes)
│   ├── controllers/
│   │   ├── userController.ts (User controllers)
│   ├── server.ts  (Main server file)
│── package.json
│── tsconfig.json
│── README.md
```

## 🚀 Getting Started ##

## 🔧 Setup Instructions

### 1️⃣ Clone Repository
```sh
git clone https://github.com/Siddhu2668/GoSwift-Assignment.git
cd GoSwift-Assignment
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add:
```sh
PORT=3000
MONGO_URI=your_mongo_connection_string
```

### 4️⃣ Start the Server
```sh
npx nodemon src/server.ts
```

The server will start at: [http://localhost:3000](http://localhost:3000)

---

## 📌 API Endpoints

### ✅ **Root Endpoint**
```http
GET /
```
_Response:_
```
🚀 API is running...
```

### ✅ **User Endpoints**
| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| GET    | `/api/users`    | Fetch all users     |
| GET    | `/api/users/:id` | Fetch user by ID    |
| DELETE | `/api/users/:id` | Delete user by ID   |

### ✅ **Post Endpoints**
| Method | Endpoint      | Description       |
|--------|-------------|-------------------|
| GET    | `/api/posts` | Fetch all posts   |

---

## 🛠️ Scripts
```sh
npm run dev   # Start server in development mode
npm run build # Compile TypeScript to JavaScript
npm start     # Run compiled JavaScript
```

## 🐞 Troubleshooting
### **1️⃣ "Cannot GET /" Issue**
If you see `Cannot GET /`, ensure your server is running and use `/api` routes.

### **2️⃣ TypeScript Errors**
If you face TypeScript errors, check:
- Ensure you’re using `import fetch from "node-fetch";` (ESM module issue).
- Use `await usersResponse.json() as User[];` to fix type mismatch errors.

### **3️⃣ Nodemon Not Restarting**
Restart manually:
```sh
npx nodemon src/server.ts
```

### 2️⃣ Setup Environment Variables
Create a `.env` file and add the following:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 3️⃣ Run the Server
```sh
npm run dev
```
The server runs on `http://localhost:3000`.

## 🏗️ Future Enhancements
- Add authentication (JWT)
- Implement CRUD for posts & comments
- Improve error handling

---

💡 **Contributions welcome!** Fork & raise a PR. 🚀








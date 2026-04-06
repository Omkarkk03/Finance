#  Finance Backend API

## 📌 Overview

Backend system for managing financial records with role-based access control.
Supports CRUD operations, summary analytics, and user roles.

---

## 🚀 Features

* User management with roles (Viewer, Analyst, Admin)
* Financial records (income/expense)
* Filtering by date, category, type
* Dashboard summary (income, expenses, balance)
* Role-based access control
* Input validation & error handling

---

## 🛠️ Tech Stack

* Node.js, Express.js
* MongoDB, Mongoose

---

## ⚙️ Setup

```bash
git clone https://github.com/Omkarkk03/Finance.git
cd Finance
npm install
```

Create or update `.env`:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
```

Run server:

npx nodemon server.js
```

---

## 🔌 API Endpoints

### Users

* POST `/api/users` → Create user
* GET `/api/users` → Get users

### Records

* POST `/api/records` → Create record
* GET `/api/records` → Get records
* PUT `/api/records/:id` → Update
* DELETE `/api/records/:id` → Delete



## 🔐 Roles

* Viewer → Read only
* Analyst → Read + insights
* Admin → Full access

---

## 🧪 Testing

Use Postman to test all APIs.

---

## 👨‍💻 Author

Omkar K Kulkarni

# Finance

## Setup
1. npm install
2. add .env file
3. run: npx nodemon server.js

## APIs

### Auth
POST /api/auth/register  
POST /api/auth/login  

### Records
POST /api/records  
GET /api/records  

### Dashboard
GET /api/dashboard  

## Roles
- Admin: full access
- Analyst: read + insights
- Viewer: read only

## Tech Used
- Node.js
- Express
- MongoDB

## Features
- User authentication
- Role-based access
- Financial records CRUD
- Dashboard summary

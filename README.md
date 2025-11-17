# 📝 NestJS Tasks API

A simple and beginner‑friendly **NestJS backend API** for managing tasks. This project demonstrates the core NestJS concepts such as **Modules**, **Controllers**, **Services**, **Dependency Injection**, and **Routing**.

Perfect for developers who want to quickly understand how NestJS works.

---

## 🚀 Features

* Create new tasks
* Get all tasks
* Get a single task by ID
* Delete tasks
* In‑memory data storage (no database required)
* Clean module‑based architecture
* Root route that verifies server status

---

## 📁 Project Structure

```
src/
 ├── app.controller.ts      # Root controller (GET /)
 ├── app.module.ts          # Root module
 ├── main.ts                # App entry point
 └── tasks/
      ├── tasks.controller.ts   # Handles /tasks routes
      ├── tasks.service.ts      # Business logic for tasks
      └── task.interface.ts     # Task type definition
```

---

## 📌 API Endpoints

### **GET /**

Returns a welcome message.

```
{ "message": "Hello — Nest is running. Try GET /tasks" }
```

### **GET /tasks**

Fetches all tasks.

### **POST /tasks**

Creates a new task.
**Body:**

```json
{
  "title": "Learn NestJS"
}
```

### **GET /tasks/:id**

Fetches a single task by ID.

### **DELETE /tasks/:id**

Deletes a task by ID.

---

## 🛠️ Installation & Setup

### 1️⃣ Install Nest CLI

```
npm i -g @nestjs/cli
```

### 2️⃣ Create Project

```
nest new tasks-app
cd tasks-app
```

### 3️⃣ Install Dependencies (if needed)

```
npm install
```

### 4️⃣ Start the Development Server

```
npm run start:dev
```

Server will run at:

```
http://localhost:3000
```

---

## 🧠 How It Works

* The **Controller** handles incoming HTTP requests.
* The **Service** contains business logic (managing the tasks array).
* The **Module** binds them together.
* NestJS automatically injects the service into the controller.

This is the same structure used by real‑world NestJS applications.

---

## 🔮 Possible Extensions

* Add update task endpoint (PATCH)
* Add DTO & validation
* Connect to a real database (Prisma / TypeORM)
* Add authentication (JWT)
* Add Swagger API documentation
* Deploy to Render / Railway / Docker

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy coding! 🚀 NestJS is powerful — this project is just the starting point.

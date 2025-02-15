# 📢 Refer & Earn Backend

An **API-driven backend** for the **Refer & Earn** system, built using **Node.js, Express.js, Prisma ORM, and MySQL**. This backend handles referral submissions, database interactions, and email notifications.

---

## ✨ Features

- **RESTful APIs** to handle referral form submissions.
- **MySQL database integration** using Prisma ORM.
- **Form validation** and **error handling**.
- **Email notifications** using Google Mail Service API.

---

## 🛠️ Technologies Used

### **Backend**
- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Framework for building the backend API.
- **Prisma ORM**: For database management and connectivity.
- **MySQL**: Relational database for storing referral data.
- **Nodemailer**: For handling email notifications via Google Mail Service API.

---

## 🚀 Installation and Setup

### **Prerequisites**
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v16+)
- [MySQL](https://www.mysql.com/) (running instance)

---

### **Steps**

#### 1. Clone the Repository
```bash
git https://github.com/SuhaniKapasiya/Accredian-backend-task.git
cd Accredian-backend-task
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Set Up Environment Variables
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
GMAIL_USER="your-email@gmail.com"
GMAIL_PASS="your-app-password"

```
Replace placeholders with actual credentials.

#### 4. Set Up Database
```bash
npx prisma init
npx prisma generate
npx prisma migrate dev --name init
```

#### 5. Start the Application
```bash
npm run dev
```

---

## 🔗 API Endpoints

**Base URL**: `http://localhost:5000/api`

| Method | Endpoint      | Description                         |
|--------|-------------|-------------------------------------|
| POST   | `/refer`    | Submit a new referral               |


---

## 📧 Email Notifications

Emails are sent upon successful referral submission. Ensure Google Mail Service API is configured correctly.

---

## 📜 License

This project is licensed under the MIT License.

---

## 📞 Contact

For queries or suggestions, feel free to reach out:
- **Name**: Suhani
- **Email**: [suhanikapasiya2018@gmail.com](mailto:suhanikapasiya2018@gmail.com)
- **GitHub**: [https://github.com/SuhaniKapasiya](https://github.com/SuhaniKapasiya)



# 🔒 Wallet App Backend

This repository contains the backend for the **Wallet App**, a personal finance management tool. The backend is responsible for securely managing user data, handling transactions, and providing authorization for the frontend.

## 🚀 Features

- **User Authentication & Authorization**
  - Uses JWT tokens for secure authorization.
  - Passwords are hashed before storage for enhanced security.

- **📧 Email Verification**
  - Sends verification emails to newly registered users to confirm their accounts.

- **📊 Transaction Management**
  - Supports adding, deleting, and fetching transactions for each user.

- **💾 Data Storage**
  - Built on a **NoSQL database** using **Mongoose** for data modeling and management.

- **📜 API Documentation**
  - Swagger documentation available at:  
    [API Docs](https://wallet-app-back.onrender.com/docs/api-docs/)

## 🛠️ Tech Stack

- **Backend Framework:** Node.js (Express.js)
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT Tokens
- **Email Service:** NodeMailer (or any email service configured)

## 📄 API Documentation

The backend is fully documented using Swagger. You can explore the available endpoints and test them via the Swagger UI at:

[Swagger API Docs](https://wallet-app-back.onrender.com/docs/api-docs/)

## 🏁 Getting Started

To get the backend running locally, follow these steps:

### Prerequisites

- **Node.js** (v14.x or higher)
- **MongoDB** installed locally or hosted on a service like MongoDB Atlas

### Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/wallet-app-back.git
   cd wallet-app-back

2. **Install dependencies**
    ```bash
    npm install

3. **Set up environment variables**

Create a `.env` file in the root of your project with the following values:**
    ```bash
    MONGO_URI=<your-mongodb-url>
    JWT_SECRET=<your-jwt-secret>
    EMAIL_SERVICE=<your-email-service>
    EMAIL_USER=<your-email-username>
    EMAIL_PASS=<your-email-password>

4. **Run the server**
    ```bash
    npm start

## 🔗 Frontend
You can find the frontend repository for the Wallet App here:  
[Wallet App Frontend](https://github.com/TychonK/wallet-app-front)

## 🧑‍💻 Contribution Guidelines

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation of your changes.

## 📄 License

This project is licensed under the MIT License.



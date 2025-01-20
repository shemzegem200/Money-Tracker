# Money Tracker Website - GitHub README

Welcome to the Money Tracker Website repository! This web application helps you track your expenses and manage your finances efficiently. Built with the MERN stack, this application consists of a **MongoDB**, **Express.js**, **React.js**, and **Node.js** backend and frontend. The backend is dockerized and hosted on Azure, while the frontend is hosted on Netlify.

**PROJECT DEMO:**
website: https://money-tracker-site.netlify.app
api: https://mt-api-3.calmstone-c73a0be0.australiaeast.azurecontainerapps.io


## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [API Documentation](#api-documentation)
- [Installation](#installation)
- [Backend Deployment](#backend-deployment)
- [Frontend Deployment](#frontend-deployment)
- [Contributing](#contributing)

---

## Project Overview

The Money Tracker Website is a financial management tool that allows users to:
- Add transactions with details such as name, price, description, and date/time.
- View a list of all recorded transactions.
- Delete transactions when necessary.

The backend of this application is built with **Node.js** and **Express.js** and uses **MongoDB** for data storage. We utilize Docker for containerization of the backend, which is hosted on **Microsoft Azure**. The frontend is built using **React.js** and deployed on **Netlify** for a smooth and responsive user experience.

---

## Features

- **User Transaction Management**: Add, view, and delete transactions to keep track of your financial history.
- **Real-time Updates**: Add and delete transactions without reloading the page, thanks to React’s state management.
- **Simple & Intuitive UI**: Easily interact with your transactions using a clean and responsive interface.

---

## Tech Stack

- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Deployment**:
  - Backend: Docker, Azure
  - Frontend: Netlify
- **API Interaction**: RESTful APIs with Axios (for frontend-backend communication)

---

## API Documentation

The backend API exposes several endpoints to interact with transaction data. Here's a breakdown of the routes:

### 1. **Test Endpoint**
- **Path**: `/api/test`
- **Type**: `GET`
- **Function**: This simple test route returns a JSON object confirming the server is working.
- **Response Example**:
    ```json
    {
      "test": true
    }
    ```

### 2. **Add a Transaction**
- **Path**: `/api/transaction`
- **Type**: `POST`
- **Function**: This route allows users to create a new transaction by providing transaction details (name, price, description, datetime).
- **Request Body**:
    ```json
    {
      "name": "Coffee",
      "price": 5.50,
      "description": "Coffee at cafe",
      "datetime": "2025-01-15T10:00:00Z"
    }
    ```
- **Response Example**:
    ```json
    {
      "_id": "some-generated-id",
      "name": "Coffee",
      "price": 5.50,
      "description": "Coffee at cafe",
      "datetime": "2025-01-15T10:00:00Z"
    }
    ```

### 3. **Get All Transactions**
- **Path**: `/api/transactions`
- **Type**: `GET`
- **Function**: This route retrieves all stored transactions from the database and returns them in a JSON array.
- **Response Example**:
    ```json
    [
      {
        "_id": "some-id-1",
        "name": "Coffee",
        "price": 5.50,
        "description": "Coffee at cafe",
        "datetime": "2025-01-15T10:00:00Z"
      },
      {
        "_id": "some-id-2",
        "name": "Lunch",
        "price": 12.00,
        "description": "Lunch at restaurant",
        "datetime": "2025-01-16T12:00:00Z"
      }
    ]
    ```

### 4. **Delete a Transaction**
- **Path**: `/api/delete-transaction`
- **Type**: `POST`
- **Function**: This route deletes a specific transaction from the database based on its details (name, description, datetime, price).
- **Request Body**:
    ```json
    {
      "name": "Coffee",
      "price": 5.50,
      "description": "Coffee at cafe",
      "datetime": "2025-01-15T10:00:00Z"
    }
    ```
- **Response Example**:
    ```json
    {
      "acknowledged": true,
      "deletedCount": 1
    }
    ```

---

## Installation

### Prerequisites:
1. Node.js
2. MongoDB (for local development or use MongoDB Atlas for a cloud solution)
3. Docker (for containerized backend)
4. Docker Compose (optional, for ease of use with multiple containers)
5. Azure CLI (for deployment to Azure)
6. Git

### Steps:
1. **Clone the repository**:
    ```bash
    git clone https://github.com/shemzegem200/Money-Tracker.git
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```bash
    cd frontend
    npm install
    ```

4. **Run the backend locally**:
    In the `backend` folder, run the following:
    ```bash
    npm start
    ```

5. **Run the frontend locally**:
    In the `frontend` folder, run:
    ```bash
    npm run dev
    ```

---

## Backend Deployment

The backend is Dockerized for easy deployment and scalability. To deploy the backend to **Azure**:

1. **Dockerize the backend**:
    - Ensure you have a valid `Dockerfile` in the backend directory.
    - Build the Docker image:
      ```bash
      docker build -t money-tracker-backend .
      ```
    - Push the Docker image to **Azure Container Registry** or any container service of your choice.

2. **Deploy to Azure**:
    Use the Azure CLI to push and deploy the containerized backend to Azure:
    ```bash
    az container create --resource-group <your-resource-group> --name money-tracker-backend --image <image-name> --port 3000
    ```

---

## Frontend Deployment

To deploy the frontend to **Netlify**, follow these steps:

1. **Build the React app**:
    In the `frontend` folder, run:
    ```bash
    npm run build
    ```

2. **Deploy to Netlify**:
    - Sign up/log in to [Netlify](https://www.netlify.com/).
    - Create a new site from the GitHub repository.
    - Netlify will automatically deploy the site when you push changes to the repository.

---

## Contributing

We welcome contributions to enhance the features and functionalities of the Money Tracker Website! If you'd like to contribute:

1. Fork the repository.
2. Clone your fork locally:
   ```bash
   git clone https://github.com/shemzegem200/Money-Tracker.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
4. Make your changes and commit them:
   ```bash
   git commit -m "Add feature"
   ```
5. Push your changes:
   ```bash
   git push origin feature-branch
   ```
6. Create a pull request to the main repository.


We hope this tool helps you stay on top of your financial tracking! Feel free to contribute and make the application better!"# Money-Tracker1" 

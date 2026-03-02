# LeadCenter Backend

This is the backend server for the LeadCenter application.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd leadcenter/backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the root of the `backend` directory and add the following:
    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/leadcenter
    ```
    *Note: Replace the `MONGO_URI` with your actual MongoDB connection string.*

4.  **Run the server:**
    ```bash
    node server.js
    ```

## Scripts

Currently, the server is started directly using Node.js. You can also add scripts to `package.json` for convenience:

- **Start:** `node server.js`
- **Development (with watch mode):** `node --watch server.js` (Node.js v18.11+)

# My Express Backend

This is a Node.js Express backend project that provides a RESTful API for a web application. It includes features such as JWT-based authentication, file upload support, and a clean modular structure.

## Features

- **JWT Authentication**: Secure user authentication using JSON Web Tokens.
- **MongoDB Integration**: Connects to a MongoDB database for data storage.
- **File Upload Support**: Allows users to upload files using middleware.
- **Modular Structure**: Organized into controllers, middlewares, models, routes, and utilities for better maintainability.

## Project Structure

```
my-express-backend
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── entriesController.js
│   │   └── userController.js
│   ├── middlewares
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── upload.js
│   ├── models
│   │   ├── Entry.js
│   │   └── User.js
│   ├── routes
│   │   ├── auth.js
│   │   ├── entries.js
│   │   └── users.js
│   ├── utils
│   │   └── jwt.js
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-express-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   DATABASE_URL=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   ```

## Usage

1. Start the server:
   ```
   npm start
   ```

2. The API will be available at `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Log in an existing user.

- **Entries**
  - `GET /api/entries`: Retrieve all daily entries.
  - `POST /api/entries`: Create a new daily entry.
  - `DELETE /api/entries/:id`: Delete a daily entry.
  - `GET /api/entries/advances/:yearMonth`: Get monthly advances.

- **Users**
  - `GET /api/users`: Retrieve user profiles.
  - `PUT /api/users/:id`: Update user information.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
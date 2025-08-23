[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20042529&assignment_repo_type=AssignmentRepo)

# News Aggregator API

A RESTful API for user authentication, preference management, and personalized news aggregation. Built with Node.js, Express, and MongoDB.

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=20042529&assignment_repo_type=AssignmentRepo)

## Features

- **User Authentication:** Signup and login with JWT-based authentication.
- **User Preferences:** Save and update user news preferences.
- **News Aggregation:** Fetch top business headlines from the US using NewsAPI.
- **Secure Endpoints:** Protected routes for preferences and news, accessible only with a valid JWT.
- **Error Handling:** Centralized error handler for consistent API responses.

## Endpoints

### Authentication

- `POST /users/signup`  
  Register a new user.  
  **Body:**

  ```json
  {
    "name": "Clark Kent",
    "email": "clark@superman.com",
    "password": "Krypt()n8",
    "preferences": ["movies", "comics"]
  }
  ```

- `POST /users/login`  
  Login and receive a JWT token.  
  **Body:**
  ```json
  {
    "email": "clark@superman.com",
    "password": "Krypt()n8"
  }
  ```
  **Response:**
  ```json
  {
    "token": "<jwt_token>"
  }
  ```

### Preferences (Protected)

- `GET /users/preferences`  
  Get the current user's preferences.

- `PUT /users/preferences`  
  Update the current user's preferences.  
  **Body:**
  ```json
  {
    "preferences": ["movies", "comics", "games"]
  }
  ```

### News (Protected)

- `GET /news`  
  Get top business headlines for the US.

## Getting Started

### Prerequisites

- Node.js v18 or higher
- MongoDB instance (local or Atlas)

### Installation

1. Clone the repository:

   ```sh
   git clone <repo-url>
   cd news-aggregator-api-udaykompella
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables in a `.env` file:

   ```
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Start the server:
   ```sh
   node app.js
   ```

### Running Tests

Run the test suite with:

```sh
npm test
```

## Project Structure

- `app.js` - Main application entry point
- `routes/` - Express route handlers
- `Models/` - Mongoose models
- `middelware/` - Custom middleware (authentication, error handling)
- `utils/` - Utility functions (DB connection, custom errors)
- `test/` - Automated tests

## Dependencies

- express
- mongoose
- bcrypt
- jsonwebtoken
- dotenv
- newsapi
- tap (dev)
- supertest (dev)

## License

ISC

---

_Assignment 2 for Backend Engineering Launchpad_

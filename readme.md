# Tem Jogo Hoje - Backend

This is the backend for the "Tem Jogo Hoje" application. It registers the user's email and favorite teams to notify the user when their favorite team is playing.

## Features

- User registration with email
- Favorite teams management
- Notifications for upcoming games

## Installation

1. Clone the repository:
  ```sh
  git clone https://github.com/yourusername/tem-jogo-hoje-backend.git
  ```
2. Navigate to the project directory:
  ```sh
  cd tem-jogo-hoje-backend
  ```
3. Install dependencies:
  ```sh
  npm install
  ```

## Usage

1. Start the server:
  ```sh
  npm start
  ```
2. The server will be running on `http://localhost:3000`.

## API Endpoints

- `POST /register`: Register a new user with email and favorite teams.
- `GET /notifications`: Get notifications for the user's favorite teams.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

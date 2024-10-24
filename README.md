# Node.js HTTP Server using Express - MVC Architecture

This project is a basic Node.js HTTP server built using Express.js and follows the MVC (Model-View-Controller) design pattern. The structure separates concerns by organizing code into **Controllers**, **Models**, and **Routes** folders.

## Features

- Organized using MVC pattern.
- Express.js as the web framework.
- Modular code structure for scalability.
- Example API routes for basic operations (GET, POST, PUT, DELETE).

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14.x or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Express.js](https://expressjs.com/)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/KidronL/sample-http-express
   ```

2. Navigate into the project directory:

   ```bash
   cd sample-http-express
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node app.js
   ```

2. The server will start on `http://localhost:3000/` (or a custom port if specified).

3. You can test the endpoints using a tool like [Postman](https://www.postman.com/) or cURL.

## MVC Explanation

### Controllers

Controllers handle the logic for processing requests and sending responses. They call the relevant model functions to interact with the data.

### Models

Models represent the data and provide an interface to interact with it. In a real-world application, this could be linked to a database.

### Routes

Routes define the API endpoints and map them to the appropriate controller functions.


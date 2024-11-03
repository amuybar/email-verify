# Email Verification Service

A simple Node.js TypeScript application that verifies user emails through a verification code sent to the user's email address. This project utilizes Supabase for database management and Nodemailer with OAuth2 for sending emails.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [License](#license)
- [Contributing](#contributing)

## Features

- User inputs their email to receive a verification code.
- A unique 6-digit code is generated and sent to the user's email.
- User inputs the received code to verify their email address.
- Error handling and logging for better debugging.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **TypeScript**: Typed superset of JavaScript for improved development experience.
- **Express**: Web framework for Node.js to build RESTful APIs.
- **Supabase**: Open-source Firebase alternative for database management.
- **Nodemailer**: Email sending library for Node.js with support for OAuth2.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables from a `.env` file.
- **nodemon**: Tool for automatically restarting the server during development.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (Node Package Manager)
- A Supabase account for managing your database



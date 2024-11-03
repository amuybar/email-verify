# Email Verification Service

A simple Node.js TypeScript application that verifies user emails through a verification code sent to the user's email address. This project utilizes Supabase for database management and Nodemailer with OAuth2 for sending emails.

## Table of Contents

- [Email Verification Service](#email-verification-service)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [.env](#env)
    - [Set up the database:](#set-up-the-database)

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


### .env

```
 PORT=5000 
SUPABASE_URL=https://your-supabase-url.supabase.co  
SUPABASE_KEY=your-supabase-key  
EMAIL_USER=your-email@gmail.com  
EMAIL_CLIENT_ID=your-google-client-id  
EMAIL_CLIENT_SECRET=your-google-client-secret  
EMAIL_REFRESH_TOKEN=your-google-refresh-token  

```

### Set up the database:

Go to your Supabase dashboard and create a table named verifications with the following structure:

```
CREATE TABLE verifications (  
    id SERIAL PRIMARY KEY,  
    email VARCHAR(255) NOT NULL,  
    code VARCHAR(6) NOT NULL,  
    created_at TIMESTAMP DEFAULT NOW()  
);  
```
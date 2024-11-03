const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

let verificationCodes = {};

// Configure your email service
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS  // Your email password
    }
});

// Endpoint to send verification code
app.post('/send-code', (req, res) => {
    const { email } = req.body;
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit code

    verificationCodes[email] = code;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your Verification Code',
        text: `Your verification code is: ${code}`
    };

    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.send('Verification code sent!');
    });
});

// Endpoint to verify code
app.post('/verify-code', (req, res) => {
    const { email, code } = req.body;

    if (verificationCodes[email] === code) {
        delete verificationCodes[email]; // Clear the code after verification
        return res.send('Code verified! You can proceed.');
    }
    res.status(400).send('Invalid code.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

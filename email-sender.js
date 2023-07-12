const nodemailer = require('nodemailer');

// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
  service: 'your-email-service',
  auth: {
    user: 'adembouguerra17@gmail.com',
    pass: '12345678aaa',
  },
});

// Define the email options
const mailOptions = {
  from: '',
  to: 'ademb@yahoo.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});

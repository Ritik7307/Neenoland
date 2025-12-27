const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Enquiry endpoint
app.post('/api/enquiry', async (req, res) => {
  try {
    const { name, phone, guests, date } = req.body;

    // Validation
    if (!name || !phone || !guests || !date) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Format the date for display
    const formattedDate = new Date(date).toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL || 'neenoland4u@gmail.com',
      subject: `New Party Booking Enquiry - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 10px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #facc15 0%, #eab308 100%);
              color: #000;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
              font-weight: bold;
              font-size: 24px;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .info-row {
              margin: 20px 0;
              padding: 15px;
              background: #f5f5f5;
              border-left: 4px solid #facc15;
              border-radius: 5px;
            }
            .label {
              font-weight: bold;
              color: #666;
              font-size: 14px;
              text-transform: uppercase;
              letter-spacing: 1px;
            }
            .value {
              font-size: 18px;
              color: #000;
              margin-top: 5px;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              🎉 New Party Booking Enquiry 🎉
            </div>
            <div class="content">
              <p>You have received a new party booking enquiry from your website:</p>
              
              <div class="info-row">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="info-row">
                <div class="label">Phone Number</div>
                <div class="value">${phone}</div>
              </div>
              
              <div class="info-row">
                <div class="label">Number of Guests</div>
                <div class="value">${guests}</div>
              </div>
              
              <div class="info-row">
                <div class="label">Preferred Date</div>
                <div class="value">${formattedDate}</div>
              </div>
              
              <div class="footer">
                <p>This enquiry was submitted from the Neeno Land website contact form.</p>
                <p>Please contact the customer at their provided phone number to confirm the booking.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        New Party Booking Enquiry
        
        Name: ${name}
        Phone Number: ${phone}
        Number of Guests: ${guests}
        Preferred Date: ${formattedDate}
        
        Please contact the customer to confirm the booking.
      `
    };

    // Send email
    const transporter = createTransporter();
    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: 'Enquiry submitted successfully'
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send enquiry. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is running'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});


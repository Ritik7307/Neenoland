# Neeno Land Backend Server

This is the backend server for handling enquiry form submissions and sending emails.

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your email credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   RECIPIENT_EMAIL=neenoland4u@gmail.com
   PORT=5000
   ```

### 3. Gmail App Password Setup

Since Gmail requires app-specific passwords for SMTP:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (must be enabled)
3. Scroll down to **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter "Neeno Land Server" as the name
6. Click **Generate**
7. Copy the 16-character password and use it as `EMAIL_PASS` in `.env`

### 4. Run the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will run on `http://localhost:5000` by default.

## API Endpoints

### POST `/api/enquiry`
Submit an enquiry form.

**Request Body:**
```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "guests": "25",
  "date": "2024-12-25"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Enquiry submitted successfully"
}
```

### GET `/api/health`
Health check endpoint.

## Troubleshooting

- **Email not sending**: Check that you're using an App Password, not your regular Gmail password
- **CORS errors**: Make sure the frontend URL is allowed in CORS settings
- **Port already in use**: Change the PORT in `.env` file


# Enquiry Form Setup Instructions

This guide will help you set up the enquiry form with email functionality.

## Overview

The enquiry form has been added to the Contact page and includes:
- Name field
- Phone number field
- Number of guests field
- Preferred date field
- Backend server to handle form submissions
- Email notifications sent to neenoland4u@gmail.com

## Step-by-Step Setup

### Step 1: Install Backend Dependencies

1. Open a terminal/command prompt
2. Navigate to the server directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Step 2: Configure Email Settings

1. **Create environment file:**
   - Copy `server/env.example` to `server/.env`
   - On Windows: `copy server\env.example server\.env`
   - On Mac/Linux: `cp server/env.example server/.env`

2. **Get Gmail App Password:**
   - Go to https://myaccount.google.com/
   - Click on **Security** in the left sidebar
   - Enable **2-Step Verification** if not already enabled
   - Scroll down to **App passwords**
   - Click **Select app** → Choose **Mail**
   - Click **Select device** → Choose **Other (Custom name)**
   - Enter "Neeno Land Server" and click **Generate**
   - Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

3. **Edit the .env file:**
   Open `server/.env` and update with your credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=abcd efgh ijkl mnop
   RECIPIENT_EMAIL=neenoland4u@gmail.com
   PORT=5000
   ```
   - Replace `your-email@gmail.com` with the Gmail address you'll use to send emails
   - Replace `abcd efgh ijkl mnop` with the app password you just generated
   - The recipient email is already set to `neenoland4u@gmail.com`

### Step 3: Configure Frontend Backend URL

1. Create a `.env` file in the root directory (same level as `package.json`)
2. Add the following:
   ```
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```
   - For production, change this to your deployed backend URL

### Step 4: Start the Backend Server

1. In the terminal, make sure you're in the `server` directory
2. Start the server:
   ```bash
   npm start
   ```
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```
3. You should see: `Server is running on port 5000`

### Step 5: Start the Frontend

1. Open a **new terminal/command prompt** window
2. Navigate to the project root directory
3. Start the React app:
   ```bash
   npm start
   ```
4. The app will open at `http://localhost:3000`

### Step 6: Test the Form

1. Navigate to the Contact page (`http://localhost:3000/contact`)
2. Scroll down to find the "Book Your Party" form
3. Fill in all fields:
   - Name
   - Phone number (10 digits)
   - Number of guests
   - Preferred date (must be a future date)
4. Click "Submit Enquiry"
5. Check the email inbox for `neenoland4u@gmail.com` - you should receive the enquiry details

## Project Structure

```
neo-land/
├── src/
│   ├── components/
│   │   ├── EnquiryForm.js      # Form component
│   │   └── EnquiryForm.css     # Form styles
│   └── pages/
│       └── ContactPage.js      # Updated with form
├── server/
│   ├── server.js               # Backend server
│   ├── package.json            # Backend dependencies
│   ├── .env                    # Environment variables (create this)
│   └── env.example             # Example env file
└── .env                        # Frontend env (create this)
```

## Troubleshooting

### Email Not Sending

1. **Check App Password:**
   - Make sure you're using an App Password, not your regular Gmail password
   - App passwords are 16 characters with spaces (remove spaces in .env file)

2. **Check 2-Step Verification:**
   - App passwords only work if 2-Step Verification is enabled

3. **Check .env file:**
   - Make sure there are no extra spaces or quotes
   - Format: `EMAIL_USER=email@gmail.com` (no quotes needed)

4. **Check server logs:**
   - Look at the terminal where the server is running
   - Any errors will be displayed there

### CORS Errors

- The backend is configured to allow requests from `http://localhost:3000`
- If deploying, update CORS settings in `server/server.js`

### Form Not Submitting

1. **Check backend is running:**
   - Make sure the server is running on port 5000
   - Visit `http://localhost:5000/api/health` to verify

2. **Check browser console:**
   - Open Developer Tools (F12)
   - Check the Console tab for any errors

3. **Check network tab:**
   - In Developer Tools, go to Network tab
   - Submit the form and check if the request to `/api/enquiry` is successful

## Production Deployment

### Backend Deployment (Recommended: Heroku, Railway, or Render)

1. **Heroku:**
   ```bash
   cd server
   heroku create neeno-land-backend
   heroku config:set EMAIL_USER=your-email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   heroku config:set RECIPIENT_EMAIL=neenoland4u@gmail.com
   git push heroku main
   ```

2. **Update Frontend .env:**
   - Change `REACT_APP_BACKEND_URL` to your deployed backend URL
   - Example: `REACT_APP_BACKEND_URL=https://neeno-land-backend.herokuapp.com`

3. **Rebuild Frontend:**
   ```bash
   npm run build
   ```

### Frontend Deployment

- Deploy the `build` folder to your hosting service (Netlify, Vercel, etc.)
- Make sure to set the `REACT_APP_BACKEND_URL` environment variable in your hosting platform

## Security Notes

- Never commit `.env` files to git
- The `.env` file is already in `.gitignore`
- App passwords are safer than regular passwords
- Consider using environment variables in your hosting platform instead of .env files in production

## Support

If you encounter any issues:
1. Check the server terminal for error messages
2. Check the browser console (F12) for frontend errors
3. Verify all environment variables are set correctly
4. Make sure both frontend and backend servers are running

